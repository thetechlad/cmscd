import { Fragment } from "react";

/**
 * Lightweight markdown renderer for CodersDive content.
 * Supports: ## / ### headings, ordered & unordered lists, and paragraphs.
 * Hard-wrapped source lines within a block are joined into a single paragraph.
 */
const renderInline = (text: string) => {
  // **bold** support
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) {
      return <strong key={i} className="font-semibold text-foreground">{p.slice(2, -2)}</strong>;
    }
    return <span key={i}>{p}</span>;
  });
};

const Markdown = ({ content }: { content: string }) => {
  const blocks = content.trim().split(/\n\s*\n/);

  return (
    <div className="space-y-6">
      {blocks.map((block, idx) => {
        const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
        if (lines.length === 0) return null;

        if (lines[0].startsWith("### ")) {
          return (
            <h3 key={idx} className="display text-lg md:text-xl font-bold mt-4 leading-snug">
              {lines[0].replace(/^###\s+/, "")}
            </h3>
          );
        }
        if (lines[0].startsWith("## ") || lines[0].startsWith("# ")) {
          return (
            <h2 key={idx} className="display text-xl md:text-2xl font-bold mt-6 leading-snug">
              {lines[0].replace(/^#+\s+/, "")}
            </h2>
          );
        }

        const isOrdered = lines.every((l) => /^\d+\.\s/.test(l));
        if (isOrdered) {
          return (
            <ol key={idx} className="space-y-3 list-none counter-reset">
              {lines.map((l, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground leading-[1.7]">
                  <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5" style={{ background: "hsl(var(--accent-blue-soft))", color: "hsl(var(--accent-blue))" }}>
                    {i + 1}
                  </span>
                  <span>{renderInline(l.replace(/^\d+\.\s/, ""))}</span>
                </li>
              ))}
            </ol>
          );
        }

        const isBullet = lines.every((l) => /^[-*]\s/.test(l));
        if (isBullet) {
          return (
            <ul key={idx} className="space-y-3">
              {lines.map((l, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground leading-[1.7]">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full mt-2.5" style={{ background: "hsl(var(--accent-blue))" }} />
                  <span>{renderInline(l.replace(/^[-*]\s/, ""))}</span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={idx} className="text-muted-foreground leading-[1.8] text-[15px] md:text-base">
            {renderInline(lines.join(" "))}
          </p>
        );
      })}
    </div>
  );
};

export default Markdown;
