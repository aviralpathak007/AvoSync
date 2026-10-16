import type { ReactElement } from "react";
import type { ProjectArtKind } from "@/content/site";

/**
 * Generated placeholder artwork for project cards: simple UI wireframes in the brand gradient.
 * Swap in real screenshots by setting `image` on a project in content/site.ts.
 */

const stroke = "rgb(255 255 255 / 0.14)";
const fill = "rgb(255 255 255 / 0.05)";
const fillStrong = "rgb(255 255 255 / 0.1)";

const scenes: Record<ProjectArtKind, (gradient: string) => ReactElement> = {
  dashboard: (g) => (
    <>
      <rect x="20" y="20" width="60" height="160" rx="10" fill={fill} stroke={stroke} />
      {[44, 62, 80, 98].map((y) => (
        <rect key={y} x="30" y={y} width="40" height="6" rx="3" fill={fillStrong} />
      ))}
      {[92, 160, 228].map((x) => (
        <rect key={x} x={x} y="20" width="60" height="38" rx="8" fill={fill} stroke={stroke} />
      ))}
      <rect x="92" y="70" width="196" height="110" rx="10" fill={fill} stroke={stroke} />
      <path d="M104 160 L134 132 L162 142 L194 104 L226 118 L276 84" stroke={g} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M104 160 L134 132 L162 142 L194 104 L226 118 L276 84 V170 H104Z" fill={g} opacity="0.12" />
    </>
  ),
  storefront: (g) => (
    <>
      <rect x="20" y="18" width="280" height="22" rx="8" fill={fill} stroke={stroke} />
      <rect x="30" y="26" width="40" height="6" rx="3" fill={g} />
      {[0, 1, 2].map((col) =>
        [0, 1].map((row) => (
          <g key={`${col}-${row}`} transform={`translate(${20 + col * 96} ${52 + row * 68})`}>
            <rect width="88" height="60" rx="10" fill={fill} stroke={stroke} />
            <circle cx="44" cy="26" r="14" fill={row === 0 && col === 1 ? g : fillStrong} opacity={row === 0 && col === 1 ? 0.9 : 1} />
            <rect x="22" y="46" width="30" height="5" rx="2.5" fill={fillStrong} />
            <rect x="60" y="46" width="14" height="5" rx="2.5" fill={g} />
          </g>
        )),
      )}
    </>
  ),
  mobile: (g) => (
    <>
      <rect x="112" y="10" width="96" height="180" rx="16" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <rect x="146" y="16" width="28" height="5" rx="2.5" fill={fillStrong} />
      <circle cx="160" cy="70" r="26" stroke={fillStrong} strokeWidth="7" fill="none" />
      <path d="M160 44 A26 26 0 1 1 135 78" stroke={g} strokeWidth="7" strokeLinecap="round" fill="none" />
      {[110, 130, 150].map((y, i) => (
        <g key={y}>
          <rect x="124" y={y} width="72" height="14" rx="6" fill={fill} stroke={stroke} />
          <rect x="130" y={y + 5} width={36 - i * 8} height="4" rx="2" fill={i === 0 ? g : fillStrong} />
        </g>
      ))}
      <rect x="132" y="172" width="56" height="6" rx="3" fill={fillStrong} />
    </>
  ),
  website: (g) => (
    <>
      <rect x="20" y="16" width="280" height="168" rx="12" fill={fill} stroke={stroke} />
      <path d="M20 40 H300" stroke={stroke} />
      {[32, 44, 56].map((x) => (
        <circle key={x} cx={x} cy="28" r="3" fill={fillStrong} />
      ))}
      <rect x="40" y="62" width="120" height="12" rx="6" fill={fillStrong} />
      <rect x="40" y="82" width="90" height="12" rx="6" fill={g} />
      <rect x="40" y="108" width="110" height="5" rx="2.5" fill={fillStrong} />
      <rect x="40" y="119" width="84" height="5" rx="2.5" fill={fillStrong} />
      <rect x="40" y="140" width="52" height="18" rx="9" fill={g} />
      <rect x="188" y="60" width="92" height="106" rx="10" fill={fillStrong} />
      <circle cx="234" cy="100" r="18" fill={g} opacity="0.75" />
    </>
  ),
  landing: (g) => (
    <>
      <rect x="20" y="16" width="280" height="168" rx="12" fill={fill} stroke={stroke} />
      <rect x="86" y="46" width="148" height="12" rx="6" fill={fillStrong} />
      <rect x="110" y="66" width="100" height="12" rx="6" fill={g} />
      <rect x="104" y="92" width="112" height="5" rx="2.5" fill={fillStrong} />
      <rect x="64" y="116" width="140" height="26" rx="13" fill={fill} stroke={stroke} />
      <rect x="208" y="116" width="50" height="26" rx="13" fill={g} />
      {[78, 128, 178].map((x) => (
        <rect key={x} x={x} y="162" width="34" height="6" rx="3" fill={fillStrong} />
      ))}
    </>
  ),
  icons: (g) => (
    <>
      <rect x="20" y="16" width="280" height="168" rx="12" fill={fill} stroke={stroke} />
      {[0, 1, 2, 3].map((col) =>
        [0, 1].map((row) => (
          <g key={`${col}-${row}`} transform={`translate(${44 + col * 62} ${44 + row * 66})`}>
            <rect width="46" height="46" rx="12" fill={fill} stroke={stroke} />
            <g stroke={(col + row) % 3 === 0 ? g : "rgb(255 255 255 / 0.55)"} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              {(col + row * 4) % 4 === 0 ? <circle cx="23" cy="23" r="9" /> : null}
              {(col + row * 4) % 4 === 1 ? <rect x="14" y="14" width="18" height="18" rx="4" /> : null}
              {(col + row * 4) % 4 === 2 ? <path d="M23 13 L33 31 H13Z" /> : null}
              {(col + row * 4) % 4 === 3 ? <path d="M23 12 V34 M12 23 H34" /> : null}
            </g>
          </g>
        )),
      )}
    </>
  ),
};

export function ProjectArt({ kind }: { kind: ProjectArtKind }) {
  const gradientId = `art-${kind}`;
  return (
    <div
      aria-hidden="true"
      className="relative size-full bg-[radial-gradient(ellipse_at_20%_0%,rgb(163_230_53/0.16),transparent_55%),radial-gradient(ellipse_at_90%_100%,rgb(34_211_238/0.16),transparent_55%)]"
    >
      <div className="bg-dots absolute inset-0 opacity-60" />
      <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="relative size-full">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#a3e635" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        {scenes[kind](`url(#${gradientId})`)}
      </svg>
    </div>
  );
}
