import { ImageResponse } from "next/og";
import { site, socialCard } from "@/content/site";

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_ALT = `${site.name}: ${site.tagline}`;

/** Brand-styled social card shared by the Open Graph and Twitter images. */
export function renderSocialImage(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#eceef6",
          backgroundColor: "#07080c",
          backgroundImage:
            "radial-gradient(circle at 15% 0%, rgba(163,230,53,0.28), transparent 45%), radial-gradient(circle at 95% 100%, rgba(34,211,238,0.28), transparent 50%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="72" height="72" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="g" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                <stop stopColor="#a3e635" />
                <stop offset="0.5" stopColor="#34d399" />
                <stop offset="1" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
            <rect width="32" height="32" rx="9" fill="url(#g)" />
            <path d="M9 24.5 16 8l7 16.5" stroke="#07080c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="16" cy="20.2" r="2.4" fill="#07080c" />
          </svg>
          <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: -1 }}>{site.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 88, fontWeight: 700, lineHeight: 1.04, letterSpacing: -3 }}>
          <div>{socialCard.headline}</div>
          <div
            style={{
              backgroundImage: "linear-gradient(100deg, #a3e635, #34d399, #22d3ee)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {socialCard.headlineAccent}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#a3a9bd" }}>
          {socialCard.footer}
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
