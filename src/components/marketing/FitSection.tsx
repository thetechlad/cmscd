import { Check, X } from "lucide-react";

interface FitSectionProps {
  heading: string;
  fitIf: string[];
  notFitIf: string[];
}

const FitSection = ({ heading, fitIf, notFitIf }: FitSectionProps) => (
  <section className="bg-background section">
    <div className="container-tight">
      <h2 className="display text-2xl md:text-4xl font-bold leading-tight mb-10">{heading}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card-light p-7">
          <h3 className="display text-base font-bold mb-5">This is for you if</h3>
          <ul className="space-y-3">
            {fitIf.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <Check className="w-4 h-4 text-accent-blue-ink shrink-0 mt-0.5" />
                <span className="text-foreground/90">{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-light p-7">
          <h3 className="display text-base font-bold mb-5">This isn't for you if</h3>
          <ul className="space-y-3">
            {notFitIf.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <X className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                <span className="text-foreground/90">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default FitSection;
