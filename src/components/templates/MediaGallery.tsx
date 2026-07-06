import CoverArt from "@/components/templates/CoverArt";
import MockupFrame from "@/components/templates/MockupFrame";
import { getPageImage } from "@/data/pageImages";

interface Props {
  slug: string;
  label?: string;
  eyebrow?: string;
  headline?: string;
  intro?: string;
  /** Short captions rendered under each screenshot tile. */
  shots?: string[];
}

/**
 * MediaGallery — a screenshot gallery combining the page's generated hero image
 * with framed, seeded CoverArt "screens" so every detail page shows a spread of
 * product surfaces (dashboard, mobile, detail views) instead of a single image.
 */
const MediaGallery = ({
  slug,
  label,
  eyebrow = "Product surfaces",
  headline = "A closer look at what we ship",
  intro,
  shots = ["Dashboard overview", "Detail & records", "Mobile experience"],
}: Props) => {
  const hero = getPageImage(slug);

  return (
    <section className="section">
      <div className="container-tight">
        <div className="max-w-2xl mb-10">
          <div className="label-eyebrow mb-5">{eyebrow}</div>
          <h2 className="display text-2xl md:text-4xl font-bold leading-tight">{headline}</h2>
          {intro && <p className="text-muted-foreground mt-5 leading-[1.7] text-[15px]">{intro}</p>}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {/* Primary browser mockup spans two columns */}
          <div className="lg:col-span-2 group">
            <MockupFrame url={`${slug}.codersdive.app`} className="transition-transform duration-500 group-hover:-translate-y-1">
              <div className="aspect-[16/10] w-full overflow-hidden">
                {hero ? (
                  <img src={hero} alt={`${label || slug} — ${shots[0]}`} loading="lazy" className="w-full h-full object-cover" />
                ) : (
                  <CoverArt seed={`${slug}-gallery-a`} label={shots[0]} className="w-full h-full" />
                )}
              </div>
            </MockupFrame>
            <p className="text-sm text-muted-foreground mt-3">{shots[0]}</p>
          </div>

          {/* Phone mockup */}
          <div className="group">
            <MockupFrame variant="phone" className="transition-transform duration-500 group-hover:-translate-y-1">
              <CoverArt seed={`${slug}-gallery-phone`} label={shots[2]} className="w-full h-full" />
            </MockupFrame>
            <p className="text-sm text-muted-foreground mt-3 text-center">{shots[2]}</p>
          </div>

          {/* Secondary screenshot callouts */}
          <div className="group">
            <MockupFrame url="reports" className="transition-transform duration-500 group-hover:-translate-y-1">
              <div className="aspect-[16/10]">
                <CoverArt seed={`${slug}-gallery-b`} label={shots[1]} className="w-full h-full" />
              </div>
            </MockupFrame>
            <p className="text-sm text-muted-foreground mt-3">{shots[1]}</p>
          </div>
          <div className="lg:col-span-2 group">
            <MockupFrame url="analytics" className="transition-transform duration-500 group-hover:-translate-y-1">
              <div className="aspect-[16/9]">
                <CoverArt seed={`${slug}-gallery-c`} label="Insights & analytics" className="w-full h-full" />
              </div>
            </MockupFrame>
            <p className="text-sm text-muted-foreground mt-3">Insights & analytics</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;
