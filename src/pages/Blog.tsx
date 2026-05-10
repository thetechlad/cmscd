import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const posts = [
  { title: "The product engineering operating model", excerpt: "Why senior-only teams ship 4× faster — and how to run them.", date: "May 2026", read: "8 min", tag: "Operating" },
  { title: "Designing for AI: from feature to product", excerpt: "Stop bolting on a chatbot. Build AI-native experiences that retain.", date: "Apr 2026", read: "11 min", tag: "AI" },
  { title: "The boring stack we use to ship fast", excerpt: "TypeScript, Postgres, Vercel, Stripe. The unglamorous answer to velocity.", date: "Mar 2026", read: "6 min", tag: "Engineering" },
  { title: "Pricing software for revenue, not vanity", excerpt: "A pricing playbook from 30+ SaaS launches.", date: "Feb 2026", read: "9 min", tag: "Growth" },
  { title: "When to rewrite (and when not to)", excerpt: "A decision framework for legacy migrations.", date: "Jan 2026", read: "12 min", tag: "Architecture" },
  { title: "Design systems that don't rot", excerpt: "Tokens, governance and the discipline to say no.", date: "Dec 2025", read: "7 min", tag: "Design" },
];

const Blog = () => (
  <Layout title="Insights" description="Essays on product engineering, AI and shipping software that earns its keep.">
    <section className="bg-background pt-[120px] pb-12 border-b border-border">
      <div className="container-tight">
        <div className="label-eyebrow mb-6">Insights</div>
        <h1 className="display text-[34px] md:text-[42px] lg:text-[68px] font-bold leading-[1.05] max-w-4xl mb-5">
          Notes from the <span style={{ color: "hsl(var(--accent-blue))" }}>studio</span>.
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl leading-[1.7]">
          Essays on product engineering, AI and shipping software that earns its keep.
        </p>
      </div>
    </section>
    <Reveal as="section" className="bg-background section">
      <div className="container-tight">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link to="#" key={p.title} className="reveal-child card-light p-7 group flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="tag-pill">{p.tag}</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent-blue group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="display text-lg font-bold mb-3 leading-snug">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-[1.7] flex-1">{p.excerpt}</p>
              <div className="mt-6 pt-5 border-t border-border text-xs text-muted-foreground flex items-center justify-between">
                <span>{p.date}</span><span>{p.read}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Reveal>
  </Layout>
);

export default Blog;
