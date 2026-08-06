type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  // Short line sitting between the title and the description — for a standing
  // promise ("Price upon request…") rather than a description of the section.
  tagline?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
};

// Reusable section heading: small eyebrow label, title, optional tagline and
// description.
export default function SectionHeading({
  eyebrow,
  title,
  tagline,
  description,
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
      {/* Deliberately a step below the description at every breakpoint — the
          description scales up from sm, so a flat text-sm here ends up the
          same size as it on phones and stops reading as a tagline. */}
      {tagline && (
        <p className="text-balance text-xs italic text-muted sm:text-sm">
          {tagline}
        </p>
      )}
      {description && (
        <p className="text-sm text-text-secondary sm:text-base lg:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
