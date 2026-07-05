import { useEffect } from "react";
import { useParams, Link, useNavigate, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import Markdown from "@/components/Markdown";
import Reveal from "@/components/Reveal";
import CoverArt from "@/components/templates/CoverArt";
import { getPostBySlug, blogPosts, blogCategories } from "@/data/blogData";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getPostBySlug(slug) : undefined;
  const isCategory = slug ? blogCategories.some((c) => c.slug === slug) : false;

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

  return (
    <Layout title={post.title} description={post.excerpt}>
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
        </section>

        {/* Body */}
        <section className="bg-background section">
          <div className="container-tight max-w-3xl">
            <Markdown content={post.body} />

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
                style={{ background: "hsl(var(--accent-blue))", color: "#fff" }}
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
                    className="reveal-child card-light p-7 group flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <span className="tag-pill">{p.category}</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent-blue group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="display text-base font-bold mb-3 leading-snug">{p.title}</h3>
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
        )}
      </article>
    </Layout>
  );
};

export default BlogPost;
