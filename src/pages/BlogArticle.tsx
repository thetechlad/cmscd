import { Link, Navigate, useParams } from "react-router-dom";
import SeoHead from "@/components/site/SeoHead";
import Breadcrumb from "@/components/site/Breadcrumb";
import CTABand from "@/components/site/CTABand";
import { CATEGORIES, getArticle, articlesByCategory } from "@/content/insights";

function renderBody(md: string) {
  return md.split(/\n\n+/).map((block, i) => {
    if (block.startsWith("## ")) return <h2 key={i} className="display-3 mt-12 mb-4">{block.slice(3)}</h2>;
    if (block.startsWith("- ")) {
      const items = block.split("\n").map((l) => l.replace(/^[-*]\s+/, ""));
      return <ul key={i} className="my-4 space-y-2">{items.map((it, j) => <li key={j} className="flex gap-3 text-foreground/85"><span className="rule-aqua mt-3 shrink-0" /><span>{it}</span></li>)}</ul>;
    }
    if (/^\d+\.\s/.test(block)) {
      const items = block.split("\n").map((l) => l.replace(/^\d+\.\s+/, ""));
      return <ol key={i} className="my-4 space-y-2 list-decimal pl-5 text-foreground/85">{items.map((it, j) => <li key={j}>{it}</li>)}</ol>;
    }
    return <p key={i} className="my-4 text-foreground/85 leading-relaxed text-[17px]">{block.split(/(\*\*[^*]+\*\*)/g).map((seg, k) => seg.startsWith("**") ? <strong key={k} className="text-foreground">{seg.slice(2,-2)}</strong> : seg)}</p>;
  });
}

export default function BlogArticle() {
  const { category = "", slug = "" } = useParams();
  const a = getArticle(category, slug);
  if (!a) return <Navigate to="/insights" replace />;
  const cat = CATEGORIES.find((c) => c.slug === category)!;
  const related = articlesByCategory(category).filter((x) => x.slug !== slug).slice(0, 3);

  return (
    <>
      <SeoHead title={`${a.title} | CodersDive`} description={a.excerpt} path={`/insights/${category}/${slug}`} type="article"
        jsonLd={{ "@context":"https://schema.org", "@type":"Article", headline: a.title, datePublished: a.date, description: a.excerpt, author: { "@type":"Organization", name:"CodersDive" } }} />

      <article className="container-prose pt-20 md:pt-28 pb-20">
        <Breadcrumb items={[{ label: "Insights", href: "/insights" }, { label: cat.title, href: `/insights/${cat.slug}` }, { label: a.title }]} />
        <p className="mono text-aqua mt-8">{cat.title} · {a.readMins} min read</p>
        <h1 className="display-1 mt-5">{a.title}</h1>
        <p className="mt-6 text-xl text-foreground/70">{a.excerpt}</p>
        <p className="mt-6 mono text-foreground/45">CodersDive · {new Date(a.date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}</p>
        <hr className="my-10 border-foreground/10" />
        <div>{renderBody(a.body)}</div>
      </article>

      {related.length > 0 && (
        <section className="section border-t border-foreground/10">
          <div className="container-cd">
            <p className="eyebrow">Related</p>
            <h2 className="display-2 mt-4">More in {cat.title}</h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.slug} to={`/insights/${cat.slug}/${r.slug}`} className="card-cd p-6"><p className="mono text-aqua">{r.readMins} min</p><h3 className="font-serif text-xl mt-3">{r.title}</h3></Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand eyebrow="Build with us" title="Bring us the messy version." primary={{ label: "Start a project", href: "/start-a-project" }} />
    </>
  );
}