import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface Props {
  headline?: string;
  support?: string;
  action?: string;
}

const CtaRibbon = ({
  headline = "Bring us the messy version.",
  support = "Tell us what's slow, broken, unclear, or strategically important. We'll help turn it into a sensible plan.",
  action = "Start a project",
}: Props) => (
  <section className="bg-background section">
    <div className="container-tight">
      <div className="relative overflow-hidden rounded-3xl px-8 py-16 md:px-16 md:py-24 text-center bg-mesh-soft border border-border">
        <div className="grid-lines absolute inset-0" aria-hidden="true" />
        <div className="relative">
          <h2 className="display text-3xl md:text-5xl font-bold leading-[1.05] max-w-3xl mx-auto">
            {headline}
          </h2>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto text-base md:text-lg leading-[1.6]">
            {support}
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-9">
            <Link to="/start-a-project" className="btn-blue btn-shine h-12 px-7">
              {action} <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="https://cal.com/tayyabirfan/15min"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary h-12"
            >
              Book a discovery call
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CtaRibbon;
