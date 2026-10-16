import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

/** Page section. Its heading must carry id={`${id}-title`} (see SectionHeading). */
export function Section({ id, children, className, containerClassName }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("relative scroll-mt-20 overflow-x-clip py-20 sm:py-28", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
