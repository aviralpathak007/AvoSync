/**
 * Canonical origin used for metadataBase, the sitemap, robots.txt and JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL in production. On Vercel we fall back to the
 * production domain Vercel exposes automatically.
 */
export const SITE_URL: string = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");
