const logos = ["NORTHWIND", "HELIO", "LOOP HEALTH", "ATLAS", "VANTAGE", "MERIDIAN"];

const LogoStrip = () => {
  return (
    <section className="bg-background-soft border-y border-border py-16">
      <div className="container-tight">
        <p className="text-center text-muted-soft italic text-sm mb-10">
          Trusted by ambitious teams at
        </p>
        <div className="overflow-hidden">
          <div className="flex md:justify-around items-center gap-12 md:gap-0 marquee-track md:animate-none whitespace-nowrap md:whitespace-normal">
            {[...logos, ...logos].map((l, i) => (
              <span
                key={i}
                className="display font-bold text-lg md:text-xl tracking-[0.15em] text-muted-foreground/70 grayscale shrink-0"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
