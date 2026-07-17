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
      {/* Di mobile & tablet (di bawah `lg`, saat nav desktop masih
          disembunyikan — lihat DesktopNav.tsx), tracking huruf dipersempit
          + `whitespace-nowrap` supaya "ART GALLERY" tidak melebar lalu
          pecah jadi 2 baris sendiri (total 3 baris dengan "Satori"). Mulai
          `lg` (saat tampilan desktop aktif), dikembalikan persis ke
          tracking & ukuran semula supaya tampilan desktop tidak berubah. */}
      <span className="mt-0.5 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.08em] text-accent lg:tracking-[0.35em]">
        Art Gallery
      </span>
    </Link>
  );
}
