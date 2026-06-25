import { Link, useParams, Navigate } from "react-router-dom";
import SeoHead from "@/components/site/SeoHead";
import Breadcrumb from "@/components/site/Breadcrumb";
import { CATEGORIES, articlesByCategory } from "@/content/insights";

export default function InsightsCategory() {
  const { category = "" } = useParams();
  const cat = CATEGORIES.find((c) => c.slug === category);
  if (!cat) return <Navigate to="/insights" replace />;
  const items = articlesByCategory(cat.slug);

  return (
    <>
      <SeoHead title={`${cat.title} | Insights | CodersDive`} description={cat.description} path={`/insights/${cat.slug}`} />
      <section className="container-cd pt-20 md:pt-28 pb-12">
        <Breadcrumb items={[{ label: "Insights", href: "/insights" }, { label: cat.title }]} />
        <h1 className="display-1 mt-6 max-w-4xl">{cat.title}</h1>
        <p className="mt-6 text-lg text-foreground/70 max-w-2xl">{cat.description}</p>
      </section>
      <section className="container-cd pb-20">
        {items.length === 0 ? (
          <p className="text-foreground/60">No articles yet in this category — check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((a) => (
              <Link key={a.slug} to={`/insights/${cat.slug}/${a.slug}`} className="card-cd p-7">
                <p className="mono text-aqua">{a.readMins} min read</p>
                <h2 className="font-serif text-2xl md:text-3xl mt-3">{a.title}</h2>
                <p className="text-foreground/65 mt-3">{a.excerpt}</p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}