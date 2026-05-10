const stack = [
  "TypeScript", "React", "Next.js", "Node.js", "Python", "PostgreSQL",
  "Supabase", "AWS", "Vercel", "Stripe", "OpenAI", "Anthropic",
  "React Native", "Flutter", "Tailwind", "Figma", "Docker", "Terraform",
];

const TechStack = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 dot-bg-dense opacity-30" />
      <div className="container-tight relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Our Gear</div>
          <h2 className="display text-4xl md:text-5xl font-semibold leading-tight">
            Pressure-tested<br />tools for the <span className="text-gradient">deep.</span>
          </h2>
          <p className="text-muted-foreground mt-5">
            A deliberately small, battle-hardened stack. Less novelty, more shipping.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {stack.map((t) => (
            <span
              key={t}
              className="px-5 py-2.5 rounded-full glass text-sm font-medium text-foreground/90 hover:text-primary hover:border-primary/40 transition-all cursor-default"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
