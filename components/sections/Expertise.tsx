import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { GlowCard } from "@/components/ui/GlowCard";
import { Icon } from "@/components/ui/Icon";
import { Marquee } from "@/components/ui/Marquee";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { expertiseSection, techGroups, techMarquee, whyUs } from "@/content/site";

export function Expertise() {
  return (
    <Section id={expertiseSection.id}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-1/3 h-px bg-linear-to-r from-transparent via-line-strong to-transparent" />
      <SectionHeading
        id={expertiseSection.id}
        eyebrow={expertiseSection.eyebrow}
        title={expertiseSection.title}
        intro={expertiseSection.intro}
      />

      <Reveal className="mt-12">
        <Marquee items={techMarquee} label="Technologies we work with" />
      </Reveal>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {techGroups.map((group, index) => (
          <Reveal as="li" key={group.group} delay={(index % 3) * 0.06}>
            <GlowCard tilt={false} className="h-full p-5">
              <h3 className="flex items-center gap-2.5 text-sm font-semibold">
                <Icon name={group.icon} size={18} className="text-cyan" />
                {group.group}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Badge>{item}</Badge>
                  </li>
                ))}
              </ul>
            </GlowCard>
          </Reveal>
        ))}
      </ul>

      <ul className="mt-16 grid gap-10 border-t border-line pt-14 md:grid-cols-3 md:gap-8">
        {whyUs.map((point, index) => (
          <Reveal as="li" key={point.title} delay={index * 0.1}>
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent-gradient text-bg">
              <Icon name={point.icon} size={22} />
            </span>
            <h3 className="mt-5 text-lg font-semibold tracking-tight">{point.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{point.description}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
