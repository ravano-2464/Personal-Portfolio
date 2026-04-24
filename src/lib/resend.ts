import { Resend } from "resend";
import type { ContactPayload } from "@/lib/validators/contact";

let resendClient: Resend | null = null;

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return null;
  }

  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }

  return resendClient;
}

export async function sendContactEmail(payload: ContactPayload) {
  const resend = getResendClient();

  if (!resend) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

  if (!toEmail) {
    throw new Error("CONTACT_TO_EMAIL is not configured.");
  }

  await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: payload.email,
    subject: `Portfolio inquiry from ${payload.name}`,
    text: [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      "",
      "Message:",
      payload.message,
    ].join("\n"),
  });
}
