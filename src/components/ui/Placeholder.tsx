type Aspect = "portrait" | "landscape" | "wide" | "square";

type PlaceholderProps = {
  label?: string;
  aspect?: Aspect;
  seed?: number;
  className?: string;
  rounded?: string;
};

const aspects: Record<Aspect, string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
  square: "aspect-square",
};

// Warm gradient swatches used while real artwork images are unavailable.
const gradients = [
  "linear-gradient(135deg,#e9dfd3,#c3a988)",
  "linear-gradient(135deg,#d9c7b8,#a98e77)",
  "linear-gradient(135deg,#e3d5c8,#b89b86)",
  "linear-gradient(135deg,#efe7dc,#c9b39c)",
  "linear-gradient(135deg,#d8c3b0,#8a5a3c)",
  "linear-gradient(135deg,#e7ddd0,#9c8064)",
];

// Decorative placeholder standing in for a missing image. Keeps a subtle
// inner "frame" border and an optional centered label.
export default function Placeholder({
  label,
  aspect = "portrait",
  seed = 0,
  className = "",
  rounded = "rounded-none",
}: PlaceholderProps) {
  const background = gradients[seed % gradients.length];

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${aspects[aspect]} ${rounded} ${className}`}
      style={{ backgroundImage: background }}
    >
      <div className={`pointer-events-none absolute inset-3 border border-white/40 ${rounded}`} />
      {label && (
        <span className="relative px-4 text-center text-sm font-medium uppercase tracking-widest text-white/90">
          {label}
        </span>
      )}
    </div>
  );
}
