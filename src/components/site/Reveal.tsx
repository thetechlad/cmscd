import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = { children: ReactNode; className?: string; stagger?: boolean; as?: keyof JSX.IntrinsicElements };

export default function Reveal({ children, className = "", stagger, as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) { setSeen(true); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }),
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const cls = `${stagger ? "reveal-stagger" : "reveal"} ${seen ? "in" : ""} ${className}`.trim();
  const Comp = Tag as any;
  return <Comp ref={ref as any} className={cls}>{children}</Comp>;
}