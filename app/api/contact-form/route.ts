import { NextResponse } from "next/server";
import { getClientIp } from "@/lib/request-ip";
import { applyMemoryRateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

const CONTACT_WINDOW_MS = 60_000;
const CONTACT_LIMIT = 10;

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getHoneypotValue(body: unknown): string {
  if (!body || typeof body !== "object") return "";
  const fields = body as Record<string, unknown>;
  return asTrimmedString(fields.website || fields.company || fields.hp || fields.honeypot);
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const rateLimit = applyMemoryRateLimit({
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
    const name = asTrimmedString(body?.name);
    const email = asTrimmedString(body?.email).toLowerCase();
    const message = asTrimmedString(body?.message);
    const honeypot = getHoneypotValue(body);

    // Return success for honeypot submissions to discourage bot retries.
    if (honeypot) {
      return NextResponse.json({
        success: true,
        message: "Message sent successfully",
      });
    }

    if (name.length < 2 || name.length > 120) {
      return NextResponse.json(
        { success: false, message: "Informe um nome válido." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Informe um e-mail válido." },
        { status: 400 }
      );
    }

    if (message.length < 10 || message.length > 2000) {
      return NextResponse.json(
        { success: false, message: "Mensagem inválida." },
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
