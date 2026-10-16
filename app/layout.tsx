import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { JsonLd } from "@/components/ui/JsonLd";
import { services, site, socials } from "@/content/site";
import { SITE_URL } from "@/lib/site-url";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = `${site.name} | ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  keywords: [
    "custom website design",
    "custom app development",
    "freelance web developer",
    "UX design",
    "landing page design",
    "e-commerce website design",
    "Next.js developer",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title,
    description: site.description,
    url: "/",
  },
  twitter: { card: "summary_large_image", title, description: site.description },
};

export const viewport: Viewport = {
  themeColor: "#07080c",
  colorScheme: "dark",
};

/** Only links that go deeper than a platform's home page are real profiles. */
const profileLinks = socials.map((social) => social.href).filter((href) => new URL(href).pathname.length > 1);

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: SITE_URL,
  description: site.description,
  email: site.email,
  image: `${SITE_URL}/opengraph-image`,
  ...(profileLinks.length > 0 ? { sameAs: profileLinks } : {}),
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: service.title, description: service.description },
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetBrainsMono.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="fixed top-3 left-3 z-[200] -translate-y-20 rounded-full bg-accent-gradient px-4 py-2 text-sm font-semibold text-bg transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <JsonLd data={organizationJsonLd} />
        <MotionProvider>
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
