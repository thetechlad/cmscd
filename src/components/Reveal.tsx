import { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

interface Props {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
  threshold?: number;
  id?: string;
}

const Reveal = ({ children, className = "", as = "div", threshold = 0.15, id }: Props) => {
  const { ref, visible } = useReveal<HTMLDivElement>(threshold);
  const Tag = as as any;
  return (
    <Tag ref={ref} id={id} className={`reveal-section ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </Tag>
  );
};

export default Reveal;
