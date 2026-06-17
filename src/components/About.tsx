import { Search, Zap, ShieldCheck, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";

const cards = [
  { icon: Search, title: "Deep Core Benefit", body: "We don't take on 30 clients at once. We go deep — understanding your business, your users, and your edge — before writing a single line of code." },
  { icon: Zap, title: "Speed Without Chaos", body: "We run tight, async sprints. Weekly demos. No surprises. You always know exactly where things stand." },
  { icon: ShieldCheck, title: "Full Ownership", body: "From Figma to deployment, we own the full path. No handoffs. No finger-pointing. No 'that's not our part.'" },
  { icon: TrendingUp, title: "Built to Scale", body: "Our systems are built to grow. Whether you're at 100 users or 1 million, we design for what's next." },
];

const About = () => (
  <Reveal as="section" className="bg-background section">
    <div className="container-tight">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="reveal-child">
          <div className="label-eyebrow mb-6">Our Philosophy</div>
          <h2 className="display text-[28px] md:text-[36px] lg:text-[48px] font-bold leading-[1.1] mb-8">
            A small team with <span style={{ fontStyle: "italic", color: "hsl(var(--accent-blue))" }}>an unfair</span> output.
          </h2>
          <p className="text-muted-foreground leading-[1.7] mb-5">
            We're not a 500-person chop shop that assigns your project to a junior in month three. CodersDive is a curated crew of senior engineers and product designers who have shipped real products for real markets.
          </p>
          <p className="text-muted-foreground leading-[1.7]">
            We partner with founders and product leaders who are building something worth building — and who need a team that treats their deadline as their own.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="reveal-child card-light p-6 group">
              <div className="w-11 h-11 rounded-lg bg-background-soft border border-border flex items-center justify-center mb-5 group-hover:bg-[hsl(var(--accent-blue-soft))] group-hover:border-[hsl(var(--accent-blue))]/30 transition-colors">
                <c.icon className="w-5 h-5 text-foreground group-hover:text-accent-blue transition-colors" />
              </div>
              <h3 className="display text-base font-bold mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-[1.7]">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Reveal>
);

export default About;
