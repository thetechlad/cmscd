import SeoHead from "@/components/site/SeoHead";
import Breadcrumb from "@/components/site/Breadcrumb";

type Section = { id: string; title: string; body: string };
type Props = { slug: "privacy" | "terms" | "cookies" | "accessibility" | "security-responsible-ai" };

const CONTENT: Record<Props["slug"], { title: string; updated: string; intro: string; sections: Section[] }> = {
  privacy: {
    title: "Privacy Notice", updated: "June 2026",
    intro: "This notice describes what information CodersDive collects, why, and how we handle it. It is written in plain language. Where local law uses different terminology, the spirit is the same.",
    sections: [
      { id: "what", title: "What we collect", body: "Information you provide through forms and email — your name, contact details, and what you tell us about your project. Basic site analytics (page views and aggregated usage) to understand which pages are useful. We do not buy or sell personal data." },
      { id: "why", title: "Why we use it", body: "To respond to enquiries, deliver work you have engaged us for, send the occasional newsletter you have signed up to, and improve the site." },
      { id: "share", title: "Who we share it with", body: "Limited service providers (email, analytics, hosting) under contract. We do not share personal data for marketing." },
      { id: "rights", title: "Your rights", body: "Access, correction, and deletion. Email hello@codersdive.com and we will respond within a reasonable time." },
      { id: "contact", title: "Contact", body: "Questions: hello@codersdive.com." },
    ],
  },
  terms: {
    title: "Terms of Use", updated: "June 2026",
    intro: "These terms govern your use of the CodersDive website. Engagements are governed by separate contracts.",
    sections: [
      { id: "use", title: "Use of the site", body: "You may use the site for lawful purposes. Do not attempt to disrupt or compromise it." },
      { id: "ip", title: "Intellectual property", body: "Site content is owned by CodersDive or used with permission. Code and materials produced in engagements are governed by the engagement contract." },
      { id: "liability", title: "Liability", body: "The site is provided as is. To the extent permitted by law, CodersDive is not liable for indirect or consequential loss arising from your use of the site." },
      { id: "changes", title: "Changes", body: "We may update these terms; updates apply from the date posted." },
    ],
  },
  cookies: {
    title: "Cookies", updated: "June 2026",
    intro: "We use a small number of cookies to operate the site and understand aggregated usage. We do not run advertising cookies.",
    sections: [
      { id: "essential", title: "Essential", body: "Cookies required to operate the site, e.g. preserving form state during your visit." },
      { id: "analytics", title: "Analytics", body: "Aggregated analytics to understand which pages are useful. No advertising identifiers." },
      { id: "control", title: "Your control", body: "You can disable cookies in your browser. Some features may not work without them." },
    ],
  },
  accessibility: {
    title: "Accessibility", updated: "June 2026",
    intro: "We design the site to be usable by as many people as possible, including those using assistive technology.",
    sections: [
      { id: "standards", title: "Standards we aim for", body: "WCAG 2.2 AA-conscious design and implementation, semantic HTML, keyboard navigation, visible focus, and reduced-motion support." },
      { id: "known", title: "Known limitations", body: "Some embedded third-party content may not meet our standards. We work to improve where we can." },
      { id: "feedback", title: "Feedback", body: "Tell us where the site fails you: hello@codersdive.com." },
    ],
  },
  "security-responsible-ai": {
    title: "Security & Responsible AI", updated: "June 2026",
    intro: "How we approach security in engineering, and the principles we hold for AI work.",
    sections: [
      { id: "engineering", title: "Security in engineering", body: "Sensible defaults, least-privilege access, dependency management, code review, and observability are standard. For regulated environments we work with your compliance team on specific requirements." },
      { id: "ai-principles", title: "Responsible AI principles", body: "Bounded tasks, evaluation against your own criteria, observability, human accountability for material decisions, and cost transparency." },
      { id: "data", title: "Data handling for AI", body: "We use providers and configurations that do not train on your data. Data paths are documented. PII is minimised and protected." },
      { id: "disclosure", title: "Vulnerability disclosure", body: "Email security findings to hello@codersdive.com. We acknowledge within two business days." },
    ],
  },
};

export default function Legal({ slug }: Props) {
  const data = CONTENT[slug];
  return (
    <>
      <SeoHead title={`${data.title} | CodersDive`} description={data.intro} path={`/${slug}`} />
      <div className="bg-mist text-ink min-h-screen">
        <div className="container-cd pt-20 md:pt-28 pb-20">
          <Breadcrumb items={[{ label: "Legal" }, { label: data.title }]} />
          <h1 className="display-1 mt-6">{data.title}</h1>
          <p className="mono mt-4 opacity-60">Last updated: {data.updated}</p>
          <p className="mt-8 max-w-2xl text-lg opacity-80">{data.intro}</p>

          <div className="mt-12 grid grid-cols-12 gap-10">
            <aside className="col-span-12 md:col-span-3 md:sticky md:top-28 h-fit">
              <p className="mono opacity-50 mb-3">On this page</p>
              <ul className="space-y-2 text-sm">
                {data.sections.map((s) => <li key={s.id}><a href={`#${s.id}`} className="opacity-80 hover:opacity-100 hover:text-aqua">{s.title}</a></li>)}
              </ul>
            </aside>
            <div className="col-span-12 md:col-span-9 max-w-prose space-y-10">
              {data.sections.map((s) => (
                <section key={s.id} id={s.id}>
                  <h2 className="font-serif text-2xl md:text-3xl">{s.title}</h2>
                  <p className="mt-3 opacity-80 leading-relaxed">{s.body}</p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}