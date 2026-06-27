interface Commitment {
  label: string;
  value: string;
}

const DEFAULTS: Commitment[] = [
  { label: "Ownership", value: "Your code. Your IP." },
  { label: "Team", value: "Senior engineers only" },
  { label: "Delivery", value: "Visible weekly progress" },
  { label: "Engagement", value: "Start small, scale on trust" },
];

/**
 * Slim proof strip. Uses trust commitments rather than invented metrics.
 * Scrollable snap row on mobile.
 */
const ProofStrip = ({ items = DEFAULTS }: { items?: Commitment[] }) => (
  <section className="bg-background-soft border-y border-border">
    <div className="container-tight">
      <ul className="flex md:grid md:grid-cols-4 gap-px overflow-x-auto snap-x snap-mandatory -mx-6 md:mx-0 px-6 md:px-0 scrollbar-none">
        {items.map((c) => (
          <li
            key={c.label}
            className="snap-start shrink-0 w-[70%] sm:w-[45%] md:w-auto py-7 md:px-7 first:md:pl-0"
          >
            <div className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground font-medium mb-2">
              {c.label}
            </div>
            <div className="display text-lg md:text-xl font-bold leading-tight">{c.value}</div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ProofStrip;
