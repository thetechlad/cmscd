import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/templates/Breadcrumbs";
import ProcessSteps from "@/components/marketing/ProcessSteps";
import ProofSection from "@/components/marketing/ProofSection";
import FaqAccordion from "@/components/templates/FaqAccordion";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";

const PATH = "/marketing";

const SERVICES = [
  {
    name: "Social Media Management",
    to: "/marketing/social-media-management",
    description: "Consistent posting, original graphics, and community management your team doesn't have time for.",
    highlights: ["Monthly content calendar you approve", "Original graphics and captions", "Comments and DMs answered"],
    startingPrice: "From $799/mo",
  },
  {
    name: "Content Writing",
    to: "/marketing/content-writing",
    description: "Blog posts, landing pages, and website copy, briefed with real keyword research.",
    highlights: ["Keyword research before writing", "Original research, not rephrased competitors", "Edited by a second person"],
    startingPrice: "From $280 per piece",
  },
  {
    name: "PPC Management",
    to: "/marketing/ppc",
    description: "Google, Meta, and LinkedIn ads with conversion tracking set up correctly first.",
    highlights: ["Account audit before spend changes", "Conversion tracking fixed first", "Monthly reporting in plain English"],
    startingPrice: "15% of ad spend, $900/mo min.",
  },
];

const faqs = [
  { q: "Can I start with just one service?", a: "Yes. Each service runs on its own — there's no requirement to bundle." },
  { q: "Is there a minimum commitment?", a: "Social media management and PPC both run on a 3-month minimum. Content writing has no minimum — order one piece or a monthly retainer." },
  { q: "How do the three work together in practice?", a: "PPC data shows which keywords and audiences actually convert. That tells content writing what to target next, and tells social which messages to distribute further. Run separately, each is a standalone vendor guessing at the others' data." },
  { q: "Who's my point of contact?", a: "[TODO: confirm whether marketing clients get a single point of contact or work with each service lead directly]." },
  { q: "How do you report on results?", a: "Each service has its own monthly report. [TODO: confirm whether a combined report is offered for clients running more than one service]." },
];

const MarketingHub = () => (
  <Layout
    title="Digital Marketing Services | CodersDive"
    description="Social media management, content writing, and PPC — run by the team that can also build what the campaigns point to."
    path={PATH}
    jsonLd={[
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Marketing", path: PATH },
      ]),
      faqSchema(faqs),
    ]}
  >
    <section className="bg-mesh pt-[140px] pb-16 border-b border-border">
      <div className="container-tight">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Marketing" }]} />
        <div className="label-eyebrow mb-6">Marketing</div>
        <h1 className="display text-[34px] md:text-[52px] lg:text-[62px] font-bold leading-[1.05] max-w-3xl mb-6">
          Digital marketing services that feed real data back into the product.
        </h1>
        <p className="text-muted-foreground text-lg leading-[1.6] max-w-2xl">
          Social media management, content writing, and PPC — run separately or together, reported on in plain language.
        </p>
      </div>
    </section>

    <section className="bg-background-soft section">
      <div className="container-tight max-w-3xl">
        <h2 className="display text-2xl md:text-4xl font-bold leading-tight mb-5">Why run them together</h2>
        <p className="text-muted-foreground leading-[1.7]">
          PPC data shows which keywords and audiences actually convert. That tells content writing what to
          target next. Content that converts tells social media which message to put in front of more people.
          Run through three separate vendors, that feedback loop doesn't exist — each one is guessing at data
          the other two already have.
        </p>
      </div>
    </section>

    <section className="bg-background section">
      <div className="container-tight">
        <h2 className="display text-2xl md:text-4xl font-bold leading-tight mb-10">Services</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div key={s.to} className="card-light p-7 flex flex-col">
              <h3 className="display text-xl font-bold mb-2">{s.name}</h3>
              <p className="text-sm text-muted-foreground leading-[1.6] mb-5">{s.description}</p>
              <ul className="space-y-2 mb-6">
                {s.highlights.map((h) => (
                  <li key={h} className="text-sm text-foreground/90 flex gap-2">
                    <span className="text-accent-blue-ink">·</span> {h}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <div className="text-xs text-muted-foreground uppercase tracking-[0.08em] mb-3">Starting at {s.startingPrice}</div>
                <Link to={s.to} className="btn-blue w-full h-11">
                  See details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <ProcessSteps
      heading="How we work"
      steps={[
        { title: "Onboarding", description: "We learn your product, audience, and what's been tried before.", timeframe: "Week 1" },
        { title: "Strategy", description: "A plan specific to the service (or services) you're running.", timeframe: "Week 1-2" },
        { title: "Monthly cadence", description: "Content, campaigns, or both go out on a set schedule you've approved.", timeframe: "Ongoing" },
        { title: "Reporting", description: "Plain-English monthly reports, not raw dashboard exports.", timeframe: "Monthly" },
      ]}
    />

    <section className="bg-background-soft section">
      <div className="container-tight max-w-2xl">
        <h2 className="display text-2xl md:text-4xl font-bold leading-tight mb-5">Why CodersDive</h2>
        <p className="text-muted-foreground leading-[1.7]">
          We build software as our main business. If a campaign needs a landing page, a broken tracking pixel
          fixed, or a form that actually saves to your CRM, it doesn't wait in a queue for a subcontractor —
          it's the same team. Most marketing agencies don't have that in-house and have to hand it off.
        </p>
      </div>
    </section>

    <ProofSection heading="Results" note="[TODO: combined results across marketing clients, once we have verified figures to publish.]" />

    <section className="bg-background section">
      <div className="container-tight max-w-3xl">
        <h2 className="display text-2xl md:text-4xl font-bold leading-tight mb-10">Frequently asked questions</h2>
        <FaqAccordion items={faqs} />
      </div>
    </section>

    <section className="on-dark bg-background section">
      <div className="container-tight text-center max-w-2xl mx-auto">
        <h2 className="display text-2xl md:text-4xl font-bold leading-tight mb-4">Not sure which service fits?</h2>
        <p className="text-muted-foreground leading-[1.6] mb-8">Tell us what you're trying to do and we'll point you at the right one — or tell you if none of them do.</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {SERVICES.map((s) => (
            <Link key={s.to} to={s.to} className="btn-secondary h-11 px-5">
              {s.name}
            </Link>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Looking to build software instead?{" "}
          <Link to="/services" className="text-accent-blue-ink underline underline-offset-2 inline-flex items-center gap-1">
            See our engineering services <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </p>
      </div>
    </section>
  </Layout>
);

export default MarketingHub;
