import { ArrowUpRight, Waves } from "lucide-react";
import { Link } from "react-router-dom";
import orb from "@/assets/orb.png";
import oceanBg from "@/assets/ocean-depth.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden noise ocean-rays min-h-[92vh] flex items-center">
      {/* Ocean depth backdrop */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${oceanBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      <div className="absolute inset-0 dot-bg" />

      {/* Atmosphere */}
      <div className="glow-orb w-[600px] h-[600px] -top-48 -left-40 bg-primary/25" />
      <div className="glow-orb w-[500px] h-[500px] bottom-0 -right-40 bg-accent/25" />

      {/* Bubbles */}
      {[
        { l: "10%", s: 8, d: 14, delay: 0 },
        { l: "22%", s: 12, d: 18, delay: 3 },
        { l: "38%", s: 6, d: 12, delay: 6 },
        { l: "62%", s: 10, d: 20, delay: 1 },
        { l: "78%", s: 14, d: 16, delay: 4 },
        { l: "90%", s: 7, d: 13, delay: 7 },
      ].map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            left: b.l,
            bottom: "-40px",
            width: b.s,
            height: b.s,
            animationDuration: `${b.d}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}

      <div className="container-tight relative pt-28 pb-24 md:pt-32 md:pb-32 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground mb-7">
              <span className="ripple relative flex h-2 w-2 rounded-full bg-primary" />
              <Waves className="w-3.5 h-3.5 text-primary" />
              Now diving with 4 founder-led teams · Q3 2026
            </div>

            <h1 className="display text-5xl md:text-7xl lg:text-[5.75rem] leading-[0.92] font-semibold mb-7 tracking-tight">
              We don't surf
              <br />
              the surface.
              <br />
              <span className="text-gradient">We dive deeper.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
              CodersDive is the deep-end product engineering studio for founders who refuse shallow software. We descend into the hard problems — and surface with products that move markets.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link to="/contact" className="btn-primary group">
                Take the plunge
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link to="/portfolio" className="btn-ghost group">
                See what we've surfaced
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-4 max-w-xl">
              {[
                { k: "120+", v: "Products surfaced" },
                { k: "$48M", v: "Revenue powered" },
                { k: "6 wks", v: "Avg. to first ship" },
              ].map((s) => (
                <div key={s.v} className="border-l border-border pl-4">
                  <div className="display text-3xl font-semibold text-foreground">{s.k}</div>
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative reveal" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-square">
              <div className="absolute inset-8 rounded-full bg-primary/20 blur-3xl" />
              <img
                src={orb}
                alt="Iridescent depth orb"
                width={1024}
                height={1024}
                className="relative w-full h-full object-contain float-slow drop-shadow-[0_40px_80px_rgba(34,211,238,0.35)]"
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass rounded-2xl px-5 py-3 flex items-center gap-3 whitespace-nowrap">
                <span className="ripple relative flex h-2 w-2 rounded-full bg-primary" />
                <span className="text-xs font-medium">Currently 1,200m below the surface</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 inset-x-0 border-t border-border bg-background/60 backdrop-blur-md py-5 overflow-hidden">
        <div className="flex marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 pr-12 shrink-0">
              {["Product strategy", "AI engineering", "Design systems", "Cloud platforms", "Web apps", "Mobile", "Growth", "Audits"].map((t) => (
                <span key={t} className="display text-xl md:text-2xl text-muted-foreground/60 tracking-tight">
                  {t} <span className="text-primary">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
