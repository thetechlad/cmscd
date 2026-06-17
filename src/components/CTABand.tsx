import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

const CAL_URL = "https://cal.com/tayyabirfan/15min";

const CTABand = () => (
  <Reveal as="section" className="relative section overflow-hidden">
    <div className="absolute inset-0 bg-mesh" />
    <div className="absolute inset-0 grid-lines pointer-events-none" />
    <div className="container-tight relative">
      <div className="reveal-child relative rounded-3xl overflow-hidden border border-border bg-foreground text-background p-10 md:p-16 glow-ring">
        {/* internal glow */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
             style={{ background: "radial-gradient(circle, hsl(var(--accent-blue) / 0.55), transparent 65%)", filter: "blur(20px)" }} />
        <div className="absolute inset-0 dot-grid-strong opacity-[0.08] pointer-events-none" />

        <div className="relative grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-accent-blue" />
              <span className="text-[11px] uppercase tracking-[0.15em] text-white/80 font-semibold">Booking Q3 · 2 slots left</span>
            </div>
            <h2 className="display text-[32px] md:text-[44px] lg:text-[56px] font-bold leading-[1.05] mb-5 text-white">
              Ready to ship the product <br className="hidden md:block" />
              <span style={{ color: "hsl(var(--accent-blue))" }}>that defines your category?</span>
            </h2>
            <p className="text-white/65 leading-[1.7] max-w-xl text-base md:text-lg">
              30-minute strategy call. No pitch. We'll map out scope, timeline and budget so you know exactly what shipping with us looks like.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <Link to="/contact" className="btn-shine group inline-flex items-center justify-center gap-2 h-14 px-7 rounded-full font-semibold text-sm text-white hover:scale-[1.03] transition-transform"
                  style={{ background: "hsl(var(--accent-blue))", boxShadow: "0 20px 40px -10px hsl(var(--accent-blue) / 0.5)" }}>
              Start a Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href={CAL_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-full font-semibold text-sm text-white border border-white/20 hover:bg-white hover:text-foreground hover:scale-[1.03] transition-all">
              <Calendar className="w-4 h-4" />
              Book a Call
            </a>
            <div className="text-center text-xs text-white/50 mt-1">Reply within 4 hours · Mon–Fri</div>
          </div>
        </div>
      </div>
    </div>
  </Reveal>
);

export default CTABand;