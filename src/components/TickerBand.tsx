import { Star } from "lucide-react";

const items = [
  "Engineering for the ambitious",
  "Shipped in 6 weeks",
  "120+ products live",
  "Founder-led delivery",
  "Built in San Francisco · Berlin · Bangalore",
  "Trusted by Series A → C teams",
  "Pixel-perfect or it doesn't ship",
];

const TickerBand = () => (
  <section className="bg-background py-12 overflow-hidden">
    <div className="ticker-band">
      <div className="ticker-track">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="display flex items-center gap-12 text-2xl md:text-4xl font-bold whitespace-nowrap tracking-tight">
            {t}
            <Star className="w-5 h-5 md:w-7 md:h-7 fill-accent-blue text-accent-blue shrink-0" />
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default TickerBand;
