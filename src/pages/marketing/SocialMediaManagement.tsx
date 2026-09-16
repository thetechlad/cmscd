import { Calendar, Image, MessageCircle, BarChart3, PenTool, Clock } from "lucide-react";
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
import { Link } from "react-router-dom";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/seo";

const PATH = "/marketing/social-media-management";

const faqs = [
  { q: "How long before I see results?", a: "Follower growth and engagement typically move within the first 4-6 weeks. Inbound leads from social take longer — usually 8-12 weeks — because they depend on your offer and how long your sales cycle already is." },
  { q: "Do you write the captions or do I?", a: "We write them, working from a brand voice guide we build with you in week one. You review the content calendar monthly before anything publishes." },
  { q: "What if I don't like a post before it goes out?", a: "Nothing publishes without your approval on the monthly calendar. If something needs to change after that, tell us and we'll swap it before it goes live." },
  { q: "Do you handle comments and DMs?", a: "Yes, on the platforms in your plan. We respond within 24 hours on business days." },
  { q: "What's the minimum commitment?", a: "A 3-month minimum — social growth compounds, and a single month rarely shows what the strategy can actually do." },
  { q: "Who owns the content?", a: "You do. Captions, graphics, and the content calendar are yours if we stop working together." },
  { q: "Do you run paid ads too?", a: "Yes — see our PPC management service if you want organic and paid working from the same content and targeting data." },
  { q: "What if I already have a content calendar?", a: "We can work from it, or audit it against what's actually driving engagement and rebuild the parts that aren't." },
];

const SocialMediaManagement = () => (
  <Layout
    title="Social Media Management Services | CodersDive"
    description="Consistent posting, content creation, and community management across your social platforms — with a monthly calendar you approve before anything goes live."
    path={PATH}
    jsonLd={[
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Marketing", path: "/marketing" },
        { name: "Social Media Management", path: PATH },
      ]),
      serviceSchema({
        name: "Social Media Management",
        description: "Consistent posting, content creation, and community management across social platforms.",
        path: PATH,
      }),
      faqSchema(faqs),
    ]}
  >
    <ServiceHero
      eyebrow="Marketing"
      h1="Social media management services that keep your accounts active and answering."
      subhead="A monthly content calendar, original graphics, and captions you approve before anything publishes — plus someone answering your comments and DMs."
      primaryCta={{ label: "Book a 20-minute call", to: "#lead-form" }}
      secondaryCta={{ label: "See packages", to: "#pricing" }}
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Marketing", to: "/marketing" }, { label: "Social Media Management" }]}
    />

    <ProblemSection
      heading="You recognize at least one of these."
      symptoms={[
        "Posting stopped three weeks ago because the person who did it left, and nobody picked it back up.",
        "Your last five posts got single-digit engagement and you don't know why.",
        "Competitors post daily. You post when someone remembers to.",
        "Whoever ran your accounts before took the login with them.",
      ]}
    />

    <DeliverablesGrid
      heading="What you get"
      items={[
        { title: "Monthly content calendar", description: "Built and sent for your approval before the month starts — 3-7 posts per week per platform, depending on your plan.", icon: Calendar },
        { title: "Original graphics", description: "Designed for your brand, not templated stock graphics with your logo dropped on top.", icon: Image },
        { title: "Caption copywriting", description: "Written from a voice guide we build with you, not generic filler text.", icon: PenTool },
        { title: "Community management", description: "Comments and DMs answered on the platforms in your plan, within 24 hours on business days.", icon: MessageCircle },
        { title: "Monthly performance report", description: "Reach, engagement, and follower growth in plain language, not a screenshot of a dashboard.", icon: BarChart3 },
        { title: "Consistent publishing cadence", description: "The calendar runs whether or not someone on your team remembers to post.", icon: Clock },
      ]}
    />

    <section className="bg-background-soft section">
      <div className="container-tight">
        <h2 className="display text-2xl md:text-4xl font-bold leading-tight mb-10">Platforms we cover</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {[
            { name: "Instagram", note: "Feed posts, Stories, and Reels." },
            { name: "Facebook", note: "Page posts and community management." },
            { name: "LinkedIn", note: "Company page posts, best for B2B." },
            { name: "X", note: "Shorter-form updates and replies." },
            { name: "TikTok", note: "Short-form video, edited from footage you provide." },
          ].map((p) => (
            <div key={p.name} className="card-light p-5">
              <div className="font-semibold mb-1">{p.name}</div>
              <p className="text-sm text-muted-foreground">{p.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <ProcessSteps
      heading="How it works"
      steps={[
        { title: "Audit & strategy", description: "We review what's worked, what hasn't, and who you're actually trying to reach.", timeframe: "Week 1" },
        { title: "Calendar approval", description: "First month's content calendar goes to you for review before anything is scheduled.", timeframe: "Week 2" },
        { title: "Publish & engage", description: "Posts go out on schedule; comments and DMs get answered.", timeframe: "Ongoing" },
        { title: "Report & adjust", description: "Monthly report, then we adjust the next month's calendar based on what worked.", timeframe: "Monthly" },
      ]}
    />

    <div id="pricing">
      <PricingTiers
        heading="Packages"
        tiers={[
          {
            name: "Starter",
            price: "$799",
            priceNote: "per month",
            included: ["1-2 platforms", "12 posts per month", "Monthly report"],
            cta: { label: "Get started", to: "#lead-form" },
          },
          {
            name: "Growth",
            price: "$1,599",
            priceNote: "per month",
            included: ["3-4 platforms", "20 posts per month", "Community management", "Monthly report"],
            cta: { label: "Get started", to: "#lead-form" },
            mostPicked: true,
          },
          {
            name: "Full coverage",
            price: "$2,999",
            priceNote: "per month",
            included: ["All platforms", "30 posts per month", "Priority community management", "Monthly strategy call"],
            cta: { label: "Get started", to: "#lead-form" },
          },
        ]}
      />
    </div>

    <ProofSection heading="Results" note="[TODO: case study — real client results with permission to publish. Nothing invented here yet.]" />

    <FitSection
      heading="Is this for you?"
      fitIf={[
        "You can commit to at least 3 months to let a strategy actually work.",
        "You want a consistent voice across platforms without hiring in-house.",
        "You're fine reviewing a monthly calendar rather than approving every single post.",
      ]}
      notFitIf={[
        "You want overnight follower growth — that's not how organic social works.",
        "You need every post approved individually before it goes out.",
        "You want to keep writing the captions yourself.",
      ]}
    />

    <section className="bg-background section">
      <div className="container-tight max-w-3xl">
        <h2 className="display text-2xl md:text-4xl font-bold leading-tight mb-10">Frequently asked questions</h2>
        <FaqAccordion items={faqs} />
        <p className="text-sm text-muted-foreground mt-8">
          Want the writing side handled too? See{" "}
          <Link to="/marketing/content-writing" className="text-accent-blue-ink underline underline-offset-2">content writing services</Link>.
          Running ads as well? See{" "}
          <Link to="/marketing/ppc" className="text-accent-blue-ink underline underline-offset-2">PPC management</Link>.
        </p>
      </div>
    </section>

    <section id="lead-form" className="bg-background-soft section">
      <div className="container-tight max-w-xl">
        <LeadForm service="Social Media Management" heading="Tell us about your accounts." />
      </div>
    </section>

    <FinalCTA
      heading="Ready to stop posting when someone remembers to?"
      body="Book a 20-minute call and we'll tell you what a realistic first 90 days looks like."
      primaryCta={{ label: "Book a 20-minute call", to: "#lead-form" }}
    />
  </Layout>
);

export default SocialMediaManagement;
