import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/templates/Breadcrumbs";

interface ServiceHeroProps {
  eyebrow: string;
  h1: string;
  subhead: string;
  primaryCta: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  proofStrip?: string;
  breadcrumbs: { label: string; to?: string }[];
}

const ServiceHero = ({ eyebrow, h1, subhead, primaryCta, secondaryCta, proofStrip, breadcrumbs }: ServiceHeroProps) => (
  <section className="bg-mesh pt-[140px] pb-16 border-b border-border">
    <div className="container-tight">
      <Breadcrumbs items={breadcrumbs} />
      <div className="label-eyebrow mb-6">{eyebrow}</div>
      <h1 className="display text-[34px] md:text-[52px] lg:text-[62px] font-bold leading-[1.05] max-w-3xl mb-6">
        {h1}
      </h1>
      <p className="text-muted-foreground text-lg leading-[1.6] max-w-2xl mb-8">{subhead}</p>
      <div className="flex flex-wrap items-center gap-3">
        <Link to={primaryCta.to} className="btn-blue h-12 px-6">
          {primaryCta.label} <ArrowRight className="w-4 h-4" />
        </Link>
        {secondaryCta && (
          <Link to={secondaryCta.to} className="btn-secondary h-12 px-6">
            {secondaryCta.label}
          </Link>
        )}
      </div>
      {proofStrip && <p className="text-sm text-muted-foreground mt-6">{proofStrip}</p>}
    </div>
  </section>
);

export default ServiceHero;
