import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import CoverArt from "@/components/templates/CoverArt";
import MockupFrame from "@/components/templates/MockupFrame";

interface Step {
  title: string;
  body: string;
}

interface Props {
  slug: string;
  eyebrow?: string;
  headline?: string;
  steps?: Step[];
}

const DEFAULT_STEPS: Step[] = [
  { title: "Connect your data", body: "We plug into the systems and sources your workflow already depends on." },
  { title: "Configure the logic", body: "Rules, models, and guardrails tuned to how your team actually operates." },
  { title: "Ship & observe", body: "Working software in production with monitoring, so you see real behaviour early." },
  { title: "Iterate on signals", body: "Usage and support data drive the next increment — the product keeps getting sharper." },
];

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/**
 * FeatureWalkthrough — an interactive, auto-advancing feature tour. Clicking a
 * step cross-fades the mockup panel; it auto-advances only while on-screen and
 * pauses for reduced-motion users.
 */
const FeatureWalkthrough = ({
  slug,
  eyebrow = "Feature walkthrough",
  headline = "How the product comes together, step by step",
  steps = DEFAULT_STEPS,
}: Props) => {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || prefersReduced()) return;
    const id = setInterval(() => setActive((a) => (a + 1) % steps.length), 3200);
    return () => clearInterval(id);
  }, [inView, steps.length]);

  return (
    <section className="bg-background-soft section border-y border-border" ref={ref}>
      <div className="container-tight grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <div className="label-eyebrow mb-5">{eyebrow}</div>
          <h2 className="display text-2xl md:text-4xl font-bold leading-tight mb-8">{headline}</h2>
          <ul className="space-y-3">
            {steps.map((s, i) => {
              const on = i === active;
              return (
                <li key={i}>
                  <button
                    onClick={() => setActive(i)}
                    className={`w-full text-left rounded-2xl border p-5 transition-all ${
                      on
                        ? "border-accent-blue bg-background shadow-[0_16px_40px_-24px_hsl(var(--accent-blue)/0.5)]"
                        : "border-border bg-background/60 hover:border-accent-blue/40"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-1.5">
                      <span
                        className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                          on ? "bg-accent-blue text-primary" : "bg-accent-blue-soft text-accent-blue-ink"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <h3 className="display text-base font-bold leading-snug">{s.title}</h3>
                    </div>
                    {on && (
                      <p className="text-sm text-muted-foreground leading-[1.6] pl-10 animate-fade-in">
                        {s.body}
                      </p>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <MockupFrame url={`step-${active + 1}.codersdive.app`}>
            <div className="relative aspect-[16/10] w-full">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    i === active ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <CoverArt seed={`${slug}-walk-${i}`} label={s.title} className="w-full h-full" />
                </div>
              ))}
            </div>
          </MockupFrame>
          <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              Step {active + 1} of {steps.length} <ArrowRight className="w-3.5 h-3.5" />
            </span>
            <div className="flex-1 h-1 rounded-full bg-border overflow-hidden">
              <div
                className="h-full bg-accent-blue transition-all duration-500"
                style={{ width: `${((active + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureWalkthrough;
