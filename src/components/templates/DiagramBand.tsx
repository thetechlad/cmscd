import { hashString } from "@/lib/content";

interface Props {
  seed: string;
  eyebrow?: string;
  headline?: string;
  intro?: string;
  nodes?: string[];
}

/**
 * DiagramBand — a light section with an animated SVG flow/architecture diagram.
 * Gives inner pages a "how it fits together" visual without a bitmap image.
 */
const DiagramBand = ({
  seed,
  eyebrow = "How it fits together",
  headline = "A system, not a set of disconnected parts",
  intro,
  nodes = ["Sources & data", "Processing & logic", "Product surface", "Insights & actions"],
}: Props) => {
  const h = hashString(seed);
  const gid = `dg-${h}`;
  return (
    <section className="section">
      <div className="container-tight">
        <div className="max-w-2xl mb-10">
          <div className="label-eyebrow mb-5">{eyebrow}</div>
          <h2 className="display text-2xl md:text-4xl font-bold leading-tight">{headline}</h2>
          {intro && <p className="text-muted-foreground mt-5 leading-[1.7] text-[15px]">{intro}</p>}
        </div>

        <div className="rounded-3xl border border-border bg-background-soft p-6 md:p-10 overflow-hidden">
          <svg viewBox="0 0 900 240" className="w-full h-auto" role="img" aria-label="System architecture diagram">
            <defs>
              <linearGradient id={gid} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="hsl(var(--accent-blue))" />
                <stop offset="100%" stopColor="hsl(var(--accent-blue-tint))" />
              </linearGradient>
            </defs>

            {/* connector line */}
            <line x1="120" y1="120" x2="780" y2="120" stroke={`url(#${gid})`} strokeWidth="2" opacity="0.35" />
            <line
              x1="120"
              y1="120"
              x2="780"
              y2="120"
              stroke={`url(#${gid})`}
              strokeWidth="3"
              strokeDasharray="10 12"
              className="cv-dash"
            />

            {nodes.map((n, i) => {
              const x = 120 + i * (660 / (nodes.length - 1));
              return (
                <g key={i}>
                  <circle
                    cx={x}
                    cy="120"
                    r="42"
                    fill="hsl(var(--background))"
                    stroke={`url(#${gid})`}
                    strokeWidth="2.5"
                  />
                  <circle cx={x} cy="120" r="10" fill={`url(#${gid})`} className="cv-pulse" style={{ animationDelay: `${-i * 0.6}s` }} />
                  <text x={x} y="200" textAnchor="middle" fontSize="15" fontWeight="600" fill="hsl(var(--foreground))">
                    {n.length > 16 ? n.slice(0, 15) + "…" : n}
                  </text>
                  <text x={x} y="70" textAnchor="middle" fontSize="12" fontWeight="700" fill="hsl(var(--accent-blue))">
                    {String(i + 1).padStart(2, "0")}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default DiagramBand;
