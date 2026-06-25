import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mono text-foreground/50 flex items-center flex-wrap gap-1.5">
      {items.map((it, i) => (
        <span key={i} className="inline-flex items-center gap-1.5">
          {it.href ? <Link to={it.href} className="hover:text-aqua">{it.label}</Link> : <span className="text-foreground/80">{it.label}</span>}
          {i < items.length - 1 && <ChevronRight className="w-3 h-3 opacity-50" />}
        </span>
      ))}
    </nav>
  );
}