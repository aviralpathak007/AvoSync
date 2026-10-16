import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
}

/** AvoSync mark: a rounded tile holding an "A" chevron with the avocado-pit dot. */
function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={cn("size-8", className)}>
      <defs>
        <linearGradient id="avosync-mark" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a3e635" />
          <stop offset="0.5" stopColor="#34d399" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#avosync-mark)" />
      <path d="M9 24.5 16 8l7 16.5" stroke="#07080c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="20.2" r="2.4" fill="#07080c" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="text-lg font-bold tracking-tight text-fg">
        Avo<span className="text-gradient">Sync</span>
      </span>
    </span>
  );
}
