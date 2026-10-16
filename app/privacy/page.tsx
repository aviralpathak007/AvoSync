import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { privacyPage, site } from "@/content/site";

export const metadata: Metadata = {
  title: privacyPage.title,
  description: `How ${site.name} handles information collected through this website.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <Container className="max-w-3xl py-20 sm:py-28">
      <Link href="/" className="inline-flex items-center gap-1.5 font-mono text-sm text-muted transition-colors hover:text-fg">
        <Icon name="arrowRight" size={14} className="rotate-180" />
        Back home
      </Link>
      <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">{privacyPage.title}</h1>
      <p className="mt-5 text-lg leading-relaxed text-muted">{privacyPage.intro}</p>

      <div className="mt-12 space-y-10">
        {privacyPage.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-semibold tracking-tight">{section.heading}</h2>
            <p className="mt-3 leading-relaxed text-muted">{section.body}</p>
          </section>
        ))}
      </div>

      <p className="mt-12 border-t border-line pt-6 text-sm text-subtle">
        Questions? Email{" "}
        <a href={`mailto:${site.email}`} className="text-fg underline underline-offset-2 hover:text-lime">
          {site.email}
        </a>
        .
      </p>
    </Container>
  );
}
