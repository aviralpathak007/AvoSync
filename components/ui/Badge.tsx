import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  tone?: "neutral" | "accent" | "warn";
  className?: string;
}

const tones = {
  neutral: "border-line bg-white/[0.04] text-muted",
  accent: "border-lime/30 bg-lime/10 text-lime",
  warn: "border-amber-300/30 bg-amber-300/10 text-amber-200",
} as const;

/** Small mono tag for categories, tech chips and placeholder flags. */
export function Badge({ children, tone = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] leading-none font-medium tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
