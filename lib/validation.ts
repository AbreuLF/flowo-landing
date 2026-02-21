import { z } from "zod";

function trimOrEmpty(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

const whatsappSchema = z
  .string()
  .trim()
  .refine((value) => {
    const digits = value.replace(/\D/g, "");
    return digits.length >= 10 && digits.length <= 15;
  }, "Informe um WhatsApp válido.");

export const leadCaptureSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email()
    .optional()
    .or(z.literal("")),
  whatsapp: whatsappSchema,
  source: z.string().trim().max(120).optional().or(z.literal("")),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  turnstileToken: z
    .string()
    .trim()
    .max(4096)
    .optional()
    .or(z.literal("")),
});

export const contactFormSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().toLowerCase().email(),
  message: z.string().trim().min(10).max(2000),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  turnstileToken: z
    .string()
    .trim()
    .max(4096)
    .optional()
    .or(z.literal("")),
});

export function getValidationMessage(error: z.ZodError): string {
  const firstIssue = error.issues[0];
  return firstIssue?.message || "Dados inválidos.";
}

export function getHoneypotValue(input: unknown): string {
  if (!input || typeof input !== "object") return "";
  const record = input as Record<string, unknown>;
  return trimOrEmpty(record.company || record.website || record.hp || record.honeypot);
}
