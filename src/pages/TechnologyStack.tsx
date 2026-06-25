import SeoHead from "@/components/site/SeoHead";
import CTABand from "@/components/site/CTABand";
import Reveal from "@/components/site/Reveal";

const STACK = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Vite"] },
  { group: "Backend", items: ["Node.js", "Python", "Go (when justified)", "GraphQL", "REST"] },
  { group: "Mobile", items: ["React Native", "Swift", "Kotlin", "Expo"] },
  { group: "Data", items: ["Postgres", "ClickHouse", "Redis", "S3-compatible storage"] },
  { group: "AI / ML", items: ["OpenAI", "Anthropic", "Open-source models", "Retrieval pipelines", "Evaluation harnesses"] },
  { group: "Cloud", items: ["AWS", "GCP", "Cloudflare", "Vercel", "Terraform"] },
  { group: "Commerce", items: ["Shopify (Hydrogen)", "Stripe", "CMS platforms"] },
  { group: "Quality", items: ["Vitest", "Playwright", "Cypress", "Lighthouse / Web Vitals"] },
];

export default function TechnologyStack() {
  return (
    <>
      <SeoHead title="Technology Stack | CodersDive" description="Pragmatic technology choices across frontend, backend, mobile, data, AI, cloud, commerce, and quality — chosen for the product, not the trend." path="/technology-stack" />
      <section className="container-cd pt-20 md:pt-28 pb-16">
        <p className="mono text-foreground/45">/ Stack</p>
        <h1 className="display-1 mt-6 max-w-5xl">Pragmatic choices. Explained trade-offs.</h1>
        <p className="mt-8 text-lg text-foreground/70 max-w-2xl">Have a stack already? We can assess it before recommending change. The list below shows where we operate fluently.</p>
      </section>

      <section className="section pt-0">
        <div className="container-cd">
          <Reveal stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STACK.map((g) => (
              <div key={g.group} className="card-cd p-6"><p className="mono text-aqua">{g.group}</p><ul className="mt-4 space-y-2 text-foreground/85">{g.items.map((it) => <li key={it} className="text-sm">{it}</li>)}</ul></div>
            ))}
          </Reveal>
        </div>
      </section>

      <CTABand eyebrow="Review" title="Have a stack already? Let us review it." primary={{ label: "Review your architecture", href: "/start-a-project" }} />
    </>
  );
}