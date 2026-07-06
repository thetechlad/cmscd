import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import { blogPosts } from "@/data/blogData";

const EMAIL = "hello@codersdive.com";

const ThankYou = () => {
  const suggestions = blogPosts.slice(0, 2);

  return (
    <Layout
      title="Thank you | CodersDive"
      description="Your project brief is in. Here's what happens next."
      path="/thank-you"
      noindex
    >
      <section className="bg-mesh pt-[140px] pb-20 min-h-[70vh] flex items-center">
        <div className="container-tight">
          <div className="max-w-2xl">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent-blue-soft mb-8">
              <Check className="w-7 h-7 text-accent-blue" />
            </span>
            <div className="label-eyebrow mb-5">Received</div>
            <h1 className="display text-[34px] md:text-[52px] font-bold leading-[1.05] mb-5">
              Thanks. We've got your brief.
            </h1>
            <p className="text-muted-foreground text-lg leading-[1.6] mb-8">
              A real person on our team will read it and reply within one business day with next
              steps. No automated funnels, no fake calendar pressure.
            </p>

            <div className="card-light p-6 mb-10">
              <div className="text-sm font-semibold mb-3">What happens next</div>
              <ol className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex gap-3"><span className="text-accent-blue font-semibold">1.</span> We review your context and priorities.</li>
                <li className="flex gap-3"><span className="text-accent-blue font-semibold">2.</span> We reply with questions or a suggested first step.</li>
                <li className="flex gap-3"><span className="text-accent-blue font-semibold">3.</span> If it's a fit, we book a focused discovery call.</li>
              </ol>
            </div>

            <p className="text-sm text-muted-foreground mb-3">Want to add more context now?</p>
            <a href={`mailto:${EMAIL}`} className="link-blue mb-12 inline-flex">
              <Mail className="w-4 h-4" /> {EMAIL}
            </a>

            <div className="border-t border-border pt-10">
              <div className="text-xs uppercase tracking-[0.12em] text-muted-foreground font-medium mb-5">
                While you wait, two reads
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {suggestions.map((p) => (
                  <Link key={p.slug} to={`/insights/${p.slug}`} className="group card-light p-5">
                    <div className="text-[11px] uppercase tracking-[0.1em] text-accent-blue mb-2">{p.category}</div>
                    <div className="display font-bold leading-snug group-hover:text-accent-blue transition-colors">{p.title}</div>
                    <span className="link-blue mt-3 text-xs">Read <ArrowUpRight className="w-3 h-3" /></span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ThankYou;
