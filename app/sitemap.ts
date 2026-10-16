import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";

// Case-study pages are left out while they hold placeholder content (they are noindex).
// Once a project is real, remove `robots: { index: false }` in app/work/[slug]/page.tsx
// and add its URL here.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
