import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { GlowCard } from "@/components/ui/GlowCard";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials, testimonialsSection } from "@/content/site";

export function Testimonials() {
  return (
    <Section id={testimonialsSection.id}>
      <SectionHeading
        id={testimonialsSection.id}
        eyebrow={testimonialsSection.eyebrow}
        title={testimonialsSection.title}
        intro={testimonialsSection.intro}
      />

      {/* Swipeable snap carousel on phones, a clean grid from tablet up. */}
      <ul
        aria-label="Client testimonials"
        tabIndex={0}
        className="mt-14 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((item, index) => (
          <Reveal as="li" key={`${item.name}-${index}`} delay={index * 0.1} className="w-[85%] shrink-0 snap-center md:w-auto">
            <GlowCard tilt={false} className="h-full p-6 sm:p-7">
              <figure className="flex h-full flex-col">
              <Icon name="quote" size={28} className="text-lime/70" />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-fg/90">{item.quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span
                  aria-hidden="true"
                  className="inline-flex size-10 items-center justify-center rounded-full bg-white/[0.07] font-mono text-sm text-muted"
                >
                  ?
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold">{item.name}</span>
                  <span className="block truncate text-xs text-subtle">{item.role}</span>
                </span>
                {item.placeholder ? <Badge tone="warn">Placeholder</Badge> : null}
              </figcaption>
              </figure>
            </GlowCard>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
