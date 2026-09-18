import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Star, Zap } from "lucide-react";
import macbook from "@/assets/mockup-macbook.webp";
import iphone from "@/assets/mockup-iphone.webp";

const headlineWords = ["We", "build", "AI-powered", "software"];

const Hero = () => {
  return (
    <section className="relative bg-mesh pt-[104px] pb-12 md:pb-16 flex items-center overflow-hidden grain">
      {/* layered background */}
      <div className="absolute inset-0 grid-lines pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-[0.35] pointer-events-none" />
      {/* drifting blobs */}
      <div className="blob -top-32 -right-32 w-[700px] h-[700px]" style={{ background: "hsl(var(--accent-blue) / 0.28)" }} />
      <div className="blob -bottom-40 -left-40 w-[600px] h-[600px]" style={{ background: "hsl(var(--accent-blue-tint))", animationDelay: "-8s" }} />
      <div className="blob top-1/3 left-1/2 w-[500px] h-[500px]" style={{ background: "hsl(280 80% 80% / 0.18)", animationDelay: "-14s" }} />

      <div className="container-tight relative w-full py-6 md:py-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            {/* trust badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm mb-5 animate-fade-in">
              <span className="flex items-center gap-0.5">
                {[0,1,2,3,4].map(i => <Star key={i} className="w-3.5 h-3.5 fill-accent-blue-ink text-accent-blue-ink" />)}
              </span>
              <span className="text-xs font-semibold text-foreground">Trusted by 120+ founders worldwide</span>
            </div>

            <h1 className="display font-bold tracking-tight leading-[1.08] text-[34px] md:text-[46px] lg:text-[60px] mb-5 word-rise">
              {headlineWords.map((w, i) => (
                <span key={i} style={{ animationDelay: `${i * 60}ms` }}>{w}&nbsp;</span>
              ))}
              <span className="block">
                <span style={{ animationDelay: `${headlineWords.length * 60}ms` }}>that eliminates</span>{" "}
                <span className="squiggle" style={{ animationDelay: `${(headlineWords.length + 1) * 60}ms`, color: "hsl(var(--accent-blue-ink))" }}>
                  manual work.
                </span>
              </span>
            </h1>

            <p className="text-base md:text-[19px] text-muted-foreground max-w-[540px] leading-[1.6] mb-7">
              We design and ship AI systems and custom software that take repetitive work out of sales, operations and support, so your team spends time on the decisions instead.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link to="/start-a-project" className="btn-primary btn-shine group" style={{ height: 56, padding: "0 28px", fontSize: "15px" }}>
                <Sparkles className="w-4 h-4" />
                Get a Free Automation Audit
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/portfolio" className="btn-secondary group" style={{ height: 56, padding: "0 28px", fontSize: "15px" }}>
                View Our Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Mockup composition */}
          <div className="lg:col-span-5 relative hidden md:block w-full aspect-[4/3] lg:aspect-square">
            {/* Glow halo behind device */}
            <div
              className="absolute inset-4 sm:inset-8 rounded-[40px] pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 40%, hsl(var(--accent-blue) / 0.35), transparent 65%)",
                filter: "blur(40px)",
              }}
            />

            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="float-slow relative w-full max-w-[640px]">
                <img
                  src={macbook}
                  alt="CodersDive product on MacBook"
                  width={1280}
                  height={960}
                  className="w-full h-auto drop-shadow-[0_40px_60px_rgba(10,10,10,0.25)]"
                />
              </div>
            </div>
            <div className="absolute bottom-0 right-0 lg:-right-2 w-[36%] sm:w-[40%] lg:w-[44%] float-med z-20">
              <img
                src={iphone}
                alt="CodersDive product on iPhone"
                width={800}
                height={1024}
                className="w-full h-auto drop-shadow-[0_40px_60px_rgba(10,10,10,0.28)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
