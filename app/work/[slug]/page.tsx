import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { ProjectArt } from "@/components/ui/ProjectArt";
import { caseStudyPage, projects } from "@/content/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    // Placeholder projects shouldn't be indexed; remove this line once the case study is real.
    robots: { index: false },
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <article className="py-16 sm:py-24">
      <Container className="max-w-4xl">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 font-mono text-sm text-muted transition-colors hover:text-fg"
        >
          <Icon name="arrowRight" size={14} className="rotate-180" />
          {caseStudyPage.backLabel}
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <Badge tone="accent">{project.category}</Badge>
          <Badge tone="warn">Placeholder</Badge>
        </div>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-6xl">{project.title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{project.summary}</p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.tech.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>

        <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-surface-2">
          {project.image ? (
            <Image src={project.image.src} alt={project.image.alt} fill priority sizes="(min-width: 896px) 896px, 100vw" className="object-cover" />
          ) : (
            <ProjectArt kind={project.art} />
          )}
        </div>

        <p className="mt-6 rounded-xl border border-amber-300/25 bg-amber-300/10 px-4 py-3 text-sm text-amber-100">
          {caseStudyPage.placeholderNotice}
        </p>

        <div className="mt-14 space-y-10">
          {caseStudyPage.sections.map((section) => (
            <section key={section.key}>
              <h2 className="text-2xl font-semibold tracking-tight">{section.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{project.caseStudy[section.key]}</p>
            </section>
          ))}
        </div>

        <div className="gradient-ring relative mt-16 rounded-2xl bg-surface/70 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{caseStudyPage.ctaTitle}</h2>
          <Button href="/#contact" size="lg" className="mt-6" arrow>
            {caseStudyPage.ctaLabel}
          </Button>
        </div>
      </Container>
    </article>
  );
}
