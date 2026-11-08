import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GlowCard } from "@/components/ui/GlowCard";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { automationFlow, automationSection, automationServices, automationUseCases } from "@/content/site";

export function Automation() {
  return (
    <Section
      id={automationSection.id}
      containerClassName="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16"
    >
      <div aria-hidden="true" className="orb orb-lime -bottom-40 -left-40 size-[480px] [--orb-strength:8%]" />
      <div aria-hidden="true" className="orb orb-cyan top-10 -right-40 size-[520px] [--orb-strength:10%]" />

      <div className="relative">
        <SectionHeading
          id={automationSection.id}
          eyebrow={automationSection.eyebrow}
          title={automationSection.title}
          intro={automationSection.intro}
        />

        <ul className="mt-10 space-y-4">
          {automationServices.map((item, index) => (
            <Reveal as="li" key={item.title} delay={index * 0.08}>
              <GlowCard tilt={false} className="flex gap-4 p-5 sm:gap-5 sm:p-6">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-lime/20 bg-lime/10 text-lime">
                  <Icon name={item.icon} size={22} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-1 text-base leading-relaxed text-muted">{item.description}</p>
                  <ul className="mt-4 space-y-2">
                    {item.includes.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-fg/90">
                        <Icon name="check" size={16} strokeWidth={2.5} className="mt-0.5 shrink-0 text-cyan" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-10">
          <h3 className="font-mono text-xs tracking-[0.18em] text-subtle uppercase">{automationSection.useCasesTitle}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {automationUseCases.map((useCase) => (
              <li key={useCase}>
                <Badge className="px-3 py-1.5 text-xs">{useCase}</Badge>
              </li>
            ))}
          </ul>
          <Button href={automationSection.cta.href} className="mt-8" arrow>
            {automationSection.cta.label}
          </Button>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="relative lg:sticky lg:top-28">
        <GlowCard tilt={false} className="p-5 sm:p-7">
          <div className="flex items-center justify-between gap-3">
            <h3 className="flex items-center gap-2.5 font-mono text-sm text-fg">
              <span aria-hidden="true" className="size-2 rounded-full bg-lime animate-pulse-dot" />
              {automationSection.flowTitle}
            </h3>
            <Badge tone="warn">Example</Badge>
          </div>

          <ol className="relative mt-7">
            <span aria-hidden="true" className="flow-line absolute top-5 bottom-5 left-5 w-px" />
            {automationFlow.map((step) => (
              <li key={step.title} className="relative pb-6 pl-16 last:pb-0">
                <span className="absolute top-0 left-0 inline-flex size-10 items-center justify-center rounded-full border border-line-strong bg-bg text-lime">
                  <Icon name={step.icon} size={18} />
                </span>
                <p className="font-mono text-xs tracking-[0.16em] text-cyan uppercase">{step.kind}</p>
                <p className="mt-0.5 font-semibold text-fg">{step.title}</p>
                <p className="mt-0.5 text-sm text-muted">{step.detail}</p>
              </li>
            ))}
          </ol>

          <p className="mt-6 border-t border-line pt-4 font-mono text-xs text-subtle">{automationSection.flowNote}</p>
        </GlowCard>
      </Reveal>
    </Section>
  );
}
