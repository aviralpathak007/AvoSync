import { NextResponse } from "next/server";
import { parseContactPayload, validateContact } from "@/lib/contact";
import { deliverContactMessage } from "@/lib/contact-delivery";

/** Generous ceiling for a short enquiry; stops oversized bodies early. */
const MAX_BODY_BYTES = 10_000;

export async function POST(request: Request) {
  const declaredLength = Number(request.headers.get("content-length") ?? 0);
  if (declaredLength > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: "payload_too_large" }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const payload = parseContactPayload(body);
  if (!payload) {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  // Honeypot: real visitors never see this field. Bots that fill it get a fake success.
  if (payload.trap.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  // Never trust the client: validate again on the server.
  const errors = validateContact(payload);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, error: "validation_failed", errors }, { status: 422 });
  }

  try {
    const delivered = await deliverContactMessage(payload);
    if (!delivered) {
      return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
    }
  } catch (error) {
    console.error("[contact] delivery failed", error);
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
