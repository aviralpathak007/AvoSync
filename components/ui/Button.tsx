import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Renders a link when set, otherwise a <button>. */
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  /** Show a trailing arrow that nudges on hover. */
  arrow?: boolean;
}

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition duration-300 ease-out-expo select-none disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-gradient text-bg ring-1 ring-white/20 ring-inset shadow-[0_10px_32px_-10px] shadow-lime/60 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-8px] hover:shadow-cyan/60 hover:ring-white/30",
  secondary: "glass text-fg hover:border-line-strong hover:bg-white/[0.08] hover:-translate-y-0.5",
  ghost: "text-muted hover:text-fg",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-sm sm:text-base",
  lg: "h-14 px-8 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  type = "button",
  disabled,
  onClick,
  arrow,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {children}
      {arrow ? (
        <Icon name="arrowRight" size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
      ) : null}
    </>
  );

  if (href !== undefined) {
    return href.startsWith("/") ? (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    ) : (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {content}
    </button>
  );
}
