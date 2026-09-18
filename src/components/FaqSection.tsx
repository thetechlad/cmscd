import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Reveal from "./Reveal";
import { faqGroups } from "@/data/faqData";

interface Props {
  /** Show the section eyebrow + heading (homepage). */
  withHeading?: boolean;
  className?: string;
}

const FaqSection = ({ withHeading = true, className = "" }: Props) => {
  const [active, setActive] = useState(faqGroups[0].id);
  const [open, setOpen] = useState<string>(`${faqGroups[0].id}-0`);
  const group = faqGroups.find((g) => g.id === active) ?? faqGroups[0];

  return (
    <Reveal as="section" className={`bg-background-soft section ${className}`}>
      <div className="container-tight">
        {withHeading && (
          <div className="max-w-2xl mb-12 reveal-child">
            <div className="label-eyebrow mb-6">FAQ</div>
            <h2 className="display text-[28px] md:text-[40px] lg:text-[48px] font-bold leading-[1.08]">
              Answers on{" "}
              <span style={{ color: "hsl(var(--accent-blue-ink))" }}>services, timelines</span> and pricing.
            </h2>
            <p className="text-muted-foreground mt-5 leading-[1.7]">
              The questions founders and operators ask us most. Still unsure? A quick discovery call clears it up fast.
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-12 gap-8 reveal-child">
          {/* Category rail */}
          <div className="lg:col-span-4">
            <div className="flex lg:flex-col gap-2 flex-wrap lg:sticky lg:top-28">
              {faqGroups.map((g) => {
                const on = g.id === active;
                return (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => {
                      setActive(g.id);
                      setOpen(`${g.id}-0`);
                    }}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all border ${
                      on
                        ? "bg-card border-border shadow-sm text-foreground"
                        : "border-transparent text-muted-foreground hover:text-foreground hover:bg-white/60"
                    }`}
                  >
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full mr-2.5 align-middle"
                      style={{ background: on ? "hsl(var(--accent-blue))" : "hsl(var(--border))" }}
                    />
                    {g.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-border border-y border-border">
              {group.items.map((item, i) => {
                const key = `${group.id}-${i}`;
                const isOpen = open === key;
                return (
                  <div key={key}>
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? "" : key)}
                        aria-expanded={isOpen}
                        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                      >
                        <span className="display text-base md:text-lg font-semibold text-foreground group-hover:text-accent-blue transition-colors">
                          {item.q}
                        </span>
                        <span className="shrink-0 mt-0.5 w-7 h-7 rounded-full border border-border flex items-center justify-center text-foreground group-hover:border-accent-blue group-hover:text-accent-blue transition-colors">
                          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </span>
                      </button>
                    </h3>
                    <div
                      className="grid transition-all duration-300"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="text-muted-foreground leading-[1.7] pb-6 max-w-2xl text-[15px]">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default FaqSection;
