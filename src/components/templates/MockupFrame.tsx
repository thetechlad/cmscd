import { ReactNode } from "react";

interface Props {
  variant?: "browser" | "phone";
  url?: string;
  children: ReactNode;
  className?: string;
}

/**
 * MockupFrame — wraps any visual (image or animated CoverArt) in a realistic
 * browser or phone chrome so illustrations read as product screenshots and add
 * tangible product-style depth to a page.
 */
const MockupFrame = ({ variant = "browser", url = "codersdive.app", children, className = "" }: Props) => {
  if (variant === "phone") {
    return (
      <div className={`relative mx-auto w-full max-w-[240px] ${className}`}>
        <div className="rounded-[2rem] border border-border bg-background shadow-[0_24px_60px_-20px_rgba(0,0,0,0.28)] p-2.5">
          <div className="relative rounded-[1.5rem] overflow-hidden aspect-[9/19] bg-background-soft">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-foreground rounded-b-2xl z-10" />
            {children}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={`rounded-2xl border border-border bg-background shadow-[0_24px_60px_-24px_rgba(0,0,0,0.25)] overflow-hidden ${className}`}>
      <div className="flex items-center gap-2 px-4 h-10 border-b border-border bg-background-soft">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <div className="ml-3 flex-1 h-6 rounded-md bg-foreground/5 border border-border flex items-center px-3">
          <span className="text-[11px] text-muted-foreground truncate font-mono">{url}</span>
        </div>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
};

export default MockupFrame;
