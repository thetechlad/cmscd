import { FileText, Search, Layout as LayoutIcon, Package, Mail, BookOpen } from "lucide-react";
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

const PATH = "/marketing/content-writing";

const faqs = [
  { q: "Do you do keyword research or do I supply keywords?", a: "We research and propose keywords as part of the brief. You can also hand us a target list if you already have one from your own SEO work." },
  { q: "How many revisions are included?", a: "Two rounds are included in the standard rate. Additional rounds are billed at $75/hour." },
  { q: "What's the turnaround for a 1,500-word post?", a: "About 10-12 business days from brief to final delivery, including two revision rounds." },
  { q: "Do you publish directly to my CMS?", a: "We can if you give us access, or deliver a formatted document for your team to publish. [TODO: confirm which CMS platforms we currently support direct publishing on]." },
  { q: "Will the content be original? How do you check?", a: "Every piece is checked against a plagiarism tool before delivery." },
  { q: "What's your policy on AI assistance in writing?", a: "[TODO: confirm the actual AI-assistance and editing policy — this is a real question buyers ask and deserves an honest, specific answer rather than a blanket claim either way]." },
  { q: "Do you write for technical or niche industries?", a: "Yes, with a research phase built into the brief for unfamiliar subject matter. [TODO: list any industries with real track record once confirmed]." },
  { q: "Can you match our existing brand voice?", a: "We build a voice guide from your existing content before writing anything new." },
  { q: "Who owns the copyright?", a: "You do, on delivery and payment." },
];

const ContentWriting = () => (
  <Layout
    title="Content Writing Services | CodersDive"
    description="SEO-researched blog posts, landing page copy, and website content — briefed with keyword research, written by a person, edited by a second."
    path={PATH}
    jsonLd={[
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Marketing", path: "/marketing" },
        { name: "Content Writing", path: PATH },
      ]),
      serviceSchema({
        name: "Content Writing",
        description: "SEO-researched blog posts, landing page copy, and website content writing.",
        path: PATH,
      }),
      faqSchema(faqs),
    ]}
  >
    <ServiceHero
      eyebrow="Marketing"
      h1="Content writing services for teams whose blog stopped ranking."
      subhead="Blog posts, landing pages, and website copy briefed with real keyword research, written by a person, and edited by a second before it reaches you."
      primaryCta={{ label: "Get a content brief", to: "#lead-form" }}
      secondaryCta={{ label: "See pricing", to: "#pricing" }}
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Marketing", to: "/marketing" }, { label: "Content Writing" }]}
    />

    <ProblemSection
      heading="Sound familiar?"
      symptoms={[
        "The blog's publish dates are old enough that visitors notice before they read a word.",
        "Pages that do exist aren't ranking for anything you'd want to rank for.",
        "The last freelancer delivered copy that reads like it was written in thirty seconds.",
        "Nobody on the team has two free hours to write, let alone research first.",
      ]}
    />

    <section className="bg-background-soft section">
      <div className="container-tight">
        <h2 className="display text-2xl md:text-4xl font-bold leading-tight mb-10">What we write</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: FileText, title: "Blog posts & articles", note: "800-2,000 words. 7-10 business days." },
            { icon: Search, title: "SEO landing pages", note: "Briefed against a target keyword and search intent." },
            { icon: LayoutIcon, title: "Website copy", note: "Homepage, about, and service page copy." },
            { icon: Package, title: "Product descriptions", note: "Written for conversion, not just for a spec sheet." },
            { icon: Mail, title: "Email sequences", note: "Onboarding, nurture, or launch sequences." },
            { icon: BookOpen, title: "Case studies", note: "Structured from an interview with your team." },
          ].map((s) => (
            <div key={s.title} className="card-light p-6">
              <div className="w-10 h-10 rounded-lg bg-accent-blue-soft flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-accent-blue-ink" />
              </div>
              <h3 className="display text-base font-bold mb-2 leading-snug">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-[1.6]">{s.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <DeliverablesGrid
      heading="What's actually included"
      items={[
        { title: "Keyword research and brief", description: "Before a single word is written, so the piece targets something people actually search for." },
        { title: "Original research", description: "Not rephrased competitor content — we read the sources, not just the top 3 search results." },
        { title: "Editorial pass", description: "A second person reads every piece before it reaches you." },
        { title: "Internal linking built in", description: "Links to your other pages placed where they're contextually relevant." },
        { title: "Meta title and description", description: "Supplied with every piece, ready to publish." },
        { title: "Two revision rounds", description: "Included in the standard rate. Additional rounds are billed at $75/hour." },
      ]}
    />

    <ProcessSteps
      heading="How it works"
      steps={[
        { title: "Brief & keyword research", description: "We propose the target keyword, angle, and structure.", timeframe: "Day 1-2" },
        { title: "Outline approval", description: "You approve the outline before drafting starts.", timeframe: "Day 3" },
        { title: "Draft delivery", description: "First draft delivered against the approved outline.", timeframe: "Day 7" },
        { title: "Revisions", description: "Two rounds of revisions, then final delivery.", timeframe: "Day 10-12" },
      ]}
    />

    <div id="pricing">
      <PricingTiers
        heading="Pricing"
        tiers={[
          {
            name: "Per piece",
            price: "$280",
            priceNote: "per 1,000 words",
            included: ["Keyword research", "One piece at a time", "Two revisions"],
            cta: { label: "Get a quote", to: "#lead-form" },
          },
          {
            name: "Monthly retainer",
            price: "$1,800",
            priceNote: "per month",
            included: ["6 pieces per month", "Priority scheduling", "Internal linking across the set"],
            cta: { label: "Get a quote", to: "#lead-form" },
            mostPicked: true,
          },
        ]}
      />
    </div>

    <ProofSection heading="Samples" note="[TODO: writing samples — link to published pieces once we have permission to share them]" />

    <FitSection
      heading="Is this for you?"
      fitIf={[
        "You want content that targets real search terms, not just filled space.",
        "You can turn around approvals within a few business days.",
        "You want a consistent voice across every published piece.",
      ]}
      notFitIf={[
        "You need same-day turnaround on every piece.",
        "You want the cheapest possible per-word rate over quality.",
        "Nobody on your team can approve an outline or give feedback.",
      ]}
    />

    <section className="bg-background section">
      <div className="container-tight max-w-3xl">
        <h2 className="display text-2xl md:text-4xl font-bold leading-tight mb-10">Frequently asked questions</h2>
        <FaqAccordion items={faqs} />
        <p className="text-sm text-muted-foreground mt-8">
          Need the content distributed too? See{" "}
          <Link to="/marketing/social-media-management" className="text-accent-blue-ink underline underline-offset-2">social media management</Link>.
          Want to put budget behind your best pages? See{" "}
          <Link to="/marketing/ppc" className="text-accent-blue-ink underline underline-offset-2">PPC management</Link>.
        </p>
      </div>
    </section>

    <section id="lead-form" className="bg-background-soft section">
      <div className="container-tight max-w-xl">
        <LeadForm service="Content Writing" heading="Tell us what you need written." />
      </div>
    </section>

    <FinalCTA
      heading="Ready for content that actually ranks?"
      body="Send us your last three blog briefs and we'll tell you honestly what's working and what isn't."
      primaryCta={{ label: "Get a content brief", to: "#lead-form" }}
    />
  </Layout>
);

export default ContentWriting;
