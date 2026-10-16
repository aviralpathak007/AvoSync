import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ id, eyebrow, title, intro, align = "left", className }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={cn("max-w-2xl", centered && "mx-auto text-center", className)}>
      <p className="font-mono text-xs font-medium tracking-[0.18em] text-lime uppercase">
        <span aria-hidden="true" className="text-subtle">{"// "}</span>
        {eyebrow}
      </p>
      <h2 id={`${id}-title`} className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {intro ? <p className="mt-4 text-base leading-relaxed text-pretty text-muted sm:text-lg">{intro}</p> : null}
    </Reveal>
  );
}
