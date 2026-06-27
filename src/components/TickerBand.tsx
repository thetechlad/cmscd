import { Star } from "lucide-react";

const items = [
  "Engineering for the ambitious",
  "Founder-led delivery",
  "Senior engineers only",
  "Weekly demos, no surprises",
  "Design and build under one roof",
  "Pixel-perfect or it doesn't ship",
];

const TickerBand = () => (
  <section className="bg-background py-12 overflow-hidden">
    <div className="ticker-band">
      <div className="ticker-track">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="display flex items-center gap-12 text-2xl md:text-4xl font-bold whitespace-nowrap tracking-tight text-white">
            {t}
            <Star className="w-5 h-5 md:w-7 md:h-7 fill-white text-white shrink-0" />
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default TickerBand;
