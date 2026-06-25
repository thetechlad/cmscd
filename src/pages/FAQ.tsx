import { useMemo, useState } from "react";
import SeoHead from "@/components/site/SeoHead";
import CTABand from "@/components/site/CTABand";
import FAQAccordion from "@/components/site/FAQAccordion";
import { FAQS } from "@/content/faqs";

export default function FAQ() {
  const cats = useMemo(() => Array.from(new Set(FAQS.map((f) => f.category))), []);
  const [cat, setCat] = useState<string>("All");
  const items = cat === "All" ? FAQS : FAQS.filter((f) => f.category === cat);

  return (
    <>
      <SeoHead title="Frequently Asked Questions | CodersDive" description="Practical answers about engagement, delivery, AI, ownership, and security at CodersDive." path="/faq"
        jsonLd={{ "@context":"https://schema.org", "@type":"FAQPage", mainEntity: FAQS.map((f) => ({ "@type":"Question", name: f.q, acceptedAnswer: { "@type":"Answer", text: f.a } })) }} />
      <section className="container-cd pt-20 md:pt-28 pb-12">
        <p className="mono text-foreground/45">/ FAQ</p>
        <h1 className="display-1 mt-6 max-w-5xl">Practical answers, not boilerplate.</h1>
      </section>
      <section className="container-cd pb-12">
        <div className="flex flex-wrap gap-2">
          {["All", ...cats].map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`mono px-4 h-9 rounded-full border transition-colors ${cat === c ? "bg-aqua text-ink border-aqua" : "border-foreground/20 text-foreground/70 hover:border-foreground/50"}`}>{c}</button>
          ))}
        </div>
      </section>
      <section className="container-cd pb-20"><FAQAccordion items={items.map((f) => ({ q: f.q, a: f.a }))} defaultOpen={0} /></section>
      <CTABand eyebrow="Still got questions?" title="Talk to us." primary={{ label: "Contact", href: "/contact" }} />
    </>
  );
}