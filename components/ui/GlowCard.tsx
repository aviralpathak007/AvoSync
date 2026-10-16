"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  /** Subtle 3D tilt toward the cursor (mouse only). */
  tilt?: boolean;
}

const MAX_TILT_DEG = 5;

/**
 * Glass card whose border and surface glow follow the cursor.
 * Pointer position is written straight to CSS variables, so hovering never re-renders React.
 */
export function GlowCard({ children, className, tilt = true }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || event.pointerType !== "mouse") return;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    if (tilt) {
      el.style.setProperty("--rx", `${(0.5 - y / rect.height) * MAX_TILT_DEG * 2}deg`);
      el.style.setProperty("--ry", `${(x / rect.width - 0.5) * MAX_TILT_DEG * 2}deg`);
      el.style.setProperty("--ty", "-4px");
    }
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.removeProperty("--rx");
    el.style.removeProperty("--ry");
    el.style.removeProperty("--ty");
  };

  return (
    <div ref={ref} onPointerMove={handleMove} onPointerLeave={handleLeave} className={cn("glow-card glass", className)}>
      {children}
    </div>
  );
}
