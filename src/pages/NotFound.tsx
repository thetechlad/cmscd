import { Link } from "react-router-dom";
import SeoHead from "@/components/site/SeoHead";

const LINKS = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "Start a project", href: "/start-a-project" },
];

export default function NotFound() {
  return (
    <>
      <SeoHead title="Page not found | CodersDive" description="This route did not ship. Find your way back to Services, Work, Insights, or Start a project." path="/404" noindex />
      <section className="container-cd pt-24 md:pt-32 pb-24 relative">
        <div className="absolute inset-0 grid-hairline opacity-50" aria-hidden />
        <div className="relative">
          <p className="mono text-aqua">/ 404</p>
          <h1 className="display-1 mt-6 max-w-3xl">This route did not ship.</h1>
          <p className="mt-6 text-lg text-foreground/70 max-w-xl">The page you tried to reach is not here. It might have moved, or it might never have existed.</p>
          <div className="mt-10 grid sm:grid-cols-2 gap-3 max-w-xl">
            {LINKS.map((l) => <Link key={l.href} to={l.href} className="card-cd p-5 hover:border-aqua/50"><span className="font-serif text-xl">{l.label} →</span></Link>)}
          </div>
        </div>
      </section>
    </>
  );
}