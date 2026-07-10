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
  "linear-gradient(135deg,#efe1ce,#c8b49a)",
  "linear-gradient(135deg,#e3d6c2,#b9a98f)",
  "linear-gradient(135deg,#e8e3d7,#a7a394)",
  "linear-gradient(135deg,#ded5c6,#8b8377)",
  "linear-gradient(135deg,#e6ddd0,#9aa088)",
  "linear-gradient(135deg,#efe6d8,#bfb6a3)",
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
