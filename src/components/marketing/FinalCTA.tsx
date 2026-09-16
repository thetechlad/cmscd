import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";

const EMAIL = "codersdive@gmail.com";

interface FinalCTAProps {
  heading: string;
  body: string;
  primaryCta: { label: string; to: string };
}

const FinalCTA = ({ heading, body, primaryCta }: FinalCTAProps) => (
  <section className="on-dark bg-background section">
    <div className="container-tight text-center max-w-2xl mx-auto">
      <h2 className="display text-2xl md:text-4xl font-bold leading-tight mb-4">{heading}</h2>
      <p className="text-muted-foreground leading-[1.6] mb-8">{body}</p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link to={primaryCta.to} className="btn-blue h-12 px-7">
          {primaryCta.label} <ArrowRight className="w-4 h-4" />
        </Link>
        <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <Mail className="w-4 h-4" /> {EMAIL}
        </a>
      </div>
    </div>
  </section>
);

export default FinalCTA;
