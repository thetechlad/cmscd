import { Code2, Smartphone, Brain, Cloud, Palette, LineChart, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Code2, title: "Web Apps & SaaS", body: "Production-grade React, Next.js and TypeScript apps engineered for scale, speed and conversion at depth.", tags: ["Next.js", "React", "Node", "Postgres"] },
  { icon: Brain, title: "AI Engineering", body: "LLM products, retrieval pipelines and agents engineered to actually move metrics — not demo well.", tags: ["OpenAI", "Anthropic", "RAG", "Agents"] },
  { icon: Smartphone, title: "Mobile Products", body: "Cross-platform apps that feel native, ship faster and update without app-store friction.", tags: ["React Native", "Flutter", "iOS", "Android"] },
  { icon: Cloud, title: "Cloud & Platform", body: "Pragmatic infrastructure that scales under pressure. Boring where it matters, fast where it counts.", tags: ["AWS", "Vercel", "Supabase", "CI/CD"] },
  { icon: Palette, title: "Product Design", body: "Interface design and design systems that make complex products feel obvious — and obviously yours.", tags: ["Figma", "DS", "UX", "Brand"] },
  { icon: LineChart, title: "Growth Engineering", body: "Conversion-focused experiments, instrumentation and the rebuilds that the data demands.", tags: ["Analytics", "A/B", "CRO", "SEO"] },
];

const Services = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-50" />
      <div className="container-tight relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Capabilities</div>
            <h2 className="display text-4xl md:text-5xl font-semibold leading-tight max-w-2xl">
              Every layer<br />of your product, <span className="text-gradient">handled.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            From the first pixel to the production deploy, we own the messy middle — so your team stays focused on the business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div key={s.title} className="card-elev group relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-secondary border border-border flex items-center justify-center mb-5">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.body}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[11px] uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2.5 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-border p-10 md:p-14 bg-gradient-to-br from-secondary/40 to-transparent flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="display text-2xl md:text-3xl font-semibold mb-2">Not sure where the bottom is?</h3>
            <p className="text-muted-foreground max-w-lg">Book a free 30-minute dive call. We'll chart the fastest descent from where you are to a shippable product.</p>
          </div>
          <Link to="/contact" className="btn-primary group shrink-0">
            Book a free dive call
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
