# AvoSync

Marketing site for AvoSync, a freelance studio building custom websites and apps.
Dark, techy, fast. Built with **Next.js (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide**.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script              | What it does                                              |
| ------------------- | --------------------------------------------------------- |
| `npm run dev`       | Dev server with hot reload                                |
| `npm run build`     | Production build (also type-checks)                       |
| `npm run start`     | Serve the production build                                |
| `npm run lint`      | ESLint (Next.js core-web-vitals + TypeScript rules)       |
| `npm run typecheck` | Generates Next route types, then runs `tsc --noEmit`      |

Requires Node 20.9+ (developed on Node 24).

## Project structure

```
app/
  layout.tsx            Fonts, metadata, Organization JSON-LD, navbar/footer shell
  page.tsx              The one-page site: composes every section in order
  globals.css           Design tokens (@theme), utilities, glow/glass/grid styles
  api/contact/route.ts  Contact form endpoint (validation + delivery hook)
  work/[slug]/          Case-study template (placeholder content)
  privacy/              Privacy policy page (draft)
  opengraph-image.tsx   Generated social card (also twitter-image.tsx)
  icon.svg, apple-icon  Favicons
  sitemap.ts, robots.ts SEO
components/
  sections/             Navbar, Hero, Terminal, Services, Expertise, Work, Process,
                        Engagement, Testimonials, Faq, Contact, Footer
  ui/                   Button, GlowCard, Badge, Marquee, Logo, Section, Icon, ...
  motion/               MotionProvider (lazy features + reduced motion), Reveal
content/site.ts         ALL copy and data (see below)
lib/                    Shared validation, delivery hook, site URL, utils, OG renderer
```

## Editing content

**Everything lives in [`content/site.ts`](content/site.ts)**: hero copy, services, tech stack,
projects, process steps, engagement options, testimonials, FAQ, form options, footer, socials,
even the text on the social-share image. Edit the file, save, and the site updates. Anything
marked `PLACEHOLDER` or `DRAFT` there is stand-in content to replace.

- **Add a project**: add an entry to `projects`. Give it a real `image: { src, alt }` (drop the file
  in `public/work/`) to replace the generated artwork, and fill in `caseStudy`.
  Then remove `robots: { index: false }` in `app/work/[slug]/page.tsx` and add the URL to `app/sitemap.ts`.
- **Services** also feed the contact form's "Project type" dropdown automatically.
- **Icons** are referenced by name; the available set is the map in `components/ui/Icon.tsx`.

## Design tokens

All colours, fonts, radii and animations are tokens in the `@theme` block of
[`app/globals.css`](app/globals.css) (`--color-bg`, `--color-lime`, `--color-cyan`, ...).
The signature gradient is lime → mint → cyan (`--gradient-accent`). Change the palette there
and the whole site follows. The standalone SVG/OG artwork (`app/icon.svg`, `lib/og.tsx`,
`components/ui/Logo.tsx`) can't read CSS variables, so update the hex values in those if you
change the accent colours.

## Contact form and environment variables

The form posts to `app/api/contact/route.ts`, which validates on the server (same rules as the
client, in `lib/contact.ts`), silently drops honeypot hits, and then calls
`deliverContactMessage()` in [`lib/contact-delivery.ts`](lib/contact-delivery.ts).

**Email sending is intentionally not wired up.** That file contains a clearly marked integration
point with ready-to-uncomment code for **Resend** and **Formspree**.

Until you enable one:

- in `npm run dev` the enquiry is logged to your terminal and the form shows success;
- in production the API returns `503` and the form tells visitors to email you directly,
  so a real lead is never silently lost.

To enable it:

1. Copy `.env.example` to `.env.local` and fill in the variables for your chosen provider.
2. Uncomment that provider's block in `lib/contact-delivery.ts`.
3. Add the same variables in Vercel (Project → Settings → Environment Variables).

| Variable                | Used for                                         |
| ----------------------- | ------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`  | Canonical URLs, sitemap, robots, social images   |
| `RESEND_API_KEY`        | Resend option                                    |
| `CONTACT_TO_EMAIL`      | Resend option: where enquiries are sent          |
| `CONTACT_FROM_EMAIL`    | Resend option: a verified sender                 |
| `FORMSPREE_ENDPOINT`    | Formspree option                                 |

> Add rate limiting (e.g. Vercel Firewall or Upstash) before heavy traffic. The honeypot and
> server validation stop casual spam but not determined abuse.

## Deploying to Vercel

1. Push the project to GitHub/GitLab/Bitbucket.
2. In Vercel choose **Add New → Project**, import the repo. The Next.js preset needs no changes.
3. Add the environment variables above, then deploy.
4. Attach your custom domain and set `NEXT_PUBLIC_SITE_URL` to it, then redeploy so canonical
   URLs, the sitemap and social images use the real domain.

## Accessibility and performance notes

- Semantic landmarks, one `h1`, ordered headings, skip link, visible focus rings.
- The FAQ is a real button/`aria-expanded` accordion; the terminal demo is exposed to assistive
  tech as a single described image instead of character-by-character noise.
- `prefers-reduced-motion` is honoured: ambient animation stops, the marquee becomes a static
  wrap, the terminal shows its final state, and Framer Motion drops transforms.
- Framer Motion loads only the `domAnimation` feature set via `LazyMotion`. The hero entrance is
  pure CSS so the headline paints immediately. No WebGL or heavy libraries.
- Last local Lighthouse run (production build): **mobile 94-95 / 100 / 100 / 100**, desktop
  100 / 100 / 100 / 100 (Performance / Accessibility / Best Practices / SEO). Re-run on your
  deployed URL; scores vary with hosting and content.
