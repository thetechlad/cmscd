import { Link } from "react-router-dom";
import SeoHead from "@/components/site/SeoHead";
import CTABand from "@/components/site/CTABand";
import Reveal from "@/components/site/Reveal";
import { CATEGORIES, ARTICLES } from "@/content/insights";

export default function InsightsHub() {
  const [feature, ...rest] = ARTICLES;
  return (
    <>
      <SeoHead title="Insights | CodersDive" description="Useful thinking for teams building software. Practical guidance on product decisions, AI, engineering, design, and scaling." path="/insights" />
      <section className="container-cd pt-20 md:pt-28 pb-12">
        <p className="mono text-foreground/45">/ Insights</p>
        <h1 className="display-1 mt-6 max-w-5xl">Useful thinking for teams building software.</h1>
      </section>
      <section className="container-cd pb-12 flex flex-wrap gap-2">
        {CATEGORIES.map((c) => <Link key={c.slug} to={`/insights/${c.slug}`} className="mono px-4 h-9 inline-flex items-center rounded-full border border-foreground/20 text-foreground/75 hover:border-aqua hover:text-aqua">{c.title}</Link>)}
      </section>

      {feature && (
        <section className="container-cd pb-12">
          <Link to={`/insights/${feature.category}/${feature.slug}`} className="block card-cd p-8 md:p-12">
            <p className="mono text-aqua">Featured · {feature.category.replace(/-/g, " ")}</p>
            <h2 className="display-2 mt-5 max-w-3xl">{feature.title}</h2>
            <p className="mt-5 text-foreground/70 max-w-3xl text-lg">{feature.excerpt}</p>
            <p className="mono text-foreground/45 mt-5">{feature.readMins} min read</p>
          </Link>
        </section>
      )}

      <section className="container-cd pb-20">
        <Reveal stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((a) => (
            <Link key={a.slug} to={`/insights/${a.category}/${a.slug}`} className="card-cd p-6 flex flex-col">
              <p className="mono text-aqua">{a.category.replace(/-/g, " ")}</p>
              <h3 className="font-serif text-2xl mt-3">{a.title}</h3>
              <p className="text-foreground/65 mt-3 text-sm flex-1">{a.excerpt}</p>
              <p className="mono text-foreground/45 mt-5">{a.readMins} min read</p>
            </Link>
          ))}
        </Reveal>
      </section>

      <CTABand eyebrow="Stay in touch" title="One short note. Occasionally." primary={{ label: "Subscribe", href: "#newsletter" }} secondary={{ label: "Start a project", href: "/start-a-project" }} />
    </>
  );
}