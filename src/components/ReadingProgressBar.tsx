const ReadingProgressBar = ({ progress }: { progress: number }) => (
  <div className="fixed top-0 inset-x-0 h-1 z-[60] bg-transparent" aria-hidden="true">
    <div
      className="h-full transition-[width] duration-150 ease-out motion-reduce:transition-none"
      style={{ width: `${progress}%`, background: "hsl(var(--accent-blue))" }}
    />
  </div>
);

export default ReadingProgressBar;
