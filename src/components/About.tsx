import { Compass, Layers, Zap, ShieldCheck } from "lucide-react";
import blob from "@/assets/blob-2.jpg";

const principles = [
  { icon: Compass, title: "Depth over breadth", body: "We don't skim ten problems — we dive into the one that moves your metric. Focus is the multiplier." },
  { icon: Layers, title: "Senior-only divers", body: "Every engagement is led by senior product engineers. No juniors learning on your oxygen budget." },
  { icon: Zap, title: "Surface in weeks", body: "Tight scopes, weekly demos, real software in your hands. Velocity is the feature." },
  { icon: ShieldCheck, title: "Pressure-tested craft", body: "Production-hardened code, observability and security engineered for the deep — from day one." },
];

const About = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-60" />
      <div className="glow-orb w-[600px] h-[600px] top-1/2 -left-60 -translate-y-1/2 bg-accent/20" />

      <div className="container-tight relative">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-square max-w-md">
              <div className="absolute inset-12 rounded-full bg-accent/20 blur-3xl" />
              <img src={blob} alt="Depth form" width={1024} height={1024} loading="lazy" className="relative w-full h-full object-contain float-slow" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">The Studio</div>
            <h2 className="display text-4xl md:text-5xl font-semibold leading-tight mb-6">
              A small crew<br />built for the <span className="text-gradient">deep end.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              We're a tight crew of product engineers, designers and architects who partner with founders and product leaders to descend into ambiguous problems and resurface with software that earns its keep. No bloated retainers. No proxy PMs. Just senior people doing exceptional work.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {principles.map((p) => (
                <div key={p.title} className="card-elev">
                  <p.icon className="w-5 h-5 text-primary mb-3" />
                  <h3 className="font-semibold mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
