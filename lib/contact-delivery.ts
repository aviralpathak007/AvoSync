import type { ContactFields } from "@/lib/contact";

function formatEnquiry(message: ContactFields): string {
  return [
    `Name: ${message.name.trim()}`,
    `Email: ${message.email.trim()}`,
    `Project type: ${message.projectType}`,
    `Budget: ${message.budget}`,
    "",
    message.message.trim(),
  ].join("\n");
}

/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  INTEGRATION POINT: wire up real email delivery here.        ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * Return `true` once the message has been handed to your provider, `false` if it
 * could not be sent. Until you enable one of the options below:
 *   - in development the enquiry is logged to the terminal and reported as sent;
 *   - in production the API replies 503 and the form tells visitors to email you.
 * (We never silently pretend to deliver a real lead.)
 *
 * Required env vars are listed in .env.example and the README.
 *
 * ── Option A: Resend (https://resend.com) ─────────────────────
 *   Env: RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL (a verified sender)
 *
 *   const response = await fetch("https://api.resend.com/emails", {
 *     method: "POST",
 *     headers: {
 *       Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
 *       "Content-Type": "application/json",
 *     },
 *     body: JSON.stringify({
 *       from: process.env.CONTACT_FROM_EMAIL,
 *       to: [process.env.CONTACT_TO_EMAIL],
 *       reply_to: message.email.trim(),
 *       subject: `New project enquiry from ${message.name.trim()}`,
 *       text: formatEnquiry(message),
 *     }),
 *   });
 *   return response.ok;
 *
 * ── Option B: Formspree (https://formspree.io) ────────────────
 *   Env: FORMSPREE_ENDPOINT (e.g. https://formspree.io/f/xxxxxxxx)
 *
 *   const response = await fetch(process.env.FORMSPREE_ENDPOINT!, {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json", Accept: "application/json" },
 *     body: JSON.stringify({ ...message, message: message.message.trim() }),
 *   });
 *   return response.ok;
 */
export async function deliverContactMessage(message: ContactFields): Promise<boolean> {
  if (process.env.NODE_ENV !== "production") {
    console.info("\n[contact] New enquiry (dev mode, not emailed):\n" + formatEnquiry(message) + "\n");
    return true;
  }

  return false;
}
