import Image from "next/image";
import { dummyImageUrl } from "@/lib/dummyImage";

type Aspect = "portrait" | "landscape" | "wide" | "square";

type PlaceholderProps = {
  label?: string;
  aspect?: Aspect;
  seed?: number;
  className?: string;
  rounded?: string;
  // Kata kunci tema foto (mis. "painting,canvas"), diteruskan ke
  // dummyImageUrl supaya foto yang muncul relevan dengan isi kartu
  // (produk lukisan, perak, dst), bukan foto acak. Default-nya di
  // dummyImageUrl sudah bertema "art,painting,gallery".
  tags?: string;
};

const aspects: Record<Aspect, string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
  square: "aspect-square",
};

// Ukuran (piksel) yang diminta ke layanan dummy image untuk tiap rasio
// aspek, supaya foto yang dikembalikan sudah mendekati proporsi wadahnya
// (mengurangi crop kasar dari `object-cover`).
const sizes: Record<Aspect, { w: number; h: number }> = {
  portrait: { w: 600, h: 800 },
  landscape: { w: 800, h: 600 },
  wide: { w: 960, h: 540 },
  square: { w: 700, h: 700 },
};

// Placeholder / dummy image untuk foto produk, koleksi, studio, dll yang
// belum punya foto asli (project ini tidak punya backend/CMS beneran).
// Lihat dummyImageUrl() di src/lib/dummyImage.ts untuk detail sumbernya.
export default function Placeholder({
  label,
  aspect = "portrait",
  seed = 0,
  className = "",
  rounded = "rounded-none",
  tags,
}: PlaceholderProps) {
  const { w, h } = sizes[aspect];
  const src = dummyImageUrl(seed, w, h, tags);

  return (
    <div
      className={`relative overflow-hidden ${aspects[aspect]} ${rounded} ${className}`}
    >
      {/* `fill` membuat gambar mengisi seluruh div induk (yang sudah
          punya rasio aspek lewat class `aspect-*` di atas), lalu
          `object-cover` men-crop foto secara proporsional tanpa gepeng. */}
      <Image
        src={src}
        alt={label ?? "Dummy artwork placeholder"}
        fill
        sizes="(min-width: 1024px) 25vw, 50vw"
        className="object-cover"
      />
      {/* Garis tipis putih transparan di dalam foto, sekadar aksen visual
          menyerupai mat/bingkai foto. Murni dekoratif, tidak menahan klik. */}
      <div
        className={`pointer-events-none absolute inset-3 border border-white/40 ${rounded}`}
      />
    </div>
  );
}
