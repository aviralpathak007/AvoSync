import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  label: string;
  reverse?: boolean;
  className?: string;
}

function Pill({ children }: { children: string }) {
  return (
    <span className="glass mr-3 inline-flex items-center gap-2.5 rounded-xl px-4 py-2.5 font-mono text-sm whitespace-nowrap text-fg/90">
      <span aria-hidden="true" className="size-1.5 rounded-full bg-accent-gradient" />
      {children}
    </span>
  );
}

/**
 * Pure-CSS infinite scroller. The list is rendered twice (second copy hidden from
 * assistive tech) and slid by exactly half its width. Reduced-motion users get a static wrap.
 */
export function Marquee({ items, label, reverse, className }: MarqueeProps) {
  return (
    <div className={cn("marquee-mask overflow-hidden", className)}>
      <ul
        aria-label={label}
        className={cn(
          "flex w-max hover:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-3",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
      >
        {items.map((item) => (
          <li key={item}>
            <Pill>{item}</Pill>
          </li>
        ))}
        {items.map((item) => (
          <li key={`${item}-copy`} aria-hidden="true" className="motion-reduce:hidden">
            <Pill>{item}</Pill>
          </li>
        ))}
      </ul>
    </div>
  );
}
