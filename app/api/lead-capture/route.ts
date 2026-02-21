import { NextResponse } from "next/server";
import * as Sentry from "@sentry/nextjs";
import { getClientIp } from "@/lib/request-ip";
import { applyMemoryRateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

const LEAD_CAPTURE_WINDOW_MS = 60_000;
const LEAD_CAPTURE_LIMIT = 15;

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeEmail(email: string): string {
  return email.toLowerCase().trim();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidWhatsapp(raw: string): boolean {
  const digits = raw.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

function getHoneypotValue(body: unknown): string {
  if (!body || typeof body !== "object") return "";
  const fields = body as Record<string, unknown>;
  return asTrimmedString(fields.website || fields.company || fields.hp || fields.honeypot);
}

function tooManyRequestsResponse(retryAfterSeconds: number) {
  return NextResponse.json(
    {
      success: false,
      message: "Muitas tentativas em sequência. Aguarde alguns segundos.",
    },
    {
      status: 429,
      headers: {
        "Retry-After": String(retryAfterSeconds),
      },
    }
  );
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const rateLimit = applyMemoryRateLimit({
    bucket: "lead-capture",
    key: ip,
    limit: LEAD_CAPTURE_LIMIT,
    windowMs: LEAD_CAPTURE_WINDOW_MS,
  });

  if (!rateLimit.allowed) {
    Sentry.captureMessage("Lead capture rate limit exceeded", {
      level: "warning",
      tags: {
        component: "lead-capture",
        error_type: "rate_limit",
      },
      extra: {
        ip,
      },
    });

    return tooManyRequestsResponse(rateLimit.retryAfterSeconds);
  }

  try {
    const body = await request.json();
    const name = asTrimmedString(body?.name);
    const email = normalizeEmail(asTrimmedString(body?.email));
    const whatsapp = asTrimmedString(body?.whatsapp);
    const source = asTrimmedString(body?.source);
    const honeypot = getHoneypotValue(body);

    // Return success for honeypot hits to avoid feedback loops for bots.
    if (honeypot) {
      return NextResponse.json({
        success: true,
        message: "Lead captured successfully",
      });
    }

    if (name.length < 2 || name.length > 120) {
      return NextResponse.json(
        { success: false, message: "Informe um nome válido." },
        { status: 400 }
      );
    }

    if (!isValidWhatsapp(whatsapp)) {
      return NextResponse.json(
        { success: false, message: "Informe um WhatsApp válido." },
        { status: 400 }
      );
    }

    if (email && !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Por favor, use um e-mail válido." },
        { status: 400 }
      );
    }

    console.log("Lead capture request:", {
      name,
      email: email || "(not provided)",
      whatsapp,
      source: source || "(not provided)",
      ip,
    });

    // Set user context for Sentry
    Sentry.setUser({
      email: email || undefined,
      username: name,
    });

    // Add breadcrumb for lead capture attempt
    Sentry.addBreadcrumb({
      category: "lead-capture",
      message: "Lead capture attempt",
      level: "info",
      data: {
        name,
        hasEmail: !!email,
        whatsapp,
        source,
        ip,
      },
    });

    // If no email provided, just log and return success
    // (Mailchimp requires email, so we skip it)
    if (!email) {
      console.log("Lead captured (no email, skipping Mailchimp):", {
        name,
        whatsapp,
        source,
        ip,
      });
      return NextResponse.json({
        success: true,
        message: "Lead captured successfully",
      });
    }

    // Mailchimp configuration
    const apiKey = process.env.MAILCHIMP_API_KEY;
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
    const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

    if (!apiKey || !audienceId || !serverPrefix) {
      console.error("Mailchimp configuration missing");

      // Capture configuration error in Sentry
      Sentry.captureException(new Error("Mailchimp configuration missing"), {
        level: "error",
        tags: {
          component: "lead-capture",
          error_type: "configuration",
        },
        extra: {
          hasApiKey: !!apiKey,
          hasAudienceId: !!audienceId,
          hasServerPrefix: !!serverPrefix,
        },
      });

      return NextResponse.json(
        { success: false, message: "Server configuration error" },
        { status: 500 }
      );
    }

    // Add subscriber to Mailchimp
    const tags = ["flowo"];
    if (source) {
      tags.push(source.slice(0, 50));
    }

    const mailchimpResponse = await fetch(
      `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
          merge_fields: {
            FNAME: name.split(" ")[0] || name,
            LNAME: name.split(" ").slice(1).join(" ") || "",
            PHONE: whatsapp,
          },
          tags,
        }),
      }
    );

    if (!mailchimpResponse.ok) {
      const errorData = await mailchimpResponse.json();
      console.error("Mailchimp error:", errorData);

      // If user already exists, still return success
      if (errorData.title === "Member Exists") {
        console.log("Lead already exists in Mailchimp:", email);

        // Log this as info in Sentry (not an error)
        Sentry.captureMessage("Duplicate lead submission", {
          level: "info",
          tags: {
            component: "lead-capture",
            error_type: "duplicate",
          },
          extra: {
            email,
            name,
            ip,
          },
        });

        return NextResponse.json({
          success: true,
          message: "Lead captured successfully",
        });
      }

      // Handle invalid email
      if (
        errorData.title === "Invalid Resource" &&
        errorData.detail?.includes("looks fake or invalid")
      ) {
        // Capture invalid email in Sentry
        Sentry.captureMessage("Invalid email provided", {
          level: "warning",
          tags: {
            component: "lead-capture",
            error_type: "validation",
          },
          extra: {
            email,
            name,
            errorDetail: errorData.detail,
          },
        });

        return NextResponse.json(
          { success: false, message: "Por favor, use um e-mail válido." },
          { status: 400 }
        );
      }

      // Capture other Mailchimp errors

      Sentry.captureException(errorData, {
        level: "error",
        tags: {
          component: "lead-capture",
          error_type: "mailchimp_api",
        },
          extra: {
            mailchimpError: errorData,
            name,
            email,
            whatsapp,
            source,
            ip,
          },
        });

      throw errorData;
    }

    console.log("Lead captured and added to Mailchimp:", {
      name,
      email,
      whatsapp,
      source,
      ip,
    });

    // Add success breadcrumb
    Sentry.addBreadcrumb({
      category: "lead-capture",
      message: "Lead successfully captured",
      level: "info",
      data: {
        name,
        email,
        source,
        ip,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Lead captured successfully",
    });
  } catch (error) {
    console.error("Error capturing lead:", error);

    // Capture the error in Sentry with full context
    Sentry.captureException(error, {
      level: "error",
      tags: {
        component: "lead-capture",
        error_type: "uncaught",
      },
      contexts: {
        lead: {
          name: "Lead Information",
          data: {
            // Only send non-sensitive information
            hasName: true,
            hasEmail: !!request.headers.get("content-type"),
            hasWhatsapp: true,
            ip,
          },
        },
      },
    });

    return NextResponse.json(
      { success: false, message: "Error capturing lead" },
      { status: 500 }
    );
  }
}
