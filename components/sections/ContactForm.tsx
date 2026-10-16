"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { budgetRanges, contactSection, projectTypes } from "@/content/site";
import {
  CONTACT_LIMITS,
  EMPTY_CONTACT,
  validateContact,
  type ContactFields,
  type ContactPayload,
} from "@/lib/contact";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";
type FieldKey = keyof ContactFields;
type Touched = Partial<Record<FieldKey, boolean>>;

const FIELD_ORDER: FieldKey[] = ["name", "email", "projectType", "budget", "message"];

const controlClass =
  "w-full rounded-xl border border-line bg-surface-2/80 px-4 py-3 text-base text-fg placeholder:text-subtle transition focus:border-cyan/60 focus:ring-4 focus:ring-cyan/15 focus:outline-none aria-[invalid=true]:border-danger/70 aria-[invalid=true]:focus:ring-danger/15";

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-fg">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 flex items-center gap-1.5 text-sm text-danger">
          <Icon name="alert" size={14} className="shrink-0" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function ContactForm() {
  const [values, setValues] = useState<ContactPayload>(EMPTY_CONTACT);
  const [touched, setTouched] = useState<Touched>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");
  const successRef = useRef<HTMLDivElement>(null);

  const errors = validateContact(values);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  const controlProps = (key: FieldKey) => {
    const error = touched[key] ? errors[key] : undefined;
    return {
      id: `contact-${key}`,
      name: key,
      value: values[key],
      "aria-required": true as const,
      "aria-invalid": error ? true : undefined,
      "aria-describedby": error ? `contact-${key}-error` : undefined,
      onBlur: () => setTouched((current) => ({ ...current, [key]: true })),
      onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
        setValues((current) => ({ ...current, [key]: event.target.value })),
    };
  };

  const errorFor = (key: FieldKey) => (touched[key] ? errors[key] : undefined);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    const firstInvalid = FIELD_ORDER.find((key) => errors[key]);
    if (firstInvalid) {
      setTouched({ name: true, email: true, projectType: true, budget: true, message: true });
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    setStatus("submitting");
    setServerError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        setValues(EMPTY_CONTACT);
        setTouched({});
        setStatus("success");
        return;
      }
      setServerError(response.status === 503 ? contactSection.errors.notConfigured : contactSection.errors.generic);
    } catch {
      setServerError(contactSection.errors.generic);
    }
    setStatus("error");
  };

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="flex min-h-[28rem] flex-col items-center justify-center rounded-2xl border border-lime/25 bg-lime/[0.05] p-8 text-center outline-none"
      >
        <span className="inline-flex size-16 items-center justify-center rounded-full bg-accent-gradient text-bg">
          <Icon name="check" size={32} strokeWidth={2.5} />
        </span>
        <h3 className="mt-6 text-2xl font-bold tracking-tight">{contactSection.success.title}</h3>
        <p className="mt-2 max-w-sm text-muted">{contactSection.success.body}</p>
        <Button variant="secondary" size="sm" className="mt-8" onClick={() => setStatus("idle")}>
          {contactSection.success.reset}
        </Button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Project enquiry">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="contact-name" label="Name" error={errorFor("name")}>
          <input
            {...controlProps("name")}
            type="text"
            autoComplete="name"
            maxLength={CONTACT_LIMITS.nameMax}
            placeholder="Your name"
            className={controlClass}
          />
        </Field>
        <Field id="contact-email" label="Email" error={errorFor("email")}>
          <input
            {...controlProps("email")}
            type="email"
            autoComplete="email"
            inputMode="email"
            maxLength={CONTACT_LIMITS.emailMax}
            placeholder="you@company.com"
            className={controlClass}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="contact-projectType" label="Project type" error={errorFor("projectType")}>
          <div className="relative">
            <select {...controlProps("projectType")} className={cn(controlClass, "appearance-none pr-11")}>
              <option value="" disabled>
                Select a type
              </option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <Icon name="chevronDown" size={18} className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-subtle" />
          </div>
        </Field>
        <Field id="contact-budget" label="Budget range" error={errorFor("budget")}>
          <div className="relative">
            <select {...controlProps("budget")} className={cn(controlClass, "appearance-none pr-11")}>
              <option value="" disabled>
                Select a range
              </option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
            <Icon name="chevronDown" size={18} className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-subtle" />
          </div>
        </Field>
      </div>

      <Field id="contact-message" label="Tell us about your project" error={errorFor("message")}>
        <textarea
          {...controlProps("message")}
          rows={5}
          maxLength={CONTACT_LIMITS.messageMax}
          placeholder="What are you building, who is it for, and when do you need it?"
          className={cn(controlClass, "resize-y")}
        />
        <p className="mt-1.5 text-right font-mono text-xs text-subtle" aria-hidden="true">
          {values.message.length}/{CONTACT_LIMITS.messageMax}
        </p>
      </Field>

      {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this field empty
          <input
            type="text"
            name="trap"
            tabIndex={-1}
            autoComplete="off"
            value={values.trap}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setValues((current) => ({ ...current, trap: event.target.value }))
            }
          />
        </label>
      </div>

      {status === "error" ? (
        <p role="alert" className="flex items-start gap-2.5 rounded-xl border border-danger/30 bg-danger/10 px-4 py-3 text-sm text-danger">
          <Icon name="alert" size={18} className="mt-0.5 shrink-0" />
          {serverError}
        </p>
      ) : null}

      <p role="status" className="sr-only">
        {submitting ? "Sending your message" : ""}
      </p>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
          {submitting ? (
            <>
              <Icon name="loader" size={20} className="animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send message
              <Icon name="send" size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </>
          )}
        </Button>
        <p className="text-xs leading-relaxed text-subtle">
          {contactSection.privacyNote}{" "}
          <Link href="/privacy" className="text-muted underline underline-offset-2 hover:text-fg">
            {contactSection.privacyLinkLabel}
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
