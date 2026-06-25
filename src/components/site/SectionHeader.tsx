import type { ReactNode } from "react";

type Props = { number?: string; eyebrow?: string; title: ReactNode; body?: ReactNode; align?: "left" | "center"; light?: boolean };

export default function SectionHeader({ number, eyebrow, title, body, align = "left" }: Props) {
  return (
    <div className={`grid grid-cols-12 gap-8 ${align === "center" ? "text-center" : ""}`}>
      <div className={`${align === "center" ? "col-span-12 max-w-3xl mx-auto" : "col-span-12 md:col-span-7"}`}>
        {number && <p className="section-number mb-4">{number}</p>}
        {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
        <h2 className="display-2">{title}</h2>
        {body && <p className="mt-5 text-lg text-foreground/65">{body}</p>}
      </div>
    </div>
  );
}