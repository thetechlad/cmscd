import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const posts = [
  { title: "The product engineering operating model", excerpt: "Why senior-only teams ship 4× faster — and how to run them.", date: "May 2026", read: "8 min", tag: "Operating" },
  { title: "Designing for AI: from feature to product", excerpt: "Stop bolting on a chatbot. Here's how to build AI-native experiences that retain.", date: "Apr 2026", read: "11 min", tag: "AI" },
  { title: "The boring stack we use to ship fast", excerpt: "TypeScript, Postgres, Vercel, Stripe. The unglamorous answer to velocity.", date: "Mar 2026", read: "6 min", tag: "Engineering" },
  { title: "Pricing software for revenue, not vanity", excerpt: "A pricing playbook from 30+ SaaS launches.", date: "Feb 2026", read: "9 min", tag: "Growth" },
  { title: "When to rewrite (and when not to)", excerpt: "A decision framework for legacy migrations.", date: "Jan 2026", read: "12 min", tag: "Architecture" },
  { title: "Design systems that don't rot", excerpt: "Tokens, governance and the discipline to say no.", date: "Dec 2025", read: "7 min", tag: "Design" },
];

const Blog = () => (
  <Layout title="Journal" description="Essays on product engineering, AI and shipping software that earns its keep.">
    <section className="relative py-20 md:py-28">
      <div className="container-tight">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Journal</div>
          <h1 className="display text-5xl md:text-6xl font-semibold leading-tight">Notes from the studio.</h1>
          <p className="text-muted-foreground text-lg mt-5">Essays on product engineering, AI and shipping software that earns its keep.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((p) => (
            <Link to="#" key={p.title} className="card-elev group flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] uppercase tracking-widest text-primary">{p.tag}</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all" />
              </div>
              <h3 className="display text-xl font-semibold mb-3 leading-snug">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.excerpt}</p>
              <div className="mt-6 pt-6 border-t border-border text-xs text-muted-foreground flex items-center justify-between">
                <span>{p.date}</span><span>{p.read}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
