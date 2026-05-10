import { Monitor, Cpu, Smartphone, Server, PenTool, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

const services = [
  { icon: Monitor, title: "Web Apps & SaaS", desc: "Complex web applications, from authentication to multi-tenant architectures. We build for real load.", tags: ["React", "Next.js", "Node.js", "PostgreSQL"] },
  { icon: Cpu, title: "AI Engineering", desc: "LLM integration, fine-tuning, RAG pipelines. We make your product genuinely intelligent.", tags: ["OpenAI", "LangChain", "Python", "Vector DBs"] },
  { icon: Smartphone, title: "Mobile Products", desc: "Native iOS and Android apps. Always performant. Always polished.", tags: ["Swift", "Kotlin", "React Native", "Flutter"] },
  { icon: Server, title: "Cloud & DevOps", desc: "AWS, GCP, and Azure infrastructure designed for resilience.", tags: ["AWS", "Terraform", "Docker", "GitHub Actions"] },
  { icon: PenTool, title: "Product Design", desc: "UX research, wireframing, and pixel-perfect UI. Designed with conversion and delight as equal goals.", tags: ["Figma", "Framer", "Storybook", "Design Systems"] },
  { icon: TrendingUp, title: "Growth Engineering", desc: "Analytics, A/B testing, SEO-first architecture. We build for metrics, not just milestones.", tags: ["Analytics", "SEO", "Optimizely", "Core Web Vitals"] },
];

const Services = () => (
  <Reveal as="section" className="relative bg-mesh-soft section overflow-hidden">
    <div className="absolute inset-0 grid-lines pointer-events-none" />
    <div className="container-tight relative">
      <div className="max-w-3xl mb-16 reveal-child">
        <div className="label-eyebrow mb-6">Capabilities</div>
        <h2 className="display text-[28px] md:text-[36px] lg:text-[48px] font-bold leading-[1.1] mb-5">
          Every layer of your product, handled.
        </h2>
        <p className="text-muted-foreground leading-[1.7] max-w-xl">
          From the first line of code to the infrastructure that keeps it running — we do it all, under one roof.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="reveal-child card-light p-8 group">
            <div className="w-11 h-11 rounded-lg bg-background-soft border border-border flex items-center justify-center mb-5 group-hover:bg-[hsl(var(--accent-blue-soft))] group-hover:border-[hsl(var(--accent-blue))]/30 transition-colors">
              <s.icon className="w-5 h-5 text-foreground group-hover:text-accent-blue transition-colors" />
            </div>
            <h3 className="display text-lg font-bold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-[1.7] mb-5 min-h-[44px]">{s.desc}</p>
            <div className="flex flex-wrap gap-2">
              {s.tags.map((t) => (<span key={t} className="tag-pill">{t}</span>))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4 reveal-child">
        <p className="text-muted-foreground">Not sure where to start?</p>
        <Link to="/contact" className="link-blue text-base">
          Book a Free Strategy Call <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </Reveal>
);

export default Services;
