import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { GlowCard } from "@/components/ui/GlowCard";
import { Icon } from "@/components/ui/Icon";
import { ProjectArt } from "@/components/ui/ProjectArt";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects, workSection } from "@/content/site";

export function Work() {
  return (
    <Section id={workSection.id}>
      <SectionHeading
        id={workSection.id}
        eyebrow={workSection.eyebrow}
        title={workSection.title}
        intro={workSection.intro}
      />

      <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal as="li" key={project.slug} delay={(index % 3) * 0.08} className="h-full">
            <GlowCard className="group flex h-full flex-col">
              <div className="relative aspect-[16/10] overflow-hidden rounded-t-[calc(var(--radius-card)-1px)] border-b border-line bg-surface-2">
                {project.image ? (
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="size-full transition-transform duration-700 group-hover:scale-105">
                    <ProjectArt kind={project.art} />
                  </div>
                )}
                <Badge tone="warn" className="absolute top-3 left-3 bg-bg/70 backdrop-blur">
                  Placeholder
                </Badge>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <Badge tone="accent" className="self-start">
                  {project.category}
                </Badge>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">{project.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{project.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                  {project.tech.map((tech) => (
                    <li key={tech}>
                      <Badge>{tech}</Badge>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/work/${project.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 self-start pt-1 text-sm font-semibold text-fg after:absolute after:inset-0 after:z-10 after:rounded-card hover:text-lime"
                >
                  View case study
                  <span className="sr-only"> for {project.title}</span>
                  <Icon name="arrowUpRight" size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </GlowCard>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
