import { projects } from "@/data/projects";

// Show real client logos (marks pulled from each brand).
const clients = projects.map((p) => ({ name: p.name, logo: p.logo, url: p.url }));

const LogoStrip = () => {
  return (
    <section className="bg-background-soft border-y border-border py-16">
      <div className="container-tight">
        <p className="text-center text-muted-soft italic text-sm mb-10">
          Building alongside ambitious teams
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-9 gap-x-4 gap-y-8 items-center">
          {clients.map((c) => (
            <a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noreferrer"
              aria-label={c.name}
              title={c.name}
              className="group flex flex-col items-center gap-2.5"
            >
              <img
                src={c.logo}
                alt={`${c.name} logo`}
                loading="lazy"
                className="h-9 w-9 md:h-10 md:w-10 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
              />
              <span className="text-center text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground/70 group-hover:text-foreground transition-colors">
                {c.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
