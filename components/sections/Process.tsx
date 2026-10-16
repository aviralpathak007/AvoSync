import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSection } from "@/content/site";

export function Process() {
  return (
    <Section id={processSection.id} containerClassName="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <SectionHeading
          id={processSection.id}
          eyebrow={processSection.eyebrow}
          title={processSection.title}
          intro={processSection.intro}
        />
      </div>
      <ProcessTimeline />
    </Section>
  );
}
