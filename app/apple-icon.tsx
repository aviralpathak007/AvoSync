import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", backgroundColor: "#07080c" }}>
        <svg width="180" height="180" viewBox="0 0 32 32" fill="none">
          <defs>
            <linearGradient id="g" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a3e635" />
              <stop offset="0.5" stopColor="#34d399" />
              <stop offset="1" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          <rect x="3" y="3" width="26" height="26" rx="8" fill="url(#g)" />
          <path d="M10 23.5 16 9.5l6 14" stroke="#07080c" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="16" cy="19.6" r="2" fill="#07080c" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
