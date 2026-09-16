import { Search, ShoppingBag, Video, Users, Linkedin, Chrome } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ServiceHero from "@/components/marketing/ServiceHero";
import ProblemSection from "@/components/marketing/ProblemSection";
import DeliverablesGrid from "@/components/marketing/DeliverablesGrid";
import ProcessSteps from "@/components/marketing/ProcessSteps";
import PricingTiers from "@/components/marketing/PricingTiers";
import ProofSection from "@/components/marketing/ProofSection";
import FitSection from "@/components/marketing/FitSection";
import FaqAccordion from "@/components/templates/FaqAccordion";
import FinalCTA from "@/components/marketing/FinalCTA";
import LeadForm from "@/components/marketing/LeadForm";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/seo";

const PATH = "/marketing/ppc";

const faqs = [
  { q: "How much should I spend on ads to start?", a: "$2,500 a month is our practical minimum — below that, there usually isn't enough data for the platform's bidding algorithms to optimize properly." },
  { q: "Do I pay you or Google?", a: "Ad spend is paid directly to the platform by you. Our management fee is 15% of ad spend, with a $900/month minimum." },
  { q: "How long until campaigns are profitable?", a: "Depends on your sales cycle and current conversion tracking, but plan on 60-90 days for the account to have enough data to optimize properly." },
  { q: "Do I keep access to my ad account?", a: "Yes. The account is set up under your own billing, and you keep full access throughout and after the engagement." },
  { q: "Who owns the account if we stop working together?", a: "You do. The ad account, campaign history, and audience data stay with you — we don't hold anything hostage." },
  { q: "Do you write the ad copy?", a: "Yes, and we test variations against each other rather than shipping one version and hoping." },
  { q: "What if my landing pages are bad?", a: "We'll tell you. A campaign sending traffic to a weak landing page wastes budget regardless of how good the targeting is — we can flag fixes or, since we also build software, make them." },
  { q: "How often do you make changes?", a: "Bids and budgets are reviewed weekly. Ad copy and targeting are reviewed monthly, or sooner if performance shifts." },
];

const Ppc = () => (
  <Layout
    title="PPC Management Services | Google Ads | CodersDive"
    description="Google, Meta, and LinkedIn ad management with conversion tracking set up correctly from day one. 15% of ad spend, $900/month minimum."
    path={PATH}
    jsonLd={[
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Marketing", path: "/marketing" },
        { name: "PPC", path: PATH },
      ]),
      serviceSchema({
        name: "PPC Management",
        description: "Google, Meta, and LinkedIn ad management with conversion tracking setup.",
        path: PATH,
      }),
      faqSchema(faqs),
    ]}
  >
    <ServiceHero
      eyebrow="Marketing"
      h1="PPC management services for teams who want to know where the budget went."
      subhead="Google, Meta, and LinkedIn ad management, with conversion tracking set up correctly before we spend a dollar of your budget. 15% of ad spend, $900/month minimum — you pay the platforms directly."
      primaryCta={{ label: "Get a free account audit", to: "#lead-form" }}
      secondaryCta={{ label: "See pricing", to: "#pricing" }}
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Marketing", to: "/marketing" }, { label: "PPC" }]}
    />

    <ProblemSection
      heading="If this is your ad account right now —"
      symptoms={[
        "You're spending money on ads with no clear idea which campaigns are actually working.",
        "Cost per lead has been climbing for months and nobody's flagged why.",
        "The last agency's report was a screenshot of a dashboard, not an explanation.",
        "Conversion tracking was never set up properly, so the data you do have may not be real.",
      ]}
    />

    <section className="bg-background-soft section">
      <div className="container-tight">
        <h2 className="display text-2xl md:text-4xl font-bold leading-tight mb-10">Platforms we manage</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Search, title: "Google Search", note: "For high-intent keyword searches ready to convert." },
            { icon: ShoppingBag, title: "Google Shopping", note: "For e-commerce with a product catalog." },
            { icon: Video, title: "YouTube", note: "For awareness and retargeting with video." },
            { icon: Users, title: "Meta Ads", note: "For audience targeting on Facebook and Instagram." },
            { icon: Linkedin, title: "LinkedIn Ads", note: "For B2B targeting by role, company, or industry." },
            { icon: Chrome, title: "Microsoft Ads", note: "Often lower-cost than Google for the same keywords." },
          ].map((p) => (
            <div key={p.title} className="card-light p-6">
              <div className="w-10 h-10 rounded-lg bg-accent-blue-soft flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-accent-blue-ink" />
              </div>
              <h3 className="display text-base font-bold mb-2 leading-snug">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-[1.6]">{p.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <DeliverablesGrid
      heading="What's included"
      items={[
        { title: "Account audit and restructure", description: "We review the existing account structure before changing anything." },
        { title: "Keyword research and negatives", description: "Including a negative keyword list to stop paying for the wrong searches." },
        { title: "Ad copy writing and testing", description: "Multiple variations tested against each other, not a single guess." },
        { title: "Landing page recommendations", description: "Flagged issues that hurt conversion rate, even if we didn't build the page." },
        { title: "Conversion tracking setup", description: "GA4 and platform pixels configured correctly before spend scales up." },
        { title: "Bid and budget management", description: "Reviewed weekly, adjusted as the data justifies it — not left on autopilot." },
        { title: "Monthly reporting", description: "Plain-English commentary, not just a screenshot of the numbers." },
      ]}
    />

    <div className="bg-background section">
      <div className="container-tight">
        <div className="card-light p-6 max-w-2xl">
          <p className="text-sm text-foreground/90">
            <strong>What we don't do:</strong> ad spend is paid directly to the platform by you, not routed through us. Our fee is the management fee only.
          </p>
        </div>
      </div>
    </div>

    <ProcessSteps
      heading="How it works"
      steps={[
        { title: "Audit", description: "Full review of account structure, tracking, and past performance.", timeframe: "Week 1" },
        { title: "Tracking & restructure", description: "Conversion tracking fixed, account restructured around what actually converts.", timeframe: "Week 2" },
        { title: "Launch & learn", description: "Campaigns live, data collecting, early adjustments made.", timeframe: "Weeks 3-6" },
        { title: "Ongoing optimization", description: "Continuous adjustment based on real conversion data.", timeframe: "Ongoing" },
      ]}
    />

    <div id="pricing">
      <PricingTiers
        heading="Pricing"
        tiers={[
          {
            name: "Management fee",
            price: "15% of ad spend",
            priceNote: "$900/month minimum, plus ad spend paid directly to the platform",
            included: ["Account audit and setup", "Ongoing optimization", "Monthly reporting"],
            cta: { label: "Get a quote", to: "#lead-form" },
          },
        ]}
      />
      <div className="container-tight -mt-4">
        <p className="text-sm text-muted-foreground max-w-2xl">Setup fees, if any, are billed separately from the ongoing management fee. Minimum monthly ad spend to qualify: $2,500.</p>
      </div>
    </div>

    <ProofSection heading="Results" note="[TODO: case study with real CPA/ROAS figures. This is the category where buyers expect numbers most — nothing invented here until we have a verified result to publish.]" />

    <FitSection
      heading="Is this for you?"
      fitIf={[
        "You have conversion tracking questions you can't currently answer.",
        "Your monthly ad budget is at or above $2,500.",
        "You want to know exactly what changed and why, every month.",
      ]}
      notFitIf={[
        "Your monthly ad budget is under $2,500 — there usually isn't enough volume yet to optimize properly.",
        "You want to keep full manual control over every bid change yourself.",
        "You need results in the first week — PPC needs a learning period first.",
      ]}
    />

    <section className="bg-background section">
      <div className="container-tight max-w-3xl">
        <h2 className="display text-2xl md:text-4xl font-bold leading-tight mb-10">Frequently asked questions</h2>
        <FaqAccordion items={faqs} />
        <p className="text-sm text-muted-foreground mt-8">
          Need the ad copy backed by better content? See{" "}
          <Link to="/marketing/content-writing" className="text-accent-blue-ink underline underline-offset-2">content writing services</Link>.
          Want organic reach alongside paid? See{" "}
          <Link to="/marketing/social-media-management" className="text-accent-blue-ink underline underline-offset-2">social media management</Link>.
        </p>
      </div>
    </section>

    <section id="lead-form" className="bg-background-soft section">
      <div className="container-tight max-w-xl">
        <LeadForm service="PPC Management" heading="Tell us about your ad accounts." />
      </div>
    </section>

    <FinalCTA
      heading="Want a second opinion on your ad account?"
      body="Get a free account audit — we'll tell you what's actually working before you commit to anything."
      primaryCta={{ label: "Get a free account audit", to: "#lead-form" }}
    />
  </Layout>
);

export default Ppc;
