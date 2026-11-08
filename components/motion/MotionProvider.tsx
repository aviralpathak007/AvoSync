"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import { useEffect, type ReactNode } from "react";

type FailsafeWindow = Window & { __revealFailsafe?: ReturnType<typeof setTimeout> };

/**
 * Loads only the animation features we use (a fraction of the full bundle) and
 * honours the visitor's reduced-motion setting everywhere.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  // The app started, so the "show everything if JS never loads" failsafe is no longer needed.
  useEffect(() => {
    clearTimeout((window as FailsafeWindow).__revealFailsafe);
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
