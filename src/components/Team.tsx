import { Linkedin } from "lucide-react";
import Reveal from "./Reveal";
import founder from "@/assets/team-founder.jpg";
import cto from "@/assets/team-cto.jpg";

const people = [
  {
    name: "Tayyab Irfan",
    role: "Founder",
    photo: founder,
    line: "Runs every engagement end to end, from the first audit call to the production launch.",
    linkedin: "https://www.linkedin.com/in/tayyabirfan/",
  },
  {
    name: "Areeb Khan",
    role: "CTO",
    photo: cto,
    line: "Leads architecture, AI systems and engineering delivery across every product we ship.",
  },
];

const Team = () => (
  <Reveal as="section" className="bg-background section">
    <div className="container-tight">
      <div className="reveal-child mb-10">
        <div className="label-eyebrow mb-5">The Team</div>
        <h2 className="display text-[28px] md:text-[40px] lg:text-[48px] font-bold leading-[1.05]">
          The people behind CodersDive.
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {people.map((p) => (
          <div key={p.name} className="reveal-child card-light overflow-hidden group">
            <div className="aspect-[4/5] overflow-hidden bg-background-soft">
              <img
                src={p.photo}
                alt={`${p.name}, ${p.role} at CodersDive`}
                loading="lazy"
                width={816}
                height={816}
                className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
              />
            </div>
            <div className="p-6">
              <div className="display text-lg font-bold">{p.name}</div>
              <div className="text-xs uppercase tracking-[0.15em] font-semibold mb-3" style={{ color: "hsl(var(--accent-blue))" }}>
                {p.role}
              </div>
              <p className="text-sm text-muted-foreground leading-[1.7] mb-4">{p.line}</p>
              {p.linkedin && (
                <a
                  href={p.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="link-blue text-sm font-semibold"
                  aria-label={`${p.name} on LinkedIn`}
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </Reveal>
);

export default Team;
