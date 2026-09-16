import CoverArt from "@/components/templates/CoverArt";
import MockupFrame from "@/components/templates/MockupFrame";
import { getPageImage } from "@/data/pageImages";
import { AlertTriangle, Check, ArrowRight } from "lucide-react";

interface Props {
  slug: string;
  label?: string;
  problem?: string;
  solution?: string;
}

/**
 * ProblemSolution — a paired problem/solution visual for case studies: a "before"
 * state (constraints, friction) set against the "after" (the shipped product),
 * with a framed screenshot of the outcome.
 */
const ProblemSolution = ({
  slug,
  label,
  problem = "Manual, disconnected workflows created delays, errors, and no shared view of what was actually happening.",
  solution = "A single, well-instrumented product that automates the repetitive path and surfaces exceptions where the team can act on them.",
}: Props) => {
  const hero = getPageImage(slug);
  return (
    <section className="section">
      <div className="container-tight">
        <div className="max-w-2xl mb-10">
          <div className="label-eyebrow mb-5">Problem → Solution</div>
          <h2 className="display text-2xl md:text-4xl font-bold leading-tight">
            From the constraint to the working product
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <div className="rounded-2xl border border-border bg-background-soft p-7">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-4">
              <AlertTriangle className="w-4 h-4" /> Before
            </span>
            <p className="text-foreground/80 leading-[1.7] text-[15px]">{problem}</p>
          </div>
          <div
            className="rounded-2xl p-7 text-white relative overflow-hidden"
            style={{ background: "hsl(var(--accent-blue))" }}
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80 mb-4">
              <Check className="w-4 h-4" /> After
            </span>
            <p className="text-white/95 leading-[1.7] text-[15px]">{solution}</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground mb-6">
          <span className="hidden sm:inline">The result in production</span>
          <ArrowRight className="w-4 h-4 text-accent-blue-ink" />
        </div>

        <MockupFrame url={`${slug}.codersdive.app`}>
          <div className="aspect-[16/9] w-full overflow-hidden">
            {hero ? (
              <img src={hero} alt={`${label || slug} — shipped product`} loading="lazy" className="w-full h-full object-cover" />
            ) : (
              <CoverArt seed={`${slug}-ps`} label={label} className="w-full h-full" />
            )}
          </div>
        </MockupFrame>
      </div>
    </section>
  );
};

export default ProblemSolution;
