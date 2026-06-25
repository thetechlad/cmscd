import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import SeoHead from "@/components/site/SeoHead";
import Reveal from "@/components/site/Reveal";
import CTABand from "@/components/site/CTABand";
import { SERVICES_GROUPS } from "@/content/navigation";
import { CASES } from "@/content/cases";
import { ARTICLES } from "@/content/insights";
import { ENGAGEMENTS } from "@/content/engagements";

const PROCESS = [
  { n: "01", title: "Discover", body: "Business goal, users, current workflows, constraints, risks, and evidence." },
  { n: "02", title: "Define", body: "Outcome, scope, architecture direction, release plan, and decision owners." },
  { n: "03", title: "Design", body: "User flows, prototypes, visual system, edge states, and usability feedback." },
  { n: "04", title: "Engineer", body: "Incremental implementation, reviews, automated checks, demos, and documentation." },
  { n: "05", title: "Launch", body: "Production configuration, migration, analytics, monitoring, and training." },
  { n: "06", title: "Improve", body: "Behaviour data, support signals, technical health, and roadmap iteration." },
];

const PROOF = [
  { v: "Your code.", k: "Your IP, always." },
  { v: "Senior pods.", k: "Fewer handoffs, faster decisions." },
  { v: "AI-assisted.", k: "Human-accountable." },
  { v: "Built for", k: "Real operations." },
];

const featured = CASES.find((c) => c.featured) ?? CASES[0];
const others = CASES.filter((c) => c !== featured).slice(0, 4);

export default function Home() {
  return (
    <>
      <SeoHead
        title="CodersDive | Engineering software that compounds revenue"
        description="Elite product engineering for ambitious teams. We design, build, modernize, and scale reliable AI, SaaS, web, mobile, and platform software."
        path="/"
        jsonLd={{ "@context": "https://schema.org", "@type": "Organization", name: "CodersDive", url: "https://codersdive.com", email: "hello@codersdive.com", description: "Engineering software that compounds revenue." }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-hairline opacity-60" aria-hidden />
        <div className="container-cd relative pt-16 md:pt-28 pb-24 md:pb-36 grid grid-cols-12 gap-10 items-end">
          <Reveal className="col-span-12 lg:col-span-8" stagger>
            <p className="eyebrow">Product engineering studio</p>
            <h1 className="display-1 mt-8">
              Engineering software<br/>that <em className="not-italic text-aqua">compounds</em> revenue.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-foreground/70 max-w-2xl">
              CodersDive is the product engineering studio for ambitious teams. We design, build, modernize, and scale AI-powered software, SaaS platforms, web applications, mobile products, and internal systems — without the drag of bloated process or fragile shortcuts.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/start-a-project" className="btn btn-primary">Start a project <ArrowUpRight className="w-4 h-4" /></Link>
              <Link to="/work" className="btn btn-ghost">Explore our work</Link>
            </div>
            <p className="mt-8 mono text-foreground/45">Strategy · Design · Engineering · AI · Cloud · Continuous improvement</p>
          </Reveal>

          <Reveal className="col-span-12 lg:col-span-4 hidden lg:block">
            <div className="relative aspect-[4/5] rounded-2xl border border-foreground/10 bg-graphite overflow-hidden p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,hsl(var(--aqua)/0.18),transparent_55%)]" aria-hidden />
              <div className="absolute top-4 left-4 mono text-foreground/45">/ system</div>
              <div className="absolute inset-x-6 top-16 space-y-2">
                {["users · channels", "application", "services · workflows", "data · retrieval", "model layer", "observability"].map((row, i) => (
                  <div key={row} className="flex items-center gap-3 py-2 border-t border-foreground/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-aqua/80" />
                    <span className="text-sm text-foreground/80">{row}</span>
                    <span className="ml-auto mono text-foreground/40">0{i+1}</span>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-6 left-6 right-6 pt-4 border-t border-foreground/10">
                <p className="mono text-foreground/45">/ flow · realtime</p>
                <svg viewBox="0 0 200 40" className="w-full h-10 mt-2" aria-hidden>
                  <path d="M0 30 Q 40 5, 80 22 T 160 18 T 200 12" stroke="hsl(var(--aqua))" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Proof strip */}
        <Reveal className="border-y border-foreground/10">
          <div className="container-cd grid grid-cols-2 md:grid-cols-4">
            {PROOF.map((p) => (
              <div key={p.k} className="py-8 px-2 md:px-6 border-l first:border-l-0 border-foreground/10">
                <p className="font-serif text-2xl md:text-3xl leading-tight">{p.v}</p>
                <p className="mono text-foreground/50 mt-2">{p.k}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* POSITIONING */}
      <section className="section">
        <div className="container-cd grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-4">
            <p className="section-number">/ 01</p>
            <p className="eyebrow mt-3">Positioning</p>
          </div>
          <Reveal className="col-span-12 md:col-span-8" stagger>
            <h2 className="display-2">Not an order-taking dev shop. A product team that thinks with you.</h2>
            <p className="mt-6 text-lg text-foreground/70 max-w-2xl">Good software is not a pile of features. It is a clear business decision expressed through workflows, interfaces, data, and reliable engineering. We challenge weak assumptions early, define the smallest valuable release, and build foundations that can survive growth.</p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {["Clarify the problem before writing code.", "Design around user decisions, not stakeholder wish lists.", "Use AI where it creates leverage — not where it creates risk theatre.", "Ship in visible increments with clear ownership."].map((l) => (
                <li key={l} className="flex gap-3 text-foreground/85"><span className="rule-aqua mt-3 shrink-0" /> <span>{l}</span></li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* SERVICE FAMILIES */}
      <section className="section border-t border-foreground/10">
        <div className="container-cd">
          <div className="grid grid-cols-12 gap-10 mb-14">
            <div className="col-span-12 md:col-span-4">
              <p className="section-number">/ 02</p>
              <p className="eyebrow mt-3">Services</p>
            </div>
            <div className="col-span-12 md:col-span-8">
              <h2 className="display-2">From a focused proof of concept to a long-term product partnership.</h2>
            </div>
          </div>
          <Reveal stagger className="grid grid-cols-12 gap-6">
            {SERVICES_GROUPS.map((g, i) => (
              <article key={g.title} className={`card-cd p-7 md:p-9 ${i === 0 ? "col-span-12 md:col-span-7" : i === 1 ? "col-span-12 md:col-span-5" : i === 2 ? "col-span-12 md:col-span-4" : i === 3 ? "col-span-12 md:col-span-4" : "col-span-12 md:col-span-4"}`}>
                <div className="flex items-start justify-between mb-5">
                  <p className="mono text-aqua">{`0${i+1}`}</p>
                  <span className="w-8 h-8 rounded-full border border-foreground/20 grid place-items-center"><ArrowUpRight className="w-4 h-4" /></span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl leading-tight mb-4">{g.title}</h3>
                <ul className="space-y-2 mb-5">
                  {g.links.slice(0, 4).map((l) => (
                    <li key={l.href}><Link to={l.href} className="text-sm text-foreground/80 hover:text-aqua">{l.label}</Link></li>
                  ))}
                </ul>
                <Link to="/services" className="btn-link inline-flex items-center gap-2 mt-2">All services <ArrowRight className="w-3.5 h-3.5" /></Link>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="section border-t border-foreground/10">
        <div className="container-cd">
          <div className="grid grid-cols-12 gap-10 mb-14">
            <div className="col-span-12 md:col-span-5">
              <p className="section-number">/ 03</p>
              <p className="eyebrow mt-3">Featured work</p>
              <h2 className="display-2 mt-5">Products built around an operational truth.</h2>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-16">
              <p className="text-foreground/65 max-w-xl">Each project below is labelled honestly: client engagement, product concept, or internal venture. Outcome metrics are published only after verification.</p>
              <Link to="/work" className="btn-link inline-flex mt-6">See all work →</Link>
            </div>
          </div>

          <Reveal stagger className="grid grid-cols-12 gap-6">
            <Link to={`/work/${featured.slug}`} className="col-span-12 lg:col-span-8 card-cd p-8 group">
              <p className="mono text-aqua">{featured.label} · {featured.type}</p>
              <h3 className="font-serif text-3xl md:text-5xl mt-5 leading-tight">{featured.client}</h3>
              <p className="mt-5 text-foreground/70 max-w-xl">{featured.problem}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {featured.tech.slice(0, 5).map((t) => <span key={t} className="mono px-2.5 py-1 border border-foreground/15 rounded-full">{t}</span>)}
              </div>
              <p className="mt-8 mono text-foreground/45">{featured.outcomeNote}</p>
            </Link>
            <div className="col-span-12 lg:col-span-4 grid grid-cols-1 gap-6">
              {others.slice(0, 2).map((c) => (
                <Link key={c.slug} to={`/work/${c.slug}`} className="card-cd p-6 group">
                  <p className="mono text-aqua">{c.label}</p>
                  <h4 className="font-serif text-2xl mt-3">{c.client}</h4>
                  <p className="text-sm text-foreground/65 mt-2 line-clamp-2">{c.problem}</p>
                </Link>
              ))}
            </div>
            {others.slice(2, 4).map((c) => (
              <Link key={c.slug} to={`/work/${c.slug}`} className="col-span-12 md:col-span-6 card-cd p-6">
                <p className="mono text-aqua">{c.label} · {c.type}</p>
                <h4 className="font-serif text-2xl mt-3">{c.client}</h4>
                <p className="text-sm text-foreground/65 mt-2">{c.problem}</p>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* AI-FIRST CONTRAST */}
      <section className="section on-light bg-mist text-foreground border-t border-foreground/10">
        <div className="container-cd">
          <div className="grid grid-cols-12 gap-10 mb-12">
            <div className="col-span-12 md:col-span-4">
              <p className="section-number">/ 04</p>
              <p className="eyebrow mt-3">AI-First Engineering</p>
            </div>
            <div className="col-span-12 md:col-span-8">
              <h2 className="display-2">AI accelerates the work. Humans remain accountable for the outcome.</h2>
            </div>
          </div>
          <Reveal stagger className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-6">
              <p className="mono text-foreground/50 mb-4">/ Where AI accelerates</p>
              <ul className="space-y-3 text-foreground/85">
                {["Drafting and review of routine code", "Documentation and test scaffolding", "Knowledge retrieval and summarisation", "Repeated workflow automation"].map((l) => <li key={l} className="flex gap-3"><span className="rule-aqua mt-3 shrink-0" /> <span>{l}</span></li>)}
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6">
              <p className="mono text-foreground/50 mb-4">/ Where humans remain accountable</p>
              <ul className="space-y-3 text-foreground/85">
                {["Architecture and security decisions", "Product framing and trade-offs", "Customer-facing communication", "Final code review and release"].map((l) => <li key={l} className="flex gap-3"><span className="rule-aqua mt-3 shrink-0" /> <span>{l}</span></li>)}
              </ul>
            </div>
          </Reveal>
          <div className="mt-10">
            <Link to="/ai-first" className="btn-link">Read our AI-first approach →</Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section border-t border-foreground/10">
        <div className="container-cd">
          <div className="grid grid-cols-12 gap-10 mb-14">
            <div className="col-span-12 md:col-span-5">
              <p className="section-number">/ 05</p>
              <p className="eyebrow mt-3">How we work</p>
              <h2 className="display-2 mt-5">A delivery process designed to reduce expensive surprises.</h2>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-16 text-foreground/65">
              We do not hide uncertainty behind long proposals or pretend every decision can be made on day one. We expose risk early, work in visible increments, and keep product, design, and engineering connected throughout delivery.
            </div>
          </div>
          <Reveal stagger className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-px bg-foreground/10 border border-foreground/10 rounded-2xl overflow-hidden">
            {PROCESS.map((p) => (
              <div key={p.n} className="bg-ink p-6 md:p-7 min-h-[200px] flex flex-col">
                <p className="mono text-aqua">{p.n}</p>
                <h3 className="font-serif text-2xl mt-4">{p.title}</h3>
                <p className="text-sm text-foreground/65 mt-3">{p.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ENGAGEMENT PREVIEW */}
      <section className="section border-t border-foreground/10">
        <div className="container-cd">
          <div className="grid grid-cols-12 gap-10 mb-12">
            <div className="col-span-12 md:col-span-5">
              <p className="section-number">/ 06</p>
              <p className="eyebrow mt-3">Engagement models</p>
              <h2 className="display-2 mt-5">Start with the model that protects the decision you need to make next.</h2>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-16 text-foreground/65">
              From discovery to a dedicated product team — five ways to work with us, with explicit guidance on when each does and does not fit.
              <div className="mt-6"><Link to="/engagement-models" className="btn-link">Compare engagement models →</Link></div>
            </div>
          </div>
          <Reveal stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {ENGAGEMENTS.map((e) => (
              <div key={e.name} className="card-cd p-6 flex flex-col">
                <p className="mono text-aqua">{e.name}</p>
                <p className="text-sm text-foreground/80 mt-4">{e.bestFor}</p>
                <p className="mt-auto pt-6 mono text-foreground/45">{e.team}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* INSIGHT FEATURE */}
      <section className="section border-t border-foreground/10">
        <div className="container-cd grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <p className="section-number">/ 07</p>
            <p className="eyebrow mt-3">Insights</p>
            <h2 className="display-2 mt-5">Useful thinking for teams building software.</h2>
            <p className="mt-5 text-foreground/65 max-w-md">No trend-chasing. No vague transformation language. Practical guidance on product decisions, AI, engineering, design, and scaling.</p>
            <Link to="/insights" className="btn-link inline-flex mt-6">Read insights →</Link>
          </div>
          <Reveal stagger className="col-span-12 md:col-span-7 space-y-px bg-foreground/10 border border-foreground/10 rounded-2xl overflow-hidden">
            {ARTICLES.slice(0, 3).map((a) => (
              <Link key={a.slug} to={`/insights/${a.category}/${a.slug}`} className="block bg-ink p-6 md:p-8 hover:bg-graphite transition-colors">
                <div className="flex items-center gap-3 mono text-foreground/50">
                  <span className="text-aqua">{a.category.replace(/-/g, " ")}</span>
                  <span>· {a.readMins} min read</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl mt-3">{a.title}</h3>
                <p className="text-foreground/65 mt-2 line-clamp-2">{a.excerpt}</p>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <CTABand
        eyebrow="Bring us the messy version"
        title="A serious product deserves a serious build partner."
        body="Tell us what is slow, broken, unclear, or strategically important. We will help turn it into a sensible next step."
        primary={{ label: "Start a project", href: "/start-a-project" }}
        secondary={{ label: "Book a discovery call", href: "/contact" }}
      />
    </>
  );
}