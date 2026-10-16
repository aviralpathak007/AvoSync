import { Reveal } from "@/components/motion/Reveal";
import { GlowCard } from "@/components/ui/GlowCard";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services, servicesSection } from "@/content/site";

export function Services() {
  return (
    <Section id={servicesSection.id}>
      <div aria-hidden="true" className="orb -top-10 -right-40 size-[480px] orb-cyan [--orb-strength:10%]" />
      <SectionHeading
        id={servicesSection.id}
        eyebrow={servicesSection.eyebrow}
        title={servicesSection.title}
        intro={servicesSection.intro}
      />

      <ul className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal as="li" key={service.title} delay={(index % 3) * 0.08} className="h-full">
            <GlowCard className="flex h-full flex-col p-6 sm:p-7">
              <div className="flex items-start justify-between">
                <span className="inline-flex size-12 items-center justify-center rounded-xl border border-lime/20 bg-lime/10 text-lime">
                  <Icon name={service.icon} size={24} />
                </span>
                <span aria-hidden="true" className="font-mono text-xs text-subtle">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{service.description}</p>
              <ul className="mt-6 space-y-2.5 border-t border-line pt-5">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-fg/90">
                    <Icon name="check" size={16} strokeWidth={2.5} className="mt-0.5 shrink-0 text-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlowCard>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
