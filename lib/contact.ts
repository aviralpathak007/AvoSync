import { budgetRanges, projectTypes } from "@/content/site";

/** Fields the visitor fills in. Shared by the client form and the route handler. */
export interface ContactFields {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

/** Fields plus the hidden honeypot that real people never see. */
export interface ContactPayload extends ContactFields {
  trap: string;
}

type ContactErrors = Partial<Record<keyof ContactFields, string>>;

export const CONTACT_LIMITS = {
  nameMin: 2,
  nameMax: 80,
  emailMax: 254,
  messageMin: 20,
  messageMax: 2000,
} as const;

export const EMPTY_CONTACT: ContactPayload = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  message: "",
  trap: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(values: ContactFields): ContactErrors {
  const errors: ContactErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (name.length < CONTACT_LIMITS.nameMin) errors.name = "Please tell us your name.";
  else if (name.length > CONTACT_LIMITS.nameMax) errors.name = `Keep your name under ${CONTACT_LIMITS.nameMax} characters.`;

  if (!email) errors.email = "We need an email to reply to.";
  else if (!EMAIL_PATTERN.test(email) || email.length > CONTACT_LIMITS.emailMax) errors.email = "That email doesn't look right.";

  if (!projectTypes.includes(values.projectType)) errors.projectType = "Pick the closest project type.";
  if (!budgetRanges.includes(values.budget)) errors.budget = "Choose a rough budget range.";

  if (message.length < CONTACT_LIMITS.messageMin) {
    errors.message = `Tell us a bit more (at least ${CONTACT_LIMITS.messageMin} characters).`;
  } else if (message.length > CONTACT_LIMITS.messageMax) {
    errors.message = `Please keep it under ${CONTACT_LIMITS.messageMax} characters.`;
  }

  return errors;
}

/** Narrows untrusted JSON from the request body into a ContactPayload (or null). */
export function parseContactPayload(input: unknown): ContactPayload | null {
  if (typeof input !== "object" || input === null) return null;
  const record = input as Record<string, unknown>;
  const read = (key: keyof ContactPayload): string => (typeof record[key] === "string" ? record[key] : "");
  return {
    name: read("name"),
    email: read("email"),
    projectType: read("projectType"),
    budget: read("budget"),
    message: read("message"),
    trap: read("trap"),
  };
}
