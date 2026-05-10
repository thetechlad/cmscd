import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import macbook from "@/assets/mockup-macbook.jpg";
import iphone from "@/assets/mockup-iphone.jpg";
import { useReveal, useCountUp } from "@/hooks/useReveal";

const Stat = ({ n, suffix = "+", label }: { n: number; suffix?: string; label: string }) => {
  const { ref, visible } = useReveal<HTMLDivElement>(0.3);
  const v = useCountUp(n, visible, 1200);
  return (
    <div ref={ref} className="flex flex-col">
      <div className="display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
        {v.toLocaleString()}{suffix}
      </div>
      <div className="text-[13px] text-muted-soft mt-1">{label}</div>
    </div>
  );
};

const headlineWords = ["We", "ship", "the", "software", "that"];

const Hero = () => {
  return (
    <section className="relative bg-background pt-[120px] min-h-screen flex items-center overflow-hidden">
      {/* dot grid */}
      <div className="absolute inset-0 dot-grid opacity-[0.5] pointer-events-none" />
      {/* soft washes */}
      <div
        className="absolute -top-40 -right-40 w-[800px] h-[800px] pointer-events-none rounded-full"
        style={{ background: "radial-gradient(circle, hsl(var(--accent-blue-tint) / 0.7) 0%, transparent 65%)" }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] pointer-events-none rounded-full"
        style={{ background: "radial-gradient(circle, hsl(var(--accent-blue-soft)) 0%, transparent 70%)" }}
      />

      <div className="container-tight relative w-full py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            {/* trust badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-sm mb-8 animate-fade-in">
              <span className="flex items-center gap-0.5">
                {[0,1,2,3,4].map(i => <Star key={i} className="w-3.5 h-3.5 fill-accent-blue text-accent-blue" />)}
              </span>
              <span className="text-xs font-semibold text-foreground">Trusted by 120+ founders worldwide</span>
            </div>

            <h1 className="display font-bold tracking-tight leading-[1.02] text-[44px] md:text-[60px] lg:text-[84px] mb-7 word-rise">
              {headlineWords.map((w, i) => (
                <span key={i} style={{ animationDelay: `${i * 60}ms` }}>{w}&nbsp;</span>
              ))}
              <span className="block">
                <span style={{ animationDelay: `${headlineWords.length * 60}ms`, color: "hsl(var(--accent-blue))" }}>
                  defines
                </span>{" "}
                <span style={{ animationDelay: `${(headlineWords.length + 1) * 60}ms` }}>your category.</span>
              </span>
            </h1>

            <p className="text-base md:text-[19px] text-muted-foreground max-w-[540px] leading-[1.7] mb-10">
              CodersDive is a premium software studio for founders, executives and operators who want industry-leading products — engineered fast, without compromise.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-14">
              <Link to="/contact" className="btn-primary group" style={{ height: 56, padding: "0 28px", fontSize: "15px" }}>
                <Sparkles className="w-4 h-4" />
                Start a Project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/portfolio" className="btn-secondary group" style={{ height: 56, padding: "0 28px", fontSize: "15px" }}>
                See Our Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 max-w-2xl">
              <Stat n={120} label="Products Shipped" />
              <Stat n={48} suffix="M+" label="Value Unlocked ($)" />
              <Stat n={6} suffix="-Wk" label="Avg. Delivery" />
              <Stat n={22} label="Awards Won" />
            </div>
          </div>

          {/* Mockup composition */}
          <div className="lg:col-span-5 relative hidden md:block h-[560px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="float-slow relative w-full">
                <img
                  src={macbook}
                  alt="CodersDive product on MacBook"
                  width={1280}
                  height={960}
                  className="w-full rounded-2xl shadow-[0_40px_80px_-30px_rgba(37,99,235,0.4)]"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-2 lg:right-0 w-[55%] float-med">
              <img
                src={iphone}
                alt="CodersDive product on iPhone"
                width={800}
                height={1024}
                className="w-full drop-shadow-[0_30px_50px_rgba(0,0,0,0.18)]"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute top-4 -left-2 nav-pill px-4 py-2.5 flex items-center gap-2 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold">3 projects shipping this week</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
