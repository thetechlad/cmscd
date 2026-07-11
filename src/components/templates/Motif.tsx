import { hashString } from "@/lib/content";

/**
 * Deterministic abstract motif — a calm geometric system, not decorative noise.
 * Same design language across pages, varied by seed.
 */
const Motif = ({ seed, className = "" }: { seed: string; className?: string }) => {
  const h = hashString(seed);
  const variant = h % 4;
  const blue = "hsl(188 100% 44%)";
  const ink = "hsl(0 0% 5%)";

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <pattern id={`dots-${h}`} width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill={ink} opacity="0.12" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="400" height="400" fill={`url(#dots-${h})`} />

      {variant === 0 && (
        <>
          <circle cx="200" cy="200" r="120" fill="none" stroke={ink} strokeWidth="1" opacity="0.18" />
          <circle cx="200" cy="200" r="80" fill="none" stroke={blue} strokeWidth="2" />
          <circle cx="200" cy="200" r="40" fill={blue} opacity="0.1" />
          <line x1="80" y1="200" x2="320" y2="200" stroke={ink} strokeWidth="1" opacity="0.2" />
          <circle cx="280" cy="200" r="6" fill={blue} />
        </>
      )}
      {variant === 1 && (
        <>
          <rect x="110" y="110" width="180" height="180" fill="none" stroke={ink} strokeWidth="1" opacity="0.2" />
          <rect x="150" y="150" width="100" height="100" fill="none" stroke={blue} strokeWidth="2" transform="rotate(15 200 200)" />
          <rect x="180" y="180" width="40" height="40" fill={blue} opacity="0.12" />
        </>
      )}
      {variant === 2 && (
        <>
          <path d="M80 280 L160 160 L240 240 L320 120" fill="none" stroke={blue} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M80 320 L160 220 L240 300 L320 200" fill="none" stroke={ink} strokeWidth="1" opacity="0.2" />
          {[160, 240, 320].map((x, i) => (
            <circle key={i} cx={x} cy={[160, 240, 120][i]} r="5" fill={blue} />
          ))}
        </>
      )}
      {variant === 3 && (
        <>
          <polygon points="200,90 300,150 300,250 200,310 100,250 100,150" fill="none" stroke={ink} strokeWidth="1" opacity="0.2" />
          <polygon points="200,140 260,175 260,225 200,260 140,225 140,175" fill={blue} opacity="0.1" stroke={blue} strokeWidth="2" />
          <circle cx="200" cy="200" r="6" fill={blue} />
        </>
      )}
    </svg>
  );
};

export default Motif;
