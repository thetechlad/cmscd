import SeoHead from "@/components/site/SeoHead";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <>
      <SeoHead title="Contact CodersDive" description="Talk to our team about your product, platform, or AI initiative. We respond within one business day." path="/contact" />
      <section className="container-cd pt-20 md:pt-28 pb-16 grid grid-cols-12 gap-10">
        <div className="col-span-12 md:col-span-7">
          <p className="mono text-foreground/45">/ Contact</p>
          <h1 className="display-1 mt-6">Tell us what is on your mind.</h1>
          <p className="mt-8 text-lg text-foreground/70 max-w-xl">Use the project form for new engagements, or email us directly. We respond within one business day.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/start-a-project" className="btn btn-primary">Start a project <ArrowUpRight className="w-4 h-4" /></Link>
            <a href="https://cal.com/tayyabirfan/15min" className="btn btn-ghost">Book a discovery call</a>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 card-cd p-7 space-y-6">
          <div><p className="mono text-foreground/45">Email</p><a href="mailto:hello@codersdive.com" className="font-serif text-2xl hover:text-aqua">hello@codersdive.com</a></div>
          <div><p className="mono text-foreground/45">Discovery call</p><a href="https://cal.com/tayyabirfan/15min" className="font-serif text-2xl hover:text-aqua">cal.com/tayyabirfan</a></div>
          <div><p className="mono text-foreground/45">Privacy</p><p className="text-foreground/70 text-sm">We only use what you share to respond to your enquiry. See our <Link to="/privacy" className="underline">privacy notice</Link>.</p></div>
        </div>
      </section>
    </>
  );
}