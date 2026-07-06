import CoverArt from "@/components/templates/CoverArt";
import { getPageImage } from "@/data/pageImages";

interface Props {
  slug: string;
  category?: string;
  label?: string;
  caption?: string;
  aspect?: string;
  className?: string;
}

/**
 * FeatureImage — an in-body visual block that balances long text sections with
 * imagery. Uses the generated page illustration when present, otherwise falls
 * back to the animated CoverArt so every page keeps a strong visual rhythm.
 */
const FeatureImage = ({
  slug,
  category,
  label,
  caption,
  aspect = "aspect-[16/9]",
  className = "",
}: Props) => {
  const img = getPageImage(slug);
  return (
    <figure className={className}>
      <div className={`relative overflow-hidden rounded-3xl glow-ring ${aspect} w-full`}>
        {img ? (
          <img
            src={img}
            alt={label || caption || slug}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          <CoverArt seed={`${slug}-alt`} category={category} label={label} className="w-full h-full" />
        )}
      </div>
      {caption && (
        <figcaption className="text-sm text-muted-foreground mt-4 max-w-xl leading-[1.6]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default FeatureImage;
