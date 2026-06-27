import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export interface QA {
  q: string;
  a: string;
}

const FaqAccordion = ({ items, defaultOpen = -1 }: { items: QA[]; defaultOpen?: number }) => {
  const [open, setOpen] = useState<number>(defaultOpen);

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
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
  );
};

export default FaqAccordion;
