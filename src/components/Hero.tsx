import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import heroDashboard from "@/assets/uploads/codersdive-hero-dashboard.png.asset.json";
import laptopPhone from "@/assets/uploads/codersdive-laptop-phone.png.asset.json";

const headlineWords = ["We", "ship", "the", "software", "that"];

const proofPoints = [
  "Product design and engineering under one roof",
  "Built for founders, operators and technical teams",
  "Launch-ready systems across web, mobile and AI",
];

const Hero = () => {
  return (
    <section className="relative bg-mesh pt-[104px] pb-12 md:pb-16 flex items-center overflow-hidden grain">
      <div className="absolute inset-0 grid-lines pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-[0.35] pointer-events-none" />
      <div className="blob -top-32 -right-32 w-[700px] h-[700px]" style={{ background: "hsl(var(--accent-blue) / 0.22)" }} />
      <div className="blob -bottom-40 -left-40 w-[600px] h-[600px]" style={{ background: "hsl(var(--accent-blue-tint))", animationDelay: "-8s" }} />

      <div className="container-tight relative w-full py-6 md:py-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-border shadow-sm mb-5 animate-fade-in">
              <span className="flex items-center gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-accent-blue text-accent-blue" />
                ))}
              </span>
              <span className="text-xs font-semibold text-foreground">Built for premium product teams</span>
            </div>

            <h1 className="display font-bold tracking-tight leading-[1.02] text-[42px] md:text-[58px] lg:text-[76px] mb-5 word-rise">
              {headlineWords.map((w, i) => (
                <span key={i} style={{ animationDelay: `${i * 60}ms` }}>
                  {w}&nbsp;
                </span>
              ))}
              <span className="block">
                <span
                  className="squiggle"
                  style={{ animationDelay: `${headlineWords.length * 60}ms`, color: "hsl(var(--accent-blue))" }}
                >
                  defines
                </span>{" "}
                <span style={{ animationDelay: `${(headlineWords.length + 1) * 60}ms` }}>your category.</span>
              </span>
            </h1>

            <p className="text-base md:text-[19px] text-muted-foreground max-w-[560px] leading-[1.65] mb-7">
              CodersDive is a premium software studio for founders, executives and operators who need credible product visuals,
              sharp UX and production-grade engineering in one focused partner.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-7">
              <Link to="/start-a-project" className="btn-primary btn-shine group" style={{ height: 56, padding: "0 28px", fontSize: "15px" }}>
                <Sparkles className="w-4 h-4" />
                Start a Project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/portfolio" className="btn-secondary group" style={{ height: 56, padding: "0 28px", fontSize: "15px" }}>
                See Our Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid gap-3 max-w-[560px]">
              {proofPoints.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl bg-white/72 backdrop-blur-sm border border-border px-4 py-3">
                  <span className="mt-1 w-2.5 h-2.5 rounded-full bg-accent-blue shrink-0" />
                  <span className="text-sm text-foreground/80 leading-[1.55]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 relative w-full">
            <div className="relative mx-auto max-w-[860px]">
              <div
                className="absolute inset-[8%] rounded-[40px] pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 50% 40%, hsl(var(--accent-blue) / 0.22), transparent 70%)",
                  filter: "blur(44px)",
                }}
              />

              <div className="relative rounded-[28px] border border-border/80 bg-white/65 backdrop-blur-md p-3 sm:p-4 shadow-[0_30px_90px_-30px_rgba(0,0,0,0.18)] glow-ring">
                <div className="overflow-hidden rounded-[22px] bg-background aspect-[16/10]">
                  <img
                    src={heroDashboard.url}
                    alt="CodersDive dashboard interface across desktop, tablet, and mobile"
                    loading="eager"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="hidden md:block absolute -left-[4%] bottom-[8%] w-[32%] max-w-[240px] float-med z-20">
                <div className="rounded-[24px] border border-border bg-white/92 p-2 shadow-[0_24px_60px_-26px_rgba(0,0,0,0.26)]">
                  <img
                    src={laptopPhone.url}
                    alt="CodersDive responsive product system on laptop and phone"
                    loading="lazy"
                    className="w-full h-auto rounded-[18px]"
                  />
                </div>
              </div>

              <div className="hidden md:block absolute -right-[2%] top-[8%] w-[28%] max-w-[220px] float-slow z-20">
                <div className="rounded-[24px] border border-border bg-white/90 p-4 shadow-[0_24px_60px_-26px_rgba(0,0,0,0.22)]">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-blue mb-2">Designed to convert</div>
                  <div className="display text-[28px] leading-none mb-2">Web. Mobile. AI.</div>
                  <p className="text-xs text-muted-foreground leading-[1.55]">
                    Premium interfaces with real depth, clean systems and crisp implementation details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
