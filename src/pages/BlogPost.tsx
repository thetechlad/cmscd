import { useEffect, useState } from "react";
import { useParams, Link, useNavigate, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import Markdown from "@/components/Markdown";
import Reveal from "@/components/Reveal";
import CoverArt from "@/components/templates/CoverArt";
import { getPostBySlug, blogPosts, blogCategories } from "@/data/blogData";
import { getBlogImage } from "@/data/blogImages";
import { blogOgImage, articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

/** Extract FAQ Q/A pairs from a "Frequently asked questions" section in markdown. */
function extractFaqs(md?: string): { q: string; a: string }[] {
  if (!md) return [];
  const idx = md.toLowerCase().indexOf("frequently asked questions");
  if (idx === -1) return [];
  const section = md.slice(idx);
  const out: { q: string; a: string }[] = [];
  const re = /\*\*(.+?)\*\*\s*\n+([^\n]+(?:\n(?!\*\*|##)[^\n]+)*)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(section)) !== null) {
    out.push({ q: m[1].trim().replace(/\?*$/, "?"), a: m[2].trim() });
  }
  return out.slice(0, 8);
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getPostBySlug(slug) : undefined;
  const isCategory = slug ? blogCategories.some((c) => c.slug === slug) : false;

  // blogExtra.ts holds extended writing for every post (~320KB) — split into its
  // own chunk and loaded on demand instead of bundled into every blog post page,
  // so the main article (from the much smaller blogData) can render immediately.
  const [blogExtra, setBlogExtra] = useState<Record<string, string>>({});
  useEffect(() => {
    import("@/data/blogExtra").then((m) => setBlogExtra(m.blogExtra));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (isCategory) return <Navigate to={`/blog?category=${slug}`} replace />;

  if (!post) {
    return (
      <Layout title="Article not found">
        <section className="bg-background pt-[160px] pb-32">
          <div className="container-tight text-center">
            <h1 className="display text-3xl font-bold mb-4">Article not found</h1>
            <p className="text-muted-foreground mb-8">This insight may have moved or no longer exists.</p>
            <Link to="/blog" className="btn-primary inline-flex">Back to Insights</Link>
          </div>
        </section>
      </Layout>
    );
  }

  const related = blogPosts
    .filter((p) => p.categorySlug === post.categorySlug && p.slug !== post.slug)
    .slice(0, 3);

  const path = `/insights/${post.slug}`;
  const faqs = extractFaqs(blogExtra[post.slug]);
  const jsonLd = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Insights", path: "/insights" },
      { name: post.title, path },
    ]),
    articleSchema({
      title: post.title,
      description: post.excerpt,
      path,
      image: blogOgImage(post.slug),
      datePublished: post.date,
      section: post.category,
    }),
    faqSchema(faqs),
  ];

  return (
    <Layout
      title={post.title}
      description={post.excerpt}
      path={path}
      image={blogOgImage(post.slug)}
      type="article"
      jsonLd={jsonLd}
    >
      <article>
        {/* Hero */}
        <section className="bg-background pt-[120px] pb-10 border-b border-border">
          <div className="container-tight max-w-3xl">
            <button
              onClick={() => navigate("/blog")}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Insights
            </button>
            <div className="flex items-center gap-3 mb-6">
              <span className="tag-pill">{post.category}</span>
              <span className="text-xs text-muted-foreground">{post.date}</span>
              <span className="text-xs text-muted-foreground">·</span>
              <span className="text-xs text-muted-foreground">{post.readTime} read</span>
            </div>
            <h1 className="display text-[30px] md:text-[40px] font-bold leading-[1.1] mb-5">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-[1.7]">{post.excerpt}</p>
          </div>
          <div className="container-tight max-w-4xl mt-10">
            {getBlogImage(post.slug) ? (
              <img
                src={getBlogImage(post.slug)}
                alt={post.title}
                className="w-full h-56 md:h-80 object-cover rounded-2xl glow-ring"
              />
            ) : (
              <CoverArt
                seed={post.slug}
                category={post.categorySlug}
                label={post.category}
                className="w-full h-56 md:h-80 rounded-2xl glow-ring"
              />
            )}
          </div>
        </section>

        {/* Body */}
        <section className="bg-background section">
          <div className="container-tight max-w-3xl">
            <Markdown content={post.body} />
            {blogExtra[post.slug] && (
              <div className="mt-4 pt-2">
                <Markdown content={blogExtra[post.slug]} />
              </div>
            )}

            {/* Final CTA */}
            <div className="mt-12 rounded-2xl p-8 md:p-10" style={{ background: "hsl(var(--foreground))" }}>
              <p className="text-lg md:text-xl font-medium leading-snug mb-6" style={{ color: "hsl(var(--background))" }}>
                {post.finalCta}
              </p>
              <a
                href="https://cal.com/tayyabirfan/15min"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 h-11 px-5 rounded-full text-[13px] font-semibold transition-all hover:scale-[1.03]"
                style={{ background: "hsl(var(--accent-blue))", color: "hsl(var(--primary))" }}
              >
                {post.suggestedCta}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <Reveal as="section" className="bg-background-soft section border-t border-border">
            <div className="container-tight">
              <div className="label-eyebrow mb-6">More in {post.category}</div>
              <div className="grid md:grid-cols-3 gap-6">
                {related.map((p) => (
                  <Link
                    to={`/insights/${p.slug}`}
                    key={p.slug}
                    className="reveal-child card-light overflow-hidden group flex flex-col"
                  >
                    <div className="relative h-36 overflow-hidden">
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
                      <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full bg-white/90 text-foreground backdrop-blur">
                        {p.category}
                      </span>
                    </div>
                    <div className="p-7 flex flex-col flex-1">
                      <h3 className="display text-base font-bold mb-3 leading-snug group-hover:text-accent-blue transition-colors">{p.title}</h3>
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
        )}
      </article>
    </Layout>
  );
};

export default BlogPost;
