import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HeroIllustration from "./HeroIllustration";
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

const headlineWords = ["We", "build", "the", "software", "that", "defines", "your"];

const Hero = () => {
  return (
    <section
      className="relative bg-background pt-[88px] min-h-screen flex items-center overflow-hidden"
    >
      {/* dot grid */}
      <div className="absolute inset-0 dot-grid opacity-[0.5] pointer-events-none" style={{ opacity: 0.4 }} />
      {/* soft top-right wash */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 70% 20%, hsl(var(--accent-blue-tint) / 0.55) 0%, transparent 60%)",
        }}
      />

      <div className="container-tight relative w-full py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="label-eyebrow mb-6">For founders & operators who refuse average</div>

            <h1 className="display font-bold tracking-tight leading-[1.05] text-[34px] md:text-[42px] lg:text-[68px] mb-6 word-rise">
              {headlineWords.map((w, i) => (
                <span key={i} style={{ animationDelay: `${i * 60}ms` }}>{w}&nbsp;</span>
              ))}
              <span className="block">
                <span style={{ animationDelay: `${headlineWords.length * 60}ms` }}>
                  <span style={{ color: "hsl(var(--accent-blue))" }}>next chapter</span>.
                </span>
              </span>
            </h1>

            <p className="text-base md:text-[20px] text-muted-foreground max-w-[520px] leading-[1.7] mb-10">
              CodersDive is a premium software agency for founders, executives, and operators who want industry-leading products — built fast, without compromise.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-14">
              <Link to="/contact" className="btn-primary group">
                Start a Project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/portfolio" className="btn-secondary group">
                See Our Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 max-w-2xl">
              <Stat n={120} label="Products Shipped" />
              <div className="hidden md:block w-px bg-border h-12 self-center -mx-2" aria-hidden />
              <Stat n={48} suffix="M+" label="Value Unlocked ($)" />
              <Stat n={6} suffix="-Wk" label="Avg. Delivery" />
              <Stat n={22} label="Awards" />
            </div>
          </div>

          <div className="lg:col-span-5 hidden md:block">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
