const clients = [
  { name: "NookTravel", url: "https://nooktravel.space" },
  { name: "Suuper",     url: "https://suuper.cc" },
  { name: "Plural Dynamics", url: "https://pluraldynamics.com" },
  { name: "Modisoft",   url: "https://modisoft.com" },
  { name: "Kidan",      url: "https://kidan.cc" },
];

const LogoStrip = () => {
  return (
    <section className="bg-background-soft border-y border-border py-16">
      <div className="container-tight">
        <p className="text-center text-muted-soft italic text-sm mb-10">
          Building alongside ambitious teams
        </p>
        <div className="overflow-hidden">
          <div className="flex md:justify-around items-center gap-12 md:gap-0 marquee-track md:animate-none whitespace-nowrap md:whitespace-normal">
            {[...clients, ...clients].map((c, i) => (
              <a
                key={i}
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="display font-bold text-lg md:text-xl tracking-[0.15em] text-muted-foreground/70 hover:text-foreground hover:scale-105 transition-all shrink-0 uppercase"
              >
                {c.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
