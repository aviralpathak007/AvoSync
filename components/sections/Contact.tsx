import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { contactSection, site } from "@/content/site";

export function Contact() {
  return (
    <Section id={contactSection.id} className="pb-24 sm:pb-32">
      <Reveal>
        <div className="gradient-ring relative overflow-hidden rounded-[2rem] bg-surface/80 p-6 sm:p-10 lg:p-14">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="bg-dots absolute inset-0 opacity-50" />
            <div className="orb animate-float -top-40 -left-32 size-[460px] orb-lime [--orb-strength:20%]" />
            <div className="orb animate-float-slow -right-32 -bottom-40 size-[520px] orb-cyan [--orb-strength:18%]" />
          </div>

          <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="font-mono text-xs font-medium tracking-[0.18em] text-lime uppercase">
                <span aria-hidden="true" className="text-subtle">{"// "}</span>
                {contactSection.eyebrow}
              </p>
              <h2
                id={`${contactSection.id}-title`}
                className="mt-3 text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl"
              >
                {contactSection.title} <span className="text-gradient-animated">{contactSection.titleAccent}</span>
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">{contactSection.intro}</p>

              <a
                href={`mailto:${site.email}`}
                className="glass mt-8 inline-flex items-center gap-3 rounded-full py-2.5 pr-5 pl-3 font-mono text-sm text-fg transition-colors hover:border-line-strong hover:text-lime"
              >
                <span className="inline-flex size-8 items-center justify-center rounded-full bg-lime/10 text-lime">
                  <Icon name="mail" size={16} />
                </span>
                {site.email}
              </a>
              <p className="mt-3 font-mono text-xs text-subtle">{contactSection.responseNote}</p>

              <h3 className="mt-10 text-sm font-semibold">{contactSection.nextStepsTitle}</h3>
              <ol className="mt-4 space-y-3">
                {contactSection.nextSteps.map((item, index) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted">
                    <span
                      aria-hidden="true"
                      className="inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-line-strong font-mono text-[11px] text-lime"
                    >
                      {index + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border border-line bg-bg/60 p-5 backdrop-blur-xl sm:p-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
