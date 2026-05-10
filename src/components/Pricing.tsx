import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

const launchpad = [
  "Project ready in 3-4 weeks",
  "Responsive design across devices",
  "Brand-matched visual design",
  "Essential features only",
  "Basic SEO optimization",
  "30 days of support",
];

const fullProcess = [
  "1 dedicated senior developer",
  "Custom landing experience tailored to brand",
  "High-quality, modern visuals",
  "Continuous iteration cycles",
  "Pixel-level attention to detail",
  "Advanced SEO optimization",
  "Priority maintenance and updates",
  "Content management system",
];

const PricingCard = ({
  name, badge, price, oldPrice, desc, features, cta, popular = false,
}: {
  name: string; badge: string; price: string; oldPrice: string; desc: string;
  features: string[]; cta: string; popular?: boolean;
}) => (
  <div
    className={`reveal-child relative overflow-hidden rounded-2xl p-8 md:p-10 transition-transform duration-300 hover:-translate-y-2 ${
      popular ? "bg-foreground text-background" : "bg-white border border-border"
    }`}
    style={popular ? { boxShadow: "0 30px 80px -20px rgba(37, 99, 235, 0.45)" } : { boxShadow: "0 10px 40px -20px rgba(0,0,0,0.1)" }}
  >
    {popular && <div className="pricing-tag">MOST POPULAR</div>}

    <div className="flex items-center gap-3 mb-6">
      <h3 className={`display text-2xl font-bold ${popular ? "text-background" : "text-foreground"}`}>{name}</h3>
      <span
        className="text-[10px] font-bold px-2.5 py-1 rounded-full"
        style={{
          background: popular ? "hsl(var(--accent-blue))" : "hsl(var(--accent-blue-soft))",
          color: popular ? "white" : "hsl(var(--accent-blue))",
        }}
      >
        {badge}
      </span>
    </div>

    <div className="flex items-baseline gap-3 mb-5">
      <span className={`text-lg line-through ${popular ? "text-background/40" : "text-muted-foreground/60"}`}>{oldPrice}</span>
      <span className="display text-5xl md:text-6xl font-bold tracking-tight">{price}</span>
    </div>

    <p className={`text-sm leading-relaxed mb-8 ${popular ? "text-background/70" : "text-muted-foreground"}`}>{desc}</p>

    <div className={`h-px w-full mb-8 ${popular ? "bg-background/15" : "bg-border"}`} />

    <div className={`text-[11px] font-bold uppercase tracking-[0.15em] mb-5 ${popular ? "text-background/60" : "text-muted-foreground"}`}>
      Deliverables include
    </div>
    <ul className="space-y-3 mb-10">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-3 text-sm">
          <span
            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
            style={{
              background: popular ? "hsl(var(--accent-blue))" : "hsl(var(--accent-blue-soft))",
              color: popular ? "white" : "hsl(var(--accent-blue))",
            }}
          >
            <Check className="w-3 h-3" strokeWidth={3} />
          </span>
          <span className={popular ? "text-background/90 font-medium" : "text-foreground"}>{f}</span>
        </li>
      ))}
    </ul>

    <Link
      to="/contact"
      className="flex items-center justify-center w-full h-14 rounded-full font-bold text-sm transition-transform hover:scale-[1.02]"
      style={
        popular
          ? { background: "hsl(var(--accent-blue))", color: "white" }
          : { background: "hsl(var(--foreground))", color: "hsl(var(--background))" }
      }
    >
      {cta}
    </Link>
  </div>
);

const Pricing = () => (
  <Reveal as="section" className="relative bg-background-soft section overflow-hidden">
    <div className="absolute inset-0 dot-grid-strong opacity-60 pointer-events-none" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
         style={{ background: "radial-gradient(circle, hsl(var(--accent-blue-tint) / 0.5) 0%, transparent 70%)" }} />

    <div className="container-tight relative">
      <div className="text-center mb-16 reveal-child">
        <div className="label-eyebrow mb-6 justify-center" style={{ display: "inline-flex" }}>Pricing</div>
        <h2 className="display text-[34px] md:text-[48px] lg:text-[64px] font-bold leading-[1.05] mb-4">
          The right <span style={{ color: "hsl(var(--accent-blue))" }}>plans</span> for your ideas.
        </h2>
        <p className="text-muted-foreground italic">
          Get the quality and speed of big agencies — at <strong className="text-foreground not-italic">honest prices</strong>.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <PricingCard
          name="Launchpad"
          badge="25% OFF"
          oldPrice="$3999"
          price="$2999"
          desc="Deliver a fast, functional, and impactful MVP to kickstart your product journey."
          features={launchpad}
          cta="Launch your site now"
        />
        <PricingCard
          name="Full Process"
          badge="20% OFF"
          oldPrice="$4999"
          price="$3999"
          desc="End-to-end product development with iterative cycles to ship a polished, feature-rich product."
          features={fullProcess}
          cta="Book a call now"
          popular
        />
      </div>
    </div>
  </Reveal>
);

export default Pricing;
