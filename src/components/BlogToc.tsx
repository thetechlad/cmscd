import { extractHeadings } from "@/components/Markdown";
import { useScrollSpy } from "@/hooks/useScrollSpy";

/** Sticky desktop-only table of contents for a blog post body. Hidden if the
 * post has fewer than 2 headings. */
const BlogToc = ({ content }: { content: string }) => {
  const headings = extractHeadings(content);
  const activeId = useScrollSpy(headings.map((h) => h.id));

  if (headings.length < 2) return null;

  // Two-level structure (matches the working sticky pattern already used in
  // LegalPage.tsx): the outer <aside> is the grid item and stretches to the
  // content column's height (default grid align-items), giving the inner
  // sticky <nav> room to travel and pin at top-28 as the page scrolls.
  return (
    <aside className="hidden lg:block">
      <nav aria-label="Table of contents" className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto">
        <div className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground mb-3 font-medium">On this page</div>
        <ul className="space-y-1 border-l border-border">
          {headings.map((h) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className={`block py-1 text-sm leading-snug border-l-2 -ml-px transition-colors ${
                  h.level === 3 ? "pl-7" : "pl-4"
                } ${
                  activeId === h.id
                    ? "border-accent-blue text-foreground font-medium"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default BlogToc;
