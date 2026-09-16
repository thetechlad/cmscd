import type { LucideIcon } from "lucide-react";

interface Deliverable {
  title: string;
  description: string;
  icon?: LucideIcon;
}

interface DeliverablesGridProps {
  heading: string;
  items: Deliverable[];
  dark?: boolean;
}

const DeliverablesGrid = ({ heading, items, dark = false }: DeliverablesGridProps) => (
  <section className={`section ${dark ? "on-dark bg-background" : "bg-background"}`}>
    <div className="container-tight">
      <h2 className="display text-2xl md:text-4xl font-bold leading-tight mb-10">{heading}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item) => (
          <div key={item.title} className="card-light p-6">
            {item.icon && (
              <div className="w-10 h-10 rounded-lg bg-accent-blue-soft flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-accent-blue-ink" />
              </div>
            )}
            <h3 className="display text-base font-bold mb-2 leading-snug">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-[1.6]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DeliverablesGrid;
