import { useEffect, useRef, useState } from "react";
import { hashString } from "@/lib/content";

/**
 * CoverArt — a vivid, deterministic, gently animated cover visual used where a
 * photographic image would otherwise be missing (blog cards, article heroes,
 * detail pages). Rich gradient + layered geometry with subtle looping motion,
 * seeded so each page gets its own look. Palettes lean into saturated color for
 * contrast against the light UI. Motion is paused automatically for users who
 * prefer reduced motion (see index.css).
 */

type Palette = { from: string; to: string; accent: string };

const palettes: Palette[] = [
  { from: "#0057FF", to: "#00C2FF", accent: "#B9E4FF" }, // cobalt → sky
  { from: "#3B2CFF", to: "#B14BFF", accent: "#E7D5FF" }, // indigo → violet
  { from: "#0B1220", to: "#1E3A8A", accent: "#60A5FA" }, // deep navy
  { from: "#0E7C66", to: "#2FD3A5", accent: "#C6F7E6" }, // teal
  { from: "#FF5A3C", to: "#FF9A3C", accent: "#FFE0C2" }, // sunset
  { from: "#C1121F", to: "#F15B4C", accent: "#FFD1CC" }, // crimson
  { from: "#1A1A2E", to: "#4C1D95", accent: "#C4B5FD" }, // midnight purple
  { from: "#0057FF", to: "#001A66", accent: "#8FB4FF" }, // electric blue
];

// Keep a distinct, recognizable palette per content category (the "color
// distinction" the site relies on). Keys match the real categorySlug values.
const categoryPalette: Record<string, number> = {
  "ai-engineering": 0,
  "product-strategy": 1,
  "saas-growth": 3,
  "web-mobile-ux": 4,
  "cloud-devops-quality": 2,
  "cloud-quality": 2,
  "digital-transformation": 6,
};

const CoverArt = ({
  seed,
  category,
  label,
  className = "",
}: {
  seed: string;
  category?: string;
  label?: string;
  className?: string;
}) => {
  const h = hashString(seed);
  const idx =
    category && categoryPalette[category] !== undefined
      ? categoryPalette[category]
      : h % palettes.length;
  const p = palettes[idx];
  const variant = h % 4;
  const gid = `cg-${h}`;
  // Deterministic per-seed offsets so nearby cards feel individually alive.
  const dA = -((h % 40) / 10); // 0 → -3.9s
  const dB = -(((h >> 3) % 55) / 10);
  const dC = -(((h >> 6) % 70) / 10);

  // Lazy-mount + pause: only render the animated SVG once it nears the viewport,
  // and pause its animations whenever it scrolls back off-screen. This keeps the
  // page smooth when many covers exist (blog grid) and honours reduced motion
  // (animations are also disabled globally via CSS media query).
  const rootRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setMounted(true);
        setActive(e.isIntersecting);
      },
      { rootMargin: "200px 0px", threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className={`relative overflow-hidden ${active ? "" : "cv-paused"} ${className}`}
      style={{ contentVisibility: "auto", containIntrinsicSize: "250px" } as React.CSSProperties}
      aria-hidden="true"
    >
      {!mounted ? (
        <div
          className="w-full h-full"
          style={{ background: `linear-gradient(135deg, ${p.from}, ${p.to})` }}
        />
      ) : (
      <svg viewBox="0 0 400 250" className="w-full h-full block" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={p.from} />
            <stop offset="100%" stopColor={p.to} />
          </linearGradient>
          <radialGradient id={`${gid}-glow`} cx="30%" cy="25%" r="70%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`${gid}-blob`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={p.accent} stopOpacity="0.5" />
            <stop offset="100%" stopColor={p.accent} stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`${gid}-sheen`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <pattern id={`${gid}-dots`} width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.3" fill="#ffffff" opacity="0.16" />
          </pattern>
        </defs>

        <rect width="400" height="250" fill={`url(#${gid})`} />
        <rect width="400" height="250" fill={`url(#${gid}-dots)`} />

        {/* Drifting light blobs for depth */}
        <circle className="cv-float" style={{ animationDelay: `${dA}s` }} cx="70" cy="210" r="120" fill={`url(#${gid}-blob)`} />
        <circle className="cv-float2" style={{ animationDelay: `${dB}s` }} cx="340" cy="30" r="90" fill="#ffffff" opacity="0.1" />

        <rect width="400" height="250" fill={`url(#${gid}-glow)`} />

        {variant === 0 && (
          <g className="cv-float" style={{ animationDelay: `${dC}s` }}>
            <g fill="none" stroke={p.accent} strokeWidth="1.5" opacity="0.7">
              <circle className="cv-spin" cx="300" cy="70" r="70" strokeDasharray="6 10" />
              <circle cx="300" cy="70" r="45" />
            </g>
            <circle className="cv-pulse" style={{ animationDelay: `${dA}s` }} cx="300" cy="70" r="20" fill={p.accent} />
          </g>
        )}
        {variant === 1 && (
          <g opacity="0.9">
            <rect className="cv-spin" x="240" y="30" width="120" height="120" rx="14" fill="none" stroke={p.accent} strokeWidth="1.5" />
            <rect className="cv-pulse" style={{ animationDelay: `${dB}s` }} x="270" y="60" width="60" height="60" rx="8" fill={p.accent} />
          </g>
        )}
        {variant === 2 && (
          <g opacity="0.9">
            <path
              className="cv-dash"
              d="M20 200 L110 120 L190 175 L280 90 L380 150"
              fill="none"
              stroke={p.accent}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {[110, 190, 280].map((x, i) => (
              <circle
                key={i}
                className="cv-float"
                style={{ animationDelay: `${-(i * 0.9)}s` }}
                cx={x}
                cy={[120, 175, 90][i]}
                r="5"
                fill="#ffffff"
              />
            ))}
          </g>
        )}
        {variant === 3 && (
          <g className="cv-float2" style={{ animationDelay: `${dC}s` }}>
            <polygon className="cv-spin-rev" points="300,20 360,55 360,125 300,160 240,125 240,55" fill="none" stroke={p.accent} strokeWidth="1.5" />
            <polygon className="cv-pulse" style={{ animationDelay: `${dA}s` }} points="300,55 335,75 335,115 300,135 265,115 265,75" fill={p.accent} />
          </g>
        )}

        {/* Sweeping sheen */}
        <rect className="cv-sheen" style={{ animationDelay: `${dB}s` }} x="-90" y="0" width="70" height="250" fill={`url(#${gid}-sheen)`} transform="skewX(-16)" />

        <line x1="0" y1="210" x2="400" y2="210" stroke="#ffffff" strokeWidth="1" opacity="0.14" />
      </svg>

      {label && (
        <span className="absolute bottom-3 left-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80">
          {label}
        </span>
      )}
    </div>
  );
};

export default CoverArt;
