import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { getServices, getCaseStudies } from "@/lib/content";
import { blogPosts } from "@/data/blogData";

interface RelatedCard {
  kind: "Service" | "Case study" | "Insight";
  title: string;
  desc: string;
  to: string;
}

/**
 * Contextual three-card module: one related service, one case study, one insight.
 * Picks deterministically while excluding the current page.
 */
const RelatedContent = ({ currentUrl }: { currentUrl: string }) => {
  const services = getServices().filter((p) => p.url !== currentUrl);
  const cases = getCaseStudies().filter((p) => p.url !== currentUrl);
  const post = blogPosts[0];

  const seed = currentUrl.length;
  const service = services[seed % Math.max(services.length, 1)];
  const study = cases[seed % Math.max(cases.length, 1)];

  const cards: RelatedCard[] = [];
  if (service) cards.push({ kind: "Service", title: service.title, desc: service.subtitle, to: service.url });
  if (study) cards.push({ kind: "Case study", title: study.title, desc: study.subtitle, to: study.url });
  if (post) cards.push({ kind: "Insight", title: post.title, desc: post.excerpt, to: `/insights/${post.slug}` });

  if (cards.length === 0) return null;

  return (
    <Reveal as="section" className="bg-background-soft section border-t border-border">
      <div className="container-tight">
        <div className="label-eyebrow mb-6">Keep exploring</div>
        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((c) => (
            <Link
              key={c.to + c.kind}
              to={c.to}
              className="reveal-child group card-light p-7 flex flex-col"
            >
              <div className="text-[11px] uppercase tracking-[0.12em] text-accent-blue font-medium mb-4">
                {c.kind}
              </div>
              <div className="display text-lg font-bold leading-snug mb-2 group-hover:text-accent-blue transition-colors">
                {c.title}
              </div>
              <p className="text-sm text-muted-foreground leading-[1.6] line-clamp-3">{c.desc}</p>
              <span className="link-blue mt-5">
                Read more <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Reveal>
  );
};

export default RelatedContent;
