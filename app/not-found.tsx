import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-24">
      <div aria-hidden="true" className="bg-grid absolute inset-0" />
      <div aria-hidden="true" className="orb animate-float -top-24 left-1/4 size-[480px] orb-lime [--orb-strength:16%]" />
      <Container className="relative text-center">
        <p className="font-mono text-sm text-lime">error 404</p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-7xl">
          Nothing <span className="text-gradient-animated">deployed</span> here.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-muted">That page doesn&apos;t exist, or it moved. Let&apos;s get you back on track.</p>
        <Button href="/" size="lg" className="mt-9" arrow>
          Back to home
        </Button>
      </Container>
    </section>
  );
}
