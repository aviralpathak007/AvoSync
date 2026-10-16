import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { footer, navLinks, site, socials } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-surface/60">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-lime/40 to-transparent" />
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label={`${site.name} home`} className="inline-block rounded-lg">
              <Logo />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{footer.blurb}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-fg transition-colors hover:text-lime"
            >
              <Icon name="mail" size={16} className="text-lime" />
              {site.email}
            </a>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-mono text-xs tracking-[0.18em] text-subtle uppercase">{footer.navTitle}</h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted transition-colors hover:text-fg">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-xs tracking-[0.18em] text-subtle uppercase">{footer.connectTitle}</h2>
            <ul className="mt-4 space-y-2.5">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
                  >
                    {social.label}
                    <Icon name="arrowUpRight" size={14} />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.{" "}
            <Link href="/privacy" className="underline underline-offset-2 hover:text-fg">
              Privacy
            </Link>
          </p>
          <p className="font-mono">{footer.signoff}</p>
        </div>
      </Container>
    </footer>
  );
}
