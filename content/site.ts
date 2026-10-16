/**
 * ──────────────────────────────────────────────────────────────
 *  AvoSync — site content
 *  Every word, link and data point on the site lives in this file.
 *  Anything marked PLACEHOLDER is stand-in content for you to replace.
 * ──────────────────────────────────────────────────────────────
 */
import type { IconName } from "@/components/ui/Icon";

/* ── Types ──────────────────────────────────────────────────── */

interface NavLink {
  label: string;
  href: string;
}

interface SectionIntro {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
}

export interface Service {
  title: string;
  icon: IconName;
  description: string;
  includes: [string, string, string];
}

export type ProjectArtKind = "dashboard" | "storefront" | "mobile" | "website" | "landing" | "icons";

export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  tech: string[];
  art: ProjectArtKind;
  /** Replace with a real screenshot: { src: "/work/my-project.png", alt: "…" }. Falls back to generated art. */
  image?: { src: string; alt: string };
  /** Case-study copy shown on /work/[slug]. */
  caseStudy: { brief: string; approach: string; outcome: string };
}

export interface ProcessStep {
  title: string;
  description: string;
  deliverables: string[];
}

interface EngagementOption {
  title: string;
  icon: IconName;
  description: string;
  includes: string[];
  highlighted?: boolean;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  placeholder: boolean;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface SocialLink {
  label: string;
  href: string;
}

/* ── Brand ──────────────────────────────────────────────────── */

export const site = {
  name: "AvoSync",
  tagline: "Custom apps and websites that stand out",
  description:
    "AvoSync is a freelance design and engineering studio building custom websites and apps for people and businesses who want something made to their needs, not off-the-shelf templates.",
  /** PLACEHOLDER: replace with your real contact email. */
  email: "hello@avosync.example",
  legalName: "AvoSync",
} as const;

/** Text on the generated social-share image (app/opengraph-image.tsx). */
export const socialCard = {
  headline: "Custom apps & websites",
  headlineAccent: "that stand out.",
  footer: "Design + engineering, built to your needs.",
} as const;

/** PLACEHOLDER: point these at your real profiles. */
export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "X", href: "https://x.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Dribbble", href: "https://dribbble.com/" },
];

export const navLinks: NavLink[] = [
  { label: "Services", href: "/#services" },
  { label: "Stack", href: "/#stack" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Engagement", href: "/#engagement" },
  { label: "FAQ", href: "/#faq" },
];

export const primaryCta = { label: "Start a project", href: "/#contact" } as const;

/* ── Hero ───────────────────────────────────────────────────── */

export const hero = {
  badge: "Now booking new projects",
  headlineStart: "We build custom apps and websites that",
  headlineAccent: "stand out.",
  subheadline:
    "AvoSync is a design-and-engineering studio for people who want something built to their needs, not squeezed out of a template. Sharp design. Clean code. Shipped.",
  secondaryCta: { label: "View our work", href: "/#work" },
  trust: [
    { icon: "layers", label: "Custom-built", detail: "No templates, ever" },
    { icon: "zap", label: "Fast delivery", detail: "Small team, short loops" },
    { icon: "message", label: "Clear communication", detail: "Plain English updates" },
    { icon: "lock", label: "You own the code", detail: "Full handover" },
  ] satisfies Array<{ icon: IconName; label: string; detail: string }>,
} as const;

export const terminal = {
  title: "~/your-idea — avosync",
  command: "npx create-avosync-app my-idea",
  steps: [
    "Scoping the idea",
    "Designing the interface",
    "Building with Next.js + TypeScript",
    "Running lint, type and a11y checks",
  ],
  success: "Deployed. Your product is live.",
  url: "https://my-idea.com",
  replayLabel: "Replay terminal animation",
  chips: ["build passing", "types strict"],
} as const;

/* ── Services ───────────────────────────────────────────────── */

export const servicesSection: SectionIntro = {
  id: "services",
  eyebrow: "Services",
  title: "Web & App Design",
  intro:
    "Six things we do really well. Pick one, or combine a few. Every project is designed and built around your goals.",
};

export const services: Service[] = [
  {
    title: "Website Design",
    icon: "monitor",
    description: "Brand-true sites that load fast and earn trust.",
    includes: ["Custom layouts, zero templates", "Responsive from 360px up", "SEO and performance built in"],
  },
  {
    title: "App Design",
    icon: "smartphone",
    description: "Mobile and web apps people actually enjoy using.",
    includes: ["iOS, Android and web", "Interface and interaction design", "Build-ready handoff or full build"],
  },
  {
    title: "UX Design",
    icon: "pointer",
    description: "Flows that make sense on the very first tap.",
    includes: ["User flows and wireframes", "Clickable prototypes", "Usability review and fixes"],
  },
  {
    title: "Landing Page Design",
    icon: "rocket",
    description: "One page, one goal, zero fluff.",
    includes: ["Conversion-minded structure", "Sections ready for A/B tests", "Analytics wired in"],
  },
  {
    title: "Icon Design",
    icon: "shapes",
    description: "Custom icon sets that fit your product like a glove.",
    includes: ["Consistent grid and stroke", "Optimised SVG exports", "App icons and favicons"],
  },
  {
    title: "E-Commerce Website Design",
    icon: "cart",
    description: "Stores that make buying feel effortless.",
    includes: ["Shopify or WooCommerce", "Product pages that sell", "Checkout and payments setup"],
  },
];

/* ── Expertise / tech stack ─────────────────────────────────── */

export const expertiseSection: SectionIntro = {
  id: "stack",
  eyebrow: "Expertise",
  title: "Modern tools. Chosen on purpose.",
  intro:
    "We pick the stack that fits the job, not the one that's trending. Here's what we reach for most.",
};

export const techMarquee: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Framer Motion",
  "Figma",
  "React Native",
  "Flutter",
  "Shopify",
  "WooCommerce",
  "PostgreSQL",
  "Stripe",
  "Vercel",
];

export const techGroups: Array<{ group: string; icon: IconName; items: string[] }> = [
  { group: "Frontend", icon: "code", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { group: "Backend", icon: "cpu", items: ["Node.js", "PostgreSQL", "REST APIs", "Serverless"] },
  { group: "Mobile", icon: "smartphone", items: ["React Native", "Flutter", "Expo"] },
  { group: "Commerce", icon: "cart", items: ["Shopify", "WooCommerce", "Stripe"] },
  { group: "Design", icon: "palette", items: ["Figma", "Design systems", "Prototyping"] },
  { group: "Ship", icon: "rocket", items: ["Git", "Vercel", "CI checks"] },
];

export const whyUs: Array<{ icon: IconName; title: string; description: string }> = [
  {
    icon: "layers",
    title: "Custom-built",
    description: "Your product starts from a blank file, shaped around your users and your goals. Not a theme with the logo swapped.",
  },
  {
    icon: "gauge",
    title: "Performance-focused",
    description: "Fast pages are a feature. We budget for speed, accessibility and SEO from the first commit, not as a cleanup job.",
  },
  {
    icon: "blocks",
    title: "Design + engineering, one roof",
    description: "The person who designs it understands how it's built. No lost-in-translation handoffs, no 'that's not possible'.",
  },
];

/* ── Featured work (PLACEHOLDER DATA) ───────────────────────── */

export const workSection: SectionIntro = {
  id: "work",
  eyebrow: "Featured work",
  title: "Selected builds",
  intro:
    "A taste of the kind of work we make. The projects below are placeholders until our first case studies go live.",
};

const PLACEHOLDER_NOTE =
  "PLACEHOLDER: replace this with the real story: who it was for, what they needed, and what you made.";

/** PLACEHOLDER: these are sample projects, not real clients. Replace each entry with real work. */
export const projects: Project[] = [
  {
    slug: "sample-analytics-dashboard",
    title: "Sample: Analytics Dashboard",
    category: "Web App",
    summary: "A data-dense SaaS dashboard with live charts, filters and a calm, readable layout.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    art: "dashboard",
    caseStudy: { brief: PLACEHOLDER_NOTE, approach: PLACEHOLDER_NOTE, outcome: PLACEHOLDER_NOTE },
  },
  {
    slug: "sample-boutique-store",
    title: "Sample: Boutique Storefront",
    category: "E-Commerce",
    summary: "A fast, editorial-style online store with a frictionless checkout.",
    tech: ["Shopify", "Liquid", "Tailwind CSS"],
    art: "storefront",
    caseStudy: { brief: PLACEHOLDER_NOTE, approach: PLACEHOLDER_NOTE, outcome: PLACEHOLDER_NOTE },
  },
  {
    slug: "sample-fitness-app",
    title: "Sample: Fitness Companion",
    category: "Mobile App",
    summary: "A cross-platform habit and workout tracker with delightful micro-interactions.",
    tech: ["React Native", "TypeScript", "Expo"],
    art: "mobile",
    caseStudy: { brief: PLACEHOLDER_NOTE, approach: PLACEHOLDER_NOTE, outcome: PLACEHOLDER_NOTE },
  },
  {
    slug: "sample-studio-site",
    title: "Sample: Studio Portfolio",
    category: "Website",
    summary: "A bold, motion-led portfolio site that lets the work do the talking.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    art: "website",
    caseStudy: { brief: PLACEHOLDER_NOTE, approach: PLACEHOLDER_NOTE, outcome: PLACEHOLDER_NOTE },
  },
  {
    slug: "sample-launch-page",
    title: "Sample: Product Launch Page",
    category: "Landing Page",
    summary: "A single-purpose launch page tuned for sign-ups and shareability.",
    tech: ["Next.js", "TypeScript", "Vercel"],
    art: "landing",
    caseStudy: { brief: PLACEHOLDER_NOTE, approach: PLACEHOLDER_NOTE, outcome: PLACEHOLDER_NOTE },
  },
  {
    slug: "sample-icon-set",
    title: "Sample: Custom Icon Set",
    category: "Icon Design",
    summary: "A consistent icon family drawn on one grid and exported as clean SVG.",
    tech: ["Figma", "SVG", "Design tokens"],
    art: "icons",
    caseStudy: { brief: PLACEHOLDER_NOTE, approach: PLACEHOLDER_NOTE, outcome: PLACEHOLDER_NOTE },
  },
];

/* ── Process ────────────────────────────────────────────────── */

export const processSection: SectionIntro = {
  id: "process",
  eyebrow: "Process",
  title: "From idea to launch, in five clear steps",
  intro: "No black boxes. You always know what's happening, what's next, and what we need from you.",
};

export const processSteps: ProcessStep[] = [
  {
    title: "Discover",
    description: "We learn your goals, users and constraints, then agree on scope, timeline and what 'done' looks like.",
    deliverables: ["Kickoff call", "Scope and plan", "Success criteria"],
  },
  {
    title: "Design",
    description: "Wireframes become a polished, clickable design. You react early, while changes are cheap.",
    deliverables: ["Wireframes", "UI design", "Clickable prototype"],
  },
  {
    title: "Build",
    description: "Clean, typed, tested code in short cycles, with a live preview link you can open any time.",
    deliverables: ["Working previews", "Weekly updates", "Source in your repo"],
  },
  {
    title: "Test",
    description: "Real devices, real browsers, accessibility and performance checks. We fix it before you see it.",
    deliverables: ["Cross-device QA", "Accessibility pass", "Performance pass"],
  },
  {
    title: "Launch & Support",
    description: "We ship it, watch it go live, and stick around to squash bugs and help you grow.",
    deliverables: ["Deployment", "Handover docs", "Post-launch support"],
  },
];

/* ── Engagement options ─────────────────────────────────────── */

export const engagementSection: SectionIntro = {
  id: "engagement",
  eyebrow: "Working together",
  title: "Pick the shape that fits",
  intro: "Three ways to work with us. Tell us what you need and we'll put together a clear proposal.",
};

export const engagementCta = { label: "Let's talk", href: "/#contact" } as const;

export const engagementNote = "No hard prices. Every project is scoped and quoted to fit what you actually need.";

export const engagementOptions: EngagementOption[] = [
  {
    title: "Landing page",
    icon: "rocket",
    description: "A focused page that does one job really well.",
    includes: ["Design and build", "Copy structure guidance", "Forms and analytics", "Fast, SEO-ready launch"],
  },
  {
    title: "Full website or app",
    icon: "blocks",
    description: "A complete product, designed and engineered end to end.",
    includes: ["Discovery and UX", "Custom UI design", "Full-stack build", "Testing, launch and handover"],
    highlighted: true,
  },
  {
    title: "Custom / ongoing",
    icon: "infinity",
    description: "A flexible partnership for evolving products.",
    includes: ["New features on demand", "Maintenance and fixes", "Performance tuning", "A team that knows your code"],
  },
];

/* ── Testimonials (PLACEHOLDER DATA) ────────────────────────── */

export const testimonialsSection: SectionIntro = {
  id: "testimonials",
  eyebrow: "Kind words",
  title: "What clients will say",
  intro: "Placeholder entries for now. Swap in real quotes, with permission, as projects wrap up.",
};

/** PLACEHOLDER: replace with real, approved client quotes. */
export const testimonials: Testimonial[] = [
  {
    quote: "Placeholder quote: describe how the project felt to work on. Communication, craft, speed.",
    name: "Client Name",
    role: "Role, Company",
    placeholder: true,
  },
  {
    quote: "Placeholder quote: mention a specific result, like a smoother checkout or a launch that landed on time.",
    name: "Client Name",
    role: "Role, Company",
    placeholder: true,
  },
  {
    quote: "Placeholder quote: say what you'd tell a friend who's thinking about hiring AvoSync.",
    name: "Client Name",
    role: "Role, Company",
    placeholder: true,
  },
];

/* ── FAQ ────────────────────────────────────────────────────── */

export const faqSection: SectionIntro = {
  id: "faq",
  eyebrow: "FAQ",
  title: "Good questions",
  intro: "The things people usually ask before we start. Not here? Just message us.",
};

/** DRAFT POLICY: review these answers and adjust to match how you actually work. */
export const faqs: FaqItem[] = [
  {
    question: "How long does a project take?",
    answer:
      "It depends on scope. As a rough guide, a landing page takes one to two weeks, a full website three to six, and an app longer. After discovery you get a clear timeline with milestones, so there are no surprises.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "Each design stage includes rounds of feedback so we land exactly where you want. We'll agree the number in your proposal. If a change alters the agreed scope, we'll talk it through and quote it before doing it.",
  },
  {
    question: "Who owns the code and designs?",
    answer:
      "You do. Once the project is paid for you receive the full source code, design files and assets, with repository access. Third-party tools and licences stay with their original owners.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We choose by fit. Websites and web apps are usually React and Next.js with TypeScript. Mobile apps use React Native or Flutter. Stores run on Shopify or WooCommerce. If you already have a stack, we'll work with it.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes. Every project includes a short post-launch window to fix bugs and answer questions. After that you can move to an ongoing plan for updates, monitoring and new features, or simply come back when you need us.",
  },
  {
    question: "How does payment work?",
    answer:
      "Projects are split into milestones. Typically there's a deposit to book your slot, then payments as milestones are delivered. The exact schedule goes in your proposal, and every payment is invoiced clearly.",
  },
  {
    question: "Can you work with our existing brand or designs?",
    answer:
      "Absolutely. Bring brand guidelines, Figma files or a half-built product and we'll take it from there. If you have none of that, we can help shape a visual direction too.",
  },
  {
    question: "Who will I actually be working with?",
    answer:
      "The people designing and building your project, directly. You get regular updates, a live preview to click through, and straight answers without account-manager layers in between.",
  },
];

/* ── Contact ────────────────────────────────────────────────── */

export const contactSection = {
  id: "contact",
  eyebrow: "Contact",
  title: "Got something worth building?",
  titleAccent: "Let's ship it.",
  intro:
    "Tell us about your idea, even if it's rough. We'll reply with honest thoughts and a clear next step.",
  responseNote: "We aim to reply within two business days.",
  nextStepsTitle: "What happens next",
  nextSteps: [
    "We read your message properly.",
    "You get a reply with questions or a rough plan.",
    "If it's a fit, we hop on a short call.",
  ],
  privacyNote: "By sending this you agree to our",
  privacyLinkLabel: "privacy policy",
  success: {
    title: "Message received",
    body: "Thanks! We'll read it properly and get back to you soon.",
    reset: "Send another message",
  },
  errors: {
    generic: "Something went wrong sending your message. Please try again, or email us directly.",
    notConfigured: "The contact form isn't switched on yet. Please email us directly instead.",
  },
} as const;

/** The form's project-type dropdown mirrors the services above. */
export const projectTypes: string[] = [...services.map((service) => service.title), "Something else"];

/** PLACEHOLDER: adjust the budget bands (and currency) to suit you. */
export const budgetRanges: string[] = ["Not sure yet", "Under $1,000", "$1,000 – $3,000", "$3,000 – $10,000", "$10,000+"];

/* ── Footer ─────────────────────────────────────────────────── */

export const footer = {
  blurb: "A freelance studio building custom websites and apps that look sharp, run fast and last.",
  navTitle: "Explore",
  connectTitle: "Connect",
  signoff: "Built with care. Deployed with confidence.",
} as const;

/* ── Case study page (/work/[slug]) ─────────────────────────── */

export const caseStudyPage = {
  backLabel: "All work",
  placeholderNotice:
    "This is a placeholder case study. Replace it with a real project in content/site.ts, and add a screenshot via the project's image field.",
  sections: [
    { key: "brief", title: "The brief" },
    { key: "approach", title: "The approach" },
    { key: "outcome", title: "The outcome" },
  ],
  ctaTitle: "Want something like this?",
  ctaLabel: "Start a project",
} as const;

/* ── Privacy page (/privacy) ────────────────────────────────── */

/**
 * DRAFT: a plain-language starting point, not legal advice.
 * Have it reviewed (and add your registered business details) before launch.
 */
export const privacyPage = {
  title: "Privacy policy",
  intro:
    "This is the short version of how this website handles your information. It's a draft template: review it with a professional and update it before relying on it.",
  sections: [
    {
      heading: "What we collect",
      body: "If you use the contact form, we receive the details you type in: your name, email address, project type, budget range and message. We don't ask for anything more than we need to reply.",
    },
    {
      heading: "How we use it",
      body: "We use your details only to respond to your enquiry and to talk about a potential project. We don't sell your information or use it for unrelated marketing.",
    },
    {
      heading: "Who sees it",
      body: "Your message is delivered to us by an email or form-handling provider. That provider processes it on our behalf. We'll list the provider here once it's chosen.",
    },
    {
      heading: "How long we keep it",
      body: "We keep enquiries for as long as needed to follow up, and a reasonable time afterwards for our records. You can ask us to delete your message at any time.",
    },
    {
      heading: "Your choices",
      body: "You can ask to see, correct or delete what we hold about you by emailing us at the address on this site.",
    },
  ],
} as const;
