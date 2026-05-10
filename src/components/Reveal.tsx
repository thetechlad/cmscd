import { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

interface Props {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
  threshold?: number;
}

const Reveal = ({ children, className = "", as = "div", threshold = 0.15 }: Props) => {
  const { ref, visible } = useReveal<HTMLDivElement>(threshold);
  const Tag = as as any;
  return (
    <Tag ref={ref} className={`reveal-section ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </Tag>
  );
};

export default Reveal;
