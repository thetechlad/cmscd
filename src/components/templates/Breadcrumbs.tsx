import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  label: string;
  to?: string;
}

const Breadcrumbs = ({ items }: { items: Crumb[] }) => (
  <nav aria-label="Breadcrumb" className="mb-7">
    <ol className="flex flex-wrap items-center gap-1.5 text-[12px] text-muted-foreground">
      {items.map((c, i) => (
        <li key={i} className="flex items-center gap-1.5">
          {c.to ? (
            <Link to={c.to} className="hover:text-accent-blue transition-colors">
              {c.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium" aria-current="page">
              {c.label}
            </span>
          )}
          {i < items.length - 1 && <ChevronRight className="w-3 h-3 opacity-50" aria-hidden="true" />}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumbs;
