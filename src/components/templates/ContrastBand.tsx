import { Check } from "lucide-react";

interface Point {
  title: string;
  body: string;
}

interface Props {
  eyebrow?: string;
  headline: string;
  intro?: string;
  points: Point[];
}

/**
 * ContrastBand — a full-bleed cobalt section used to break up the light page
 * flow with a strong colour contrast. Qualitative points only (no invented
 * metrics), rendered as glassy cards on the blue field.
 */
const ContrastBand = ({ eyebrow = "Why it matters", headline, intro, points }: Props) => (
  <section
    className="section relative overflow-hidden"
    style={{ background: "hsl(var(--accent-blue))" }}
  >
    <div className="grid-lines absolute inset-0 opacity-40" aria-hidden="true" />
    <div
      className="absolute inset-0 opacity-70"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(at 15% 0%, rgba(255,255,255,0.18) 0px, transparent 45%), radial-gradient(at 90% 100%, rgba(0,0,0,0.18) 0px, transparent 50%)",
      }}
    />
    <div className="container-tight relative">
      <div className="max-w-2xl mb-12">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70 mb-5">
          {eyebrow}
        </div>
        <h2 className="display text-2xl md:text-4xl font-bold leading-tight text-white">
          {headline}
        </h2>
        {intro && (
          <p className="text-white/80 mt-5 text-base md:text-lg leading-[1.6]">{intro}</p>
        )}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {points.map((p, i) => (
          <div
            key={i}
            className="rounded-2xl p-6 border border-white/15"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            <span className="w-9 h-9 rounded-full flex items-center justify-center mb-4 bg-white/15">
              <Check className="w-4 h-4 text-white" />
            </span>
            <h3 className="display text-base font-bold mb-2 leading-snug text-white">
              {p.title}
            </h3>
            <p className="text-sm text-white/75 leading-[1.6]">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ContrastBand;
