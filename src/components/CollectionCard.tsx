import Link from "next/link";
import Image from "next/image";
import type { Collection } from "@/data/collections";

/**
 * MAPPING KATEGORI KE GAMBAR HERO UNTUK COLLECTION CARDS
 * =====================================================
 * Setiap kategori memiliki gambar hero yang akan ditampilkan
 * sebagai background di kartu koleksi (collection cards).
 *
 * Gambar hero ini sama dengan yang digunakan di Hero section slideshow,
 * untuk menjaga konsistensi visual di seluruh halaman.
 */
const COLLECTION_IMAGE_MAP: Record<string, string> = {
  paintings: "/img/hero/hero painting 2.jpg",
  "silver-jewelry": "/img/hero/hero silver 1.jpg",
  handcraft: "/img/hero/hero craft  1.jpg",
};

// Reusable collection tile with an image, gradient scrim, and overlaid text.
export default function CollectionCard({
  collection,
  index = 0,
}: {
  collection: Collection;
  index?: number;
}) {
  const imagePath = COLLECTION_IMAGE_MAP[collection.id] || "/img/hero/hero painting 1.jpg";

  return (
    <Link
      href={collection.href}
      className="group relative block overflow-hidden rounded-none border-[3px] border-white aspect-video"
    >
      <Image
        src={imagePath}
        alt={collection.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="text-lg font-semibold text-white">{collection.title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-white/80">
          {collection.description}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-white">
          Explore <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
