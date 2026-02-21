import { NextResponse } from "next/server";
import { getClientIp } from "@/lib/request-ip";
import { applyRateLimit } from "@/lib/rate-limit";
import { contactFormSchema, getValidationMessage } from "@/lib/validation";
import { verifyTurnstile } from "@/lib/turnstile";

export const runtime = "nodejs";
export const preferredRegion = ["gru1"];

const CONTACT_WINDOW_MS = 60_000;
const CONTACT_LIMIT = 10;

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const rateLimit = await applyRateLimit({
    bucket: "contact-form",
    key: ip,
    limit: CONTACT_LIMIT,
    windowMs: CONTACT_WINDOW_MS,
  });

  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        success: false,
        message: "Muitas tentativas em sequência. Aguarde alguns segundos.",
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(rateLimit.retryAfterSeconds),
        },
      }
    );
  }

  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: getValidationMessage(parsed.error) },
        { status: 400 }
      );
    }

    const { name, email, message, company = "", turnstileToken = "" } = parsed.data;

    // Return success for honeypot submissions to discourage bot retries.
    if (company) {
      return NextResponse.json({
        success: true,
        message: "Message sent successfully",
      });
    }

    const turnstileCheck = await verifyTurnstile({
      token: turnstileToken,
      ip,
      expectedAction: "contact_form",
    });

    if (!turnstileCheck.success) {
      return NextResponse.json(
        { success: false, message: "Falha na verificação anti-bot." },
        { status: 400 }
      );
    }

    // TODO: Implement contact form submission logic (e.g., send email, save to database)
    console.log("Contact form submitted:", {
      name,
      email,
      messageLength: message.length,
      ip,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      { success: false, message: "Error sending message" },
      { status: 500 }
    );
  }
}
