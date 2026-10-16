"use client";

import { m, useInView, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/Badge";
import { processSteps, type ProcessStep } from "@/content/site";
import { cn, EASE_OUT_EXPO } from "@/lib/utils";

function Step({ step, index }: { step: ProcessStep; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  // Lights up once its top edge passes ~60% of the viewport, in sync with the progress line.
  const reached = useInView(ref, { once: true, margin: "0px 0px -40% 0px" });

  return (
    <li ref={ref} className="relative pb-12 pl-16 last:pb-0 sm:pl-20">
      <span
        aria-hidden="true"
        className={cn(
          "absolute top-0 left-0 inline-flex size-10 items-center justify-center rounded-full border bg-bg font-mono text-sm font-semibold transition-all duration-500 sm:size-12",
          reached
            ? "border-lime text-lime shadow-[0_0_28px_-4px] shadow-lime/70"
            : "border-line-strong text-subtle",
        )}
      >
        {index + 1}
      </span>
      <m.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
        className="glass rounded-2xl p-5 sm:p-6"
      >
        <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${step.title} deliverables`}>
          {step.deliverables.map((item) => (
            <li key={item}>
              <Badge>{item}</Badge>
            </li>
          ))}
        </ul>
      </m.div>
    </li>
  );
}

/** Vertical timeline with a gradient line that fills as the reader scrolls. */
export function ProcessTimeline() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 60%", "end 60%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  return (
    <ol ref={ref} className="relative">
      <span aria-hidden="true" className="absolute top-5 bottom-5 left-5 w-px bg-line-strong sm:left-6" />
      <m.span
        aria-hidden="true"
        style={{ scaleY: fill }}
        className="absolute top-5 bottom-5 left-5 w-px origin-top bg-linear-to-b from-lime via-mint to-cyan shadow-[0_0_12px] shadow-lime/80 sm:left-6"
      />
      {processSteps.map((step, index) => (
        <Step key={step.title} step={step} index={index} />
      ))}
    </ol>
  );
}
