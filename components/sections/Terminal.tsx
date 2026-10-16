"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Icon } from "@/components/ui/Icon";
import { terminal } from "@/content/site";
import { cn } from "@/lib/utils";

const START_DELAY_MS = 600;
const TYPE_MS = 48;
const PAUSE_AFTER_TYPING_MS = 400;
const STEP_MS = 560;

const COMMAND_LENGTH = terminal.command.length;
/** Steps plus the final "deployed" line. */
const TOTAL_STAGES = terminal.steps.length + 1;

const subscribeNever = () => () => {};

const ariaLabel = `Terminal demo. Running "${terminal.command}": ${terminal.steps.join(", ")}. ${terminal.success}`;

/** Fake `npx create-avosync-app` session that types itself out, then "deploys". */
export function Terminal() {
  // Server HTML and the first client render must match, so the reduced-motion
  // preference only takes effect once hydration has finished.
  const hydrated = useSyncExternalStore(subscribeNever, () => true, () => false);
  const prefersReduced = useReducedMotion();
  const reduced = hydrated && Boolean(prefersReduced);
  const [typedChars, setTypedChars] = useState(0);
  const [stage, setStage] = useState(0);
  const [run, setRun] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const timers: number[] = [];
    let at = START_DELAY_MS;

    for (let i = 1; i <= COMMAND_LENGTH; i += 1) {
      at += TYPE_MS;
      timers.push(window.setTimeout(() => setTypedChars(i), at));
    }
    at += PAUSE_AFTER_TYPING_MS;
    for (let s = 1; s <= TOTAL_STAGES; s += 1) {
      at += STEP_MS;
      timers.push(window.setTimeout(() => setStage(s), at));
    }

    return () => timers.forEach((id) => window.clearTimeout(id));
  }, [reduced, run]);

  const replay = () => {
    setTypedChars(0);
    setStage(0);
    setRun((value) => value + 1);
  };

  const shownChars = reduced ? COMMAND_LENGTH : typedChars;
  const shownStage = reduced ? TOTAL_STAGES : stage;
  const typing = shownChars < COMMAND_LENGTH;

  return (
    <div className="gradient-ring relative rounded-2xl bg-surface/90 shadow-[0_30px_80px_-30px] shadow-cyan/35 backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="size-3 rounded-full bg-red-400/80" />
          <span className="size-3 rounded-full bg-amber-300/80" />
          <span className="size-3 rounded-full bg-green-400/80" />
        </div>
        <span className="truncate px-3 font-mono text-[11px] text-subtle">{terminal.title}</span>
        <button
          type="button"
          onClick={replay}
          aria-label={terminal.replayLabel}
          className="inline-flex size-7 items-center justify-center rounded-md font-mono text-sm text-subtle transition-colors hover:bg-white/[0.06] hover:text-fg"
        >
          <span aria-hidden="true">↻</span>
        </button>
      </div>

      <div role="img" aria-label={ariaLabel} className="px-4 py-5 font-mono text-[12.5px] leading-7 sm:px-5 sm:text-sm">
        <p className="break-all text-fg">
          <span className="mr-2 text-lime select-none">$</span>
          {terminal.command.slice(0, shownChars)}
          <span
            className={cn(
              "ml-0.5 inline-block h-[1.1em] w-[0.55em] translate-y-[0.18em] bg-lime/90 motion-safe:animate-blink",
              !typing && shownStage > 0 && "invisible",
            )}
          />
        </p>

        <ul className="mt-2 space-y-0.5">
          {terminal.steps.map((step, index) => (
            <li
              key={step}
              className={cn(
                "flex items-center gap-2.5 text-muted transition-all duration-500",
                shownStage > index ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0",
              )}
            >
              <Icon name="check" size={14} strokeWidth={2.5} className="shrink-0 text-lime" />
              <span>{step}</span>
            </li>
          ))}
        </ul>

        <div
          className={cn(
            "mt-4 rounded-xl border border-lime/25 bg-lime/[0.06] px-3.5 py-3 transition-all duration-700",
            shownStage >= TOTAL_STAGES ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
          )}
        >
          <p className="flex items-center gap-2 font-semibold text-lime">
            <span aria-hidden="true">▲</span>
            {terminal.success}
          </p>
          <p className="mt-0.5 break-all text-cyan">{terminal.url}</p>
        </div>
      </div>
    </div>
  );
}
