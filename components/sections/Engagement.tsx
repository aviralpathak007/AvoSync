import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { GlowCard } from "@/components/ui/GlowCard";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { engagementCta, engagementNote, engagementOptions, engagementSection } from "@/content/site";
import { cn } from "@/lib/utils";

export function Engagement() {
  return (
    <Section id={engagementSection.id}>
      <div aria-hidden="true" className="orb top-1/3 -left-40 size-[480px] orb-lime [--orb-strength:9%]" />
      <SectionHeading
        id={engagementSection.id}
        eyebrow={engagementSection.eyebrow}
        title={engagementSection.title}
        intro={engagementSection.intro}
        align="center"
      />

      <ul className="relative mt-14 grid gap-5 lg:grid-cols-3 lg:items-stretch">
        {engagementOptions.map((option, index) => (
          <Reveal
            as="li"
            key={option.title}
            delay={index * 0.1}
            // The ring lives on the wrapper because GlowCard already uses ::after for its spotlight.
            className={cn("h-full", option.highlighted && "gradient-ring rounded-card lg:-my-3")}
          >
            <GlowCard
              tilt={false}
              className={cn("flex h-full flex-col p-7 sm:p-8", option.highlighted && "bg-white/[0.04] lg:py-11")}
            >
              <span className="inline-flex size-12 items-center justify-center rounded-xl border border-lime/20 bg-lime/10 text-lime">
                <Icon name={option.icon} size={24} />
              </span>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">{option.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{option.description}</p>
              <ul className="mt-6 flex-1 space-y-3 border-t border-line pt-6">
                {option.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-fg/90">
                    <Icon name="check" size={16} strokeWidth={2.5} className="mt-0.5 shrink-0 text-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                href={engagementCta.href}
                variant={option.highlighted ? "primary" : "secondary"}
                className="mt-8 w-full"
                arrow
              >
                {engagementCta.label}
                <span className="sr-only"> about {option.title}</span>
              </Button>
            </GlowCard>
          </Reveal>
        ))}
      </ul>

      <p className="mt-8 text-center font-mono text-xs text-subtle">{engagementNote}</p>
    </Section>
  );
}
