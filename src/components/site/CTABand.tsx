import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

type Props = { eyebrow?: string; title: string; body?: string; primary?: { label: string; href: string }; secondary?: { label: string; href: string } };

export default function CTABand({ eyebrow = "Next step", title, body, primary = { label: "Start a project", href: "/start-a-project" }, secondary }: Props) {
  return (
    <section className="section border-t border-foreground/10">
      <div className="container-cd grid grid-cols-12 gap-8 items-end">
        <div className="col-span-12 md:col-span-8">
          <p className="eyebrow mb-6">{eyebrow}</p>
          <h2 className="display-2">{title}</h2>
          {body && <p className="mt-5 text-lg text-foreground/65 max-w-2xl">{body}</p>}
        </div>
        <div className="col-span-12 md:col-span-4 flex md:justify-end gap-3 flex-wrap">
          <Link to={primary.href} className="btn btn-primary">{primary.label} <ArrowUpRight className="w-4 h-4" /></Link>
          {secondary && <Link to={secondary.href} className="btn btn-ghost">{secondary.label}</Link>}
        </div>
      </div>
    </section>
  );
}