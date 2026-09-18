import { useState } from "react";
import Reveal from "./Reveal";

const tabs: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "Vue 3", "Tailwind CSS", "Framer Motion", "TypeScript"],
  Backend: ["Node.js", "Python", "Go", "FastAPI", "Django", "GraphQL", "REST"],
  Mobile: ["Swift", "Kotlin", "React Native", "Flutter", "Expo"],
  "AI / ML": ["OpenAI GPT-4o", "Anthropic Claude", "LangChain", "Pinecone", "Hugging Face", "RAG"],
  Cloud: ["AWS", "GCP", "Vercel", "Terraform", "Docker", "Kubernetes", "GitHub Actions"],
  Design: ["Figma", "Framer", "Storybook", "Lottie", "Principle"],
};

const TechStack = () => {
  const [active, setActive] = useState<string>("Frontend");
  const keys = Object.keys(tabs);

  return (
    <Reveal as="section" className="bg-background section">
      <div className="container-tight">
        <div className="max-w-3xl mb-12 reveal-child">
          <div className="label-eyebrow mb-6">Our Stack</div>
          <h2 className="display text-[28px] md:text-[36px] lg:text-[48px] font-bold leading-[1.1] mb-5">
            Pressure-tested tools for the ambitious.
          </h2>
          <p className="text-muted-foreground leading-[1.7]">We don't chase trends. We use what delivers.</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10 reveal-child">
          {keys.map((k) => (
            <button
              key={k}
              onClick={() => setActive(k)}
              className={`px-5 h-10 rounded-lg border text-sm font-medium transition-all ${
                active === k
                  ? "bg-foreground text-background border-foreground"
                  : "bg-card text-foreground border-border hover:border-foreground/40"
              }`}
            >
              {k}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 reveal-child">
          {tabs[active].map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-2 px-5 h-11 rounded-full bg-card border border-border text-sm font-medium text-foreground hover:border-[hsl(var(--accent-blue))] hover:text-accent-blue transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
};

export default TechStack;
