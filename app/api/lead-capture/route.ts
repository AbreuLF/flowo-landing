import { NextResponse } from "next/server";
import * as Sentry from "@sentry/nextjs";
import { getClientIp } from "@/lib/request-ip";
import { applyRateLimit } from "@/lib/rate-limit";
import { leadCaptureSchema, getValidationMessage } from "@/lib/validation";
import { verifyTurnstile } from "@/lib/turnstile";

export const runtime = "nodejs";
export const preferredRegion = ["gru1"];

const LEAD_CAPTURE_WINDOW_MS = 60_000;
const LEAD_CAPTURE_LIMIT = 15;

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
  const rateLimit = await applyRateLimit({
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
    const parsed = leadCaptureSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: getValidationMessage(parsed.error) },
        { status: 400 }
      );
    }

    const {
      name,
      email,
      whatsapp,
      source = "",
      company = "",
      turnstileToken = "",
    } = parsed.data;

    // Return success for honeypot hits to avoid feedback loops for bots.
    if (company) {
      return NextResponse.json({
        success: true,
        message: "Lead captured successfully",
      });
    }

    const turnstileCheck = await verifyTurnstile({
      token: turnstileToken,
      ip,
      expectedAction: "lead_capture",
    });

    if (!turnstileCheck.success) {
      return NextResponse.json(
        { success: false, message: "Falha na verificação anti-bot." },
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

      if (errorData.title === "Member Exists") {
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

      if (
        errorData.title === "Invalid Resource" &&
        errorData.detail?.includes("looks fake or invalid")
      ) {
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
          source,
          ip,
        },
      });

      throw errorData;
    }

    return NextResponse.json({
      success: true,
      message: "Lead captured successfully",
    });
  } catch (error) {
    console.error("Error capturing lead:", error);

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
