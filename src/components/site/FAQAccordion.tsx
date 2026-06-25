import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQAccordion({ items, defaultOpen = -1 }: { items: { q: string; a: string }[]; defaultOpen?: number }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <ul className="divide-y divide-foreground/10 border-y border-foreground/10">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <li key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="w-full flex items-start justify-between gap-6 py-6 text-left group"
            >
              <span className="font-serif text-xl md:text-2xl leading-snug pr-4 group-hover:text-aqua transition-colors">{it.q}</span>
              <span className="shrink-0 w-9 h-9 rounded-full border border-foreground/20 grid place-items-center mt-1">
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            {isOpen && <div className="pb-6 pr-12 text-foreground/70 leading-relaxed">{it.a}</div>}
          </li>
        );
      })}
    </ul>
  );
}