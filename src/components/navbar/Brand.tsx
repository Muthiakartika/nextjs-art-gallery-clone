import Link from "next/link";

export default function Brand() {
  return (
    <Link
      href="/"
      className="flex flex-col leading-none"
      aria-label="Satori Art Gallery — home"
    >
      <span className="text-lg font-semibold tracking-tight text-text sm:text-xl">
        Satori
      </span>
      <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.35em] text-accent">
        Art Gallery
      </span>
    </Link>
  );
}
