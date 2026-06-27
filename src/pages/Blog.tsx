import { useState } from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { blogPosts, blogCategories } from "@/data/blogData";

const Blog = () => {
  const [active, setActive] = useState<string>("all");
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
                className="reveal-child card-light p-7 group flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="tag-pill">{p.category}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent-blue group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="display text-lg font-bold mb-3 leading-snug">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-[1.7] flex-1">{p.excerpt}</p>
                <div className="mt-6 pt-5 border-t border-border text-xs text-muted-foreground flex items-center justify-between">
                  <span>{p.date}</span>
                  <span>{p.readTime} read</span>
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
