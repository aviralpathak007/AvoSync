import type { CSSProperties } from "react";
import { Terminal } from "@/components/sections/Terminal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { hero, primaryCta, terminal } from "@/content/site";

/** Staggers the CSS entrance animation (see .hero-in in globals.css). */
function step(index: number): CSSProperties {
  return { "--i": index } as CSSProperties;
}

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pt-14 pb-16 sm:pt-20 lg:pt-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0" />
        <div className="orb animate-float -top-32 -left-24 size-[560px] orb-lime [--orb-strength:20%]" />
        <div className="orb animate-float-slow top-10 -right-32 size-[620px] orb-cyan [--orb-strength:18%]" />
        <div className="orb animate-float -bottom-48 left-1/3 size-[520px] orb-indigo [--orb-strength:14%]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-bg to-transparent" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-10 xl:gap-16">
          <div>
            <p
              style={step(0)}
              className="hero-in glass inline-flex items-center gap-2.5 rounded-full py-1.5 pr-4 pl-3 font-mono text-xs text-muted"
            >
              <span className="size-2 rounded-full bg-lime animate-pulse-dot" aria-hidden="true" />
              {hero.badge}
            </p>

            <h1
              id="hero-title"
              className="hero-slide mt-6 text-[2.6rem] leading-[1.03] font-bold tracking-tight text-balance sm:text-6xl lg:text-[4.25rem] xl:text-[4.5rem]"
            >
              {hero.headlineStart} <span className="text-gradient-animated">{hero.headlineAccent}</span>
            </h1>

            <p
              style={step(2)}
              className="hero-in mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted sm:text-xl"
            >
              {hero.subheadline}
            </p>

            <div style={step(3)} className="hero-in mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={primaryCta.href} size="lg" arrow>
                {primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="secondary" size="lg">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          <div style={step(4)} className="hero-in relative mx-auto w-full max-w-xl lg:max-w-none">
            <Terminal />
            <div
              aria-hidden="true"
              className="glass animate-float absolute -top-5 -right-3 hidden items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[11px] text-lime sm:inline-flex lg:-right-6"
            >
              <span className="size-1.5 rounded-full bg-lime" />
              {terminal.chips[0]}
            </div>
            <div
              aria-hidden="true"
              className="glass animate-float-slow absolute -bottom-5 -left-3 hidden items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[11px] text-cyan sm:inline-flex lg:-left-6"
            >
              <span className="size-1.5 rounded-full bg-cyan" />
              {terminal.chips[1]}
            </div>
          </div>
        </div>

        <ul
          style={step(6)}
          className="hero-in mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:mt-20 md:grid-cols-4"
        >
          {hero.trust.map((item) => (
            <li key={item.label} className="flex items-start gap-3 bg-bg/80 p-4 backdrop-blur sm:p-5">
              <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-lime">
                <Icon name={item.icon} size={18} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-fg">{item.label}</span>
                <span className="mt-0.5 block text-xs text-subtle sm:text-[13px]">{item.detail}</span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
