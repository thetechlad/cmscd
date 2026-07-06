import { useState } from "react";
import Layout from "@/components/Layout";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import CoverArt from "@/components/templates/CoverArt";
import { getBlogImage } from "@/data/blogImages";
import { blogPosts, blogCategories } from "@/data/blogData";

const Blog = () => {
  const [searchParams] = useSearchParams();
  const initial = searchParams.get("category") || "all";
  const [active, setActive] = useState<string>(initial);
  const posts = active === "all" ? blogPosts : blogPosts.filter((p) => p.categorySlug === active);

  return (
    <Layout
      title="Insights"
      description="Useful thinking for teams building software — AI engineering, product strategy, SaaS growth, and more."
    >
      <section className="bg-background pt-[120px] pb-12 border-b border-border">
        <div className="container-tight">
          <div className="label-eyebrow mb-6">Insights</div>
          <h1 className="display text-[34px] md:text-[42px] lg:text-[68px] font-bold leading-[1.05] max-w-4xl mb-5">
            Useful thinking for teams <span style={{ color: "hsl(var(--accent-blue))" }}>building software</span>.
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-[1.7]">
            Practical essays on AI engineering, product strategy, SaaS growth, web and mobile UX, cloud and quality, and digital transformation.
          </p>
        </div>
      </section>

      <section className="bg-background pt-10">
        <div className="container-tight">
          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={() => setActive("all")}
              className={`tag-pill transition-all ${active === "all" ? "ring-1 ring-accent-blue" : "hover:bg-foreground/5"}`}
              style={active === "all" ? { background: "hsl(var(--accent-blue-soft))", color: "hsl(var(--accent-blue))" } : undefined}
            >
              All posts
            </button>
            {blogCategories.map((c) => (
              <button
                key={c.slug}
                onClick={() => setActive(c.slug)}
                className={`tag-pill transition-all ${active === c.slug ? "ring-1 ring-accent-blue" : "hover:bg-foreground/5"}`}
                style={active === c.slug ? { background: "hsl(var(--accent-blue-soft))", color: "hsl(var(--accent-blue))" } : undefined}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <Reveal as="section" className="bg-background section pt-10">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <Link
                to={`/insights/${p.slug}`}
                key={p.slug}
                className="reveal-child card-light overflow-hidden group flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  {getBlogImage(p.slug) ? (
                    <img
                      src={getBlogImage(p.slug)}
                      alt={p.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <CoverArt
                      seed={p.slug}
                      category={p.categorySlug}
                      className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <span className="absolute top-4 left-4 text-[10px] font-semibold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full bg-white/90 text-foreground backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="display text-lg font-bold mb-3 leading-snug group-hover:text-accent-blue transition-colors">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-[1.7] flex-1">{p.excerpt}</p>
                  <div className="mt-6 pt-5 border-t border-border text-xs text-muted-foreground flex items-center justify-between">
                    <span>{p.date}</span>
                    <span className="inline-flex items-center gap-1">{p.readTime} read <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>
    </Layout>
  );
};

export default Blog;
