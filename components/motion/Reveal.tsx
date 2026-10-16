"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_OUT_EXPO } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Seconds to wait before animating, handy for staggering siblings. */
  delay?: number;
  y?: number;
  as?: "div" | "li" | "article";
}

/** Fades and lifts its children into view the first time they scroll on screen. */
export function Reveal({ children, className, delay = 0, y = 24, as = "div" }: RevealProps) {
  const Tag = m[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.7, delay, ease: EASE_OUT_EXPO }}
    >
      {children}
    </Tag>
  );
}
