import { Link } from "react-router-dom";
import { Check } from "lucide-react";

interface Tier {
  name: string;
  price: string;
  priceNote?: string;
  included: string[];
  cta: { label: string; to: string };
  mostPicked?: boolean;
}

interface PricingTiersProps {
  heading: string;
  tiers: Tier[];
}

const PricingTiers = ({ heading, tiers }: PricingTiersProps) => (
  <section className="bg-background section">
    <div className="container-tight">
      <h2 className="display text-2xl md:text-4xl font-bold leading-tight mb-10">{heading}</h2>
      <div className={`grid gap-6 ${tiers.length === 2 ? "md:grid-cols-2 max-w-3xl" : "md:grid-cols-3"}`}>
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-2xl p-8 border ${tier.mostPicked ? "border-accent-blue" : "border-border"} bg-card`}
          >
            {tier.mostPicked && (
              <div className="absolute -top-3 left-8 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.08em]" style={{ background: "hsl(var(--accent-blue))", color: "hsl(var(--primary))" }}>
                Most picked
              </div>
            )}
            <h3 className="display text-xl font-bold mb-2">{tier.name}</h3>
            <div className="mb-1">
              <span className="display text-3xl font-bold">{tier.price}</span>
            </div>
            {tier.priceNote && <p className="text-xs text-muted-foreground mb-6">{tier.priceNote}</p>}
            <ul className="space-y-3 mb-8 mt-6">
              {tier.included.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-accent-blue-soft">
                    <Check className="w-3 h-3 text-accent-blue-ink" strokeWidth={3} />
                  </span>
                  <span className="text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
            <Link to={tier.cta.to} className={tier.mostPicked ? "btn-blue w-full h-12" : "btn-secondary w-full h-12"}>
              {tier.cta.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingTiers;
