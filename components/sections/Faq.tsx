import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqSection, faqs } from "@/content/site";

export function Faq() {
  return (
    <Section id={faqSection.id} containerClassName="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />
      <div className="lg:sticky lg:top-28 lg:self-start">
        <SectionHeading id={faqSection.id} eyebrow={faqSection.eyebrow} title={faqSection.title} intro={faqSection.intro} />
      </div>
      <FaqAccordion />
    </Section>
  );
}
