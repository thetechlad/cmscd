import { Link } from "react-router-dom";
import SeoHead from "@/components/site/SeoHead";
import { ARTICLES } from "@/content/insights";

export default function ThankYou() {
  const related = ARTICLES.slice(0, 2);
  return (
    <>
      <SeoHead title="Thank you | CodersDive" description="Your enquiry has been received. We respond within one business day." path="/thank-you" noindex />
      <section className="container-cd pt-24 md:pt-32 pb-20">
        <p className="mono text-aqua">/ Received</p>
        <h1 className="display-1 mt-6 max-w-4xl">Thank you. We have your note.</h1>
        <p className="mt-8 text-lg text-foreground/70 max-w-2xl">You will hear from us within one business day. If something changes in the meantime, reply to the confirmation email and we will pick it up.</p>
        <div className="mt-8 flex gap-3"><Link to="/" className="btn btn-ghost">Back to home</Link></div>
      </section>
      <section className="section border-t border-foreground/10"><div className="container-cd"><p className="eyebrow">While you wait</p><h2 className="display-2 mt-5">Two pieces you might enjoy.</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">{related.map((a) => (
          <Link key={a.slug} to={`/insights/${a.category}/${a.slug}`} className="card-cd p-6"><p className="mono text-aqua">{a.category.replace(/-/g, " ")}</p><h3 className="font-serif text-2xl mt-3">{a.title}</h3><p className="text-foreground/65 mt-2">{a.excerpt}</p></Link>
        ))}</div></div></section>
    </>
  );
}