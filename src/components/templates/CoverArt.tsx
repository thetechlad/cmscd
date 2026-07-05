import { hashString } from "@/lib/content";

/**
 * CoverArt — a vivid, deterministic cover visual used where a photographic
 * image would otherwise be missing (blog cards, article heroes, detail pages).
 * Rich gradient + layered geometry, seeded so each page gets its own look.
 * Palettes lean into saturated color for contrast against the light UI.
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

const categoryPalette: Record<string, number> = {
  "ai-engineering": 0,
  "product-strategy": 1,
  "saas-growth": 3,
  "web-mobile-ux": 4,
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

  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden="true">
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
          <pattern id={`${gid}-dots`} width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.3" fill="#ffffff" opacity="0.16" />
          </pattern>
        </defs>

        <rect width="400" height="250" fill={`url(#${gid})`} />
        <rect width="400" height="250" fill={`url(#${gid}-dots)`} />
        <rect width="400" height="250" fill={`url(#${gid}-glow)`} />

        {variant === 0 && (
          <g fill="none" stroke={p.accent} strokeWidth="1.5" opacity="0.7">
            <circle cx="300" cy="70" r="70" />
            <circle cx="300" cy="70" r="45" />
            <circle cx="300" cy="70" r="20" fill={p.accent} opacity="0.5" />
          </g>
        )}
        {variant === 1 && (
          <g opacity="0.85">
            <rect x="240" y="30" width="120" height="120" rx="14" fill="none" stroke={p.accent} strokeWidth="1.5" transform="rotate(12 300 90)" />
            <rect x="270" y="60" width="60" height="60" rx="8" fill={p.accent} opacity="0.35" transform="rotate(12 300 90)" />
          </g>
        )}
        {variant === 2 && (
          <g opacity="0.85">
            <path d="M20 200 L110 120 L190 175 L280 90 L380 150" fill="none" stroke={p.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {[110, 190, 280].map((x, i) => (
              <circle key={i} cx={x} cy={[120, 175, 90][i]} r="5" fill="#ffffff" />
            ))}
          </g>
        )}
        {variant === 3 && (
          <g opacity="0.8">
            <polygon points="300,20 360,55 360,125 300,160 240,125 240,55" fill="none" stroke={p.accent} strokeWidth="1.5" />
            <polygon points="300,55 335,75 335,115 300,135 265,115 265,75" fill={p.accent} opacity="0.35" />
          </g>
        )}

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
