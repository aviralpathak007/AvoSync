import { Contact } from "@/components/sections/Contact";
import { Engagement } from "@/components/sections/Engagement";
import { Expertise } from "@/components/sections/Expertise";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Work } from "@/components/sections/Work";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Expertise />
      <Work />
      <Process />
      <Engagement />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}
