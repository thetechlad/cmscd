import Reveal from "./Reveal";

import brandBesoinde from "@/assets/portfolio/brand-besoinde.jpg";
import brandT4 from "@/assets/portfolio/brand-t4folsom.jpg";
import brandNeptune from "@/assets/portfolio/brand-neptune.jpg";
import brandKairo from "@/assets/portfolio/brand-kairo.jpg";
import brandNourah from "@/assets/portfolio/brand-nourah.jpg";
import brandWforv from "@/assets/portfolio/brand-wforv.jpg";

import logo1 from "@/assets/portfolio/logo-1.jpg";
import logo2 from "@/assets/portfolio/logo-2.jpg";
import logo3 from "@/assets/portfolio/logo-3.jpg";

import social1 from "@/assets/portfolio/social-1.jpg";
import print1 from "@/assets/portfolio/print-1.jpg";

import web1 from "@/assets/portfolio/web-1.jpg";
import web2 from "@/assets/portfolio/web-2.jpg";
import web3 from "@/assets/portfolio/web-3.jpg";
import web4 from "@/assets/portfolio/web-4.jpg";

type BrandCase = {
  name: string;
  industry: string;
  image: string;
  desc: string;
  colors: string[];
};

const brandCases: BrandCase[] = [
  {
    name: "Besoin De",
    industry: "Cosmetics",
    image: brandBesoinde,
    desc: "An online hair-care brand offering a Honey & Vitamin B enriched shampoo and conditioner duo, formulated to nourish, strengthen and add shine while staying free of sulfates and harsh chemicals.",
    colors: ["#C8B6E6", "#B59FDC", "#7E5BC2", "#A8D5A2", "#D9D4EA"],
  },
  {
    name: "T4 Folsom",
    industry: "Restaurant",
    image: brandT4,
    desc: "A woman-owned bubble tea café in Folsom, CA serving refreshing teas, milk teas, smoothies, bobas and snacks. Bright, playful identity built for an in-person experience.",
    colors: ["#2BB8B0", "#F95068", "#F4A438", "#6EAD43", "#D9752E"],
  },
  {
    name: "Neptune Tech",
    industry: "Consumer Tech",
    image: brandNeptune,
    desc: "Premium headphones delivering powerful, immersive sound with comfort and style. A sleek, dark identity that signals high-fidelity audio and modern design.",
    colors: ["#000000", "#6A01DA", "#0E0E14"],
  },
  {
    name: "KAIRO",
    industry: "Sports Audio",
    image: brandKairo,
    desc: "A performance-driven sports audio brand for athletes who demand focus, endurance and clarity. The identity reflects energy, motion and precision built for both performance and lifestyle.",
    colors: ["#C6F230", "#13261F", "#0E1A14"],
  },
  {
    name: "Nourah",
    industry: "Jewellery",
    image: brandNourah,
    desc: "A refined silver jewellery brand embodying elegance, purity and timeless femininity. Minimal sophistication and modern grace for individuals who appreciate subtle luxury.",
    colors: ["#B18D55", "#CCBFAF", "#E2E0DF", "#35332F"],
  },
  {
    name: "W for V Media",
    industry: "Video Production",
    image: brandWforv,
    desc: "A Malaysia-based video production agency focused on crafting visually compelling, story-driven content. A bold, geometric mark with high-energy color.",
    colors: ["#000000", "#36BEB4", "#F05363"],
  },
];

const stripItems = [
  { label: "Logofolio", image: logo1 },
  { label: "Logofolio", image: logo2 },
  { label: "Logofolio", image: logo3 },
];

const webItems = [web2, web1, web4, web3];

const BrandWork = () => (
  <>
    {/* Brand identity cases */}
    <Reveal as="section" className="bg-background-soft section">
      <div className="container-tight">
        <div className="text-center mb-14 reveal-child">
          <div className="label-eyebrow mb-6 justify-center" style={{ display: "inline-flex" }}>
            Brand Identity
          </div>
          <h2 className="display text-[30px] md:text-[44px] lg:text-[56px] font-bold leading-[1.05] mb-5">
            Identities built to be <span style={{ color: "hsl(var(--accent-blue-ink))" }}>remembered</span>.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Full visual systems including logo, palette, packaging and collateral, crafted end to end for founders across cosmetics, food, tech and luxury.
          </p>
        </div>

        <div className="space-y-6">
          {brandCases.map((c, i) => (
            <div
              key={c.name}
              className={`reveal-child grid lg:grid-cols-2 gap-6 lg:gap-10 items-center rounded-2xl bg-card border border-border p-5 md:p-7 ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
              style={{ boxShadow: "0 10px 40px -22px rgba(0,0,0,0.18)" }}
            >
              <div className="overflow-hidden rounded-xl bg-background-soft">
                <img
                  src={c.image}
                  alt={`${c.name} brand identity`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:px-2">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full"
                    style={{ background: "hsl(var(--accent-blue-soft))", color: "hsl(var(--accent-blue-ink))" }}
                  >
                    {c.industry}
                  </span>
                </div>
                <h3 className="display text-3xl md:text-4xl font-bold mb-4">{c.name}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl">{c.desc}</p>
                <div className="flex items-center gap-2">
                  {c.colors.map((col) => (
                    <span
                      key={col}
                      className="w-9 h-9 rounded-lg border border-border"
                      style={{ background: col }}
                      title={col}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>

    {/* Logofolio */}
    <Reveal as="section" className="bg-background section">
      <div className="container-tight">
        <div className="mb-12 reveal-child">
          <div className="label-eyebrow mb-6">Logofolio</div>
          <h2 className="display text-[28px] md:text-[42px] font-bold leading-[1.05] max-w-3xl">
            A hundred marks, one standard of <span style={{ color: "hsl(var(--accent-blue-ink))" }}>craft</span>.
          </h2>
        </div>
        <div className="space-y-6">
          {stripItems.map((s, i) => (
            <div
              key={i}
              className="reveal-child overflow-hidden rounded-2xl border border-border bg-card p-4 md:p-6"
              style={{ boxShadow: "0 10px 40px -24px rgba(0,0,0,0.15)" }}
            >
              <img src={s.image} alt="Logo design collection" loading="lazy" className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </Reveal>

    {/* Social + Print */}
    <Reveal as="section" className="bg-background-soft section">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="reveal-child rounded-2xl border border-border bg-card p-5 md:p-7" style={{ boxShadow: "0 10px 40px -24px rgba(0,0,0,0.15)" }}>
            <div className="label-eyebrow mb-4">Social Media</div>
            <h3 className="display text-2xl md:text-3xl font-bold mb-5">Scroll-stopping content systems.</h3>
            <img src={social1} alt="Social media post designs" loading="lazy" className="w-full rounded-xl" />
          </div>
          <div className="reveal-child rounded-2xl border border-border bg-card p-5 md:p-7" style={{ boxShadow: "0 10px 40px -24px rgba(0,0,0,0.15)" }}>
            <div className="label-eyebrow mb-4">Print &amp; Packaging</div>
            <h3 className="display text-2xl md:text-3xl font-bold mb-5">Tangible brand, done right.</h3>
            <img src={print1} alt="Print and packaging design" loading="lazy" className="w-full rounded-xl" />
          </div>
        </div>
      </div>
    </Reveal>

    {/* Websites */}
    <Reveal as="section" className="bg-background section">
      <div className="container-tight">
        <div className="mb-12 reveal-child">
          <div className="label-eyebrow mb-6">Website Design</div>
          <h2 className="display text-[28px] md:text-[42px] font-bold leading-[1.05] max-w-3xl">
            Sites that look the part and <span style={{ color: "hsl(var(--accent-blue-ink))" }}>convert</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {webItems.map((w, i) => (
            <div
              key={i}
              className="reveal-child overflow-hidden rounded-2xl border border-border bg-background-soft p-4 md:p-6"
              style={{ boxShadow: "0 10px 40px -24px rgba(0,0,0,0.15)" }}
            >
              <img src={w} alt="Website design mockup" loading="lazy" className="w-full rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  </>
);

export default BrandWork;
