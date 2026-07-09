import Link from "next/link";

export default function Brand() {
  return (
    <Link
      href="/"
      className="flex flex-col leading-none"
      aria-label="La Chocolaterie Art Gallery — home"
    >
      <span className="text-lg font-semibold tracking-tight text-neutral-900 sm:text-xl">
        La Chocolaterie
      </span>
      <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.35em] text-[#8a5a3c]">
        Art Gallery
      </span>
    </Link>
  );
}
