type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  // Optional line between the title and the description — for a standing
  // promise ("Price upon request…") rather than a description of the section.
  tagline?: string;
  description?: string;
  // Style overrides. These REPLACE the defaults rather than being appended:
  // two competing text-* utilities on one element are resolved by stylesheet
  // order, not by which came last in the class string, so appending would win
  // or lose unpredictably. Only NewArrivals passes these.
  taglineClassName?: string;
  descriptionClassName?: string;
  align?: "center" | "left";
  className?: string;
};

const DEFAULT_TAGLINE = "text-sm italic text-muted";
const DEFAULT_DESCRIPTION = "text-sm sm:text-base lg:text-lg";

// Reusable section heading: small eyebrow label, title, optional tagline and
// description.
export default function SectionHeading({
  eyebrow,
  title,
  tagline,
  description,
  taglineClassName = DEFAULT_TAGLINE,
  descriptionClassName = DEFAULT_DESCRIPTION,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "items-center text-center mx-auto"
      : "items-start text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment} ${className}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          {eyebrow}
        </span>
      )}
      {/* text-balance evens out the line lengths so a heading that wraps on
          narrow phones doesn't leave a single orphan word on the last line. */}
      <h2 className="text-balance font-semibold tracking-tight text-text">
        {title}
      </h2>
      {tagline && (
        <p className={`text-balance ${taglineClassName}`}>{tagline}</p>
      )}
      {description && (
        <p className={`text-text-secondary ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </div>
  );
}
