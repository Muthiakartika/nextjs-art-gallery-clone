import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";

/**
 * MAPPING KATEGORI PRODUK KE FOLDER GAMBAR
 * ==========================================
 * Menghubungkan setiap kategori produk dengan:
 * 1. Folder tempat gambar disimpan (di /public/img/)
 * 2. Pola nama file gambar yang akan digunakan
 *
 * Format file gambar: "[pattern] [nomor].png"
 * Contoh:
 * - paintings: "painting images 1.png", "painting images 2.png", dst
 * - silver-jewelry: "silver jewelry image 1.png", "silver jewelry image 2.png", dst
 * - handcraft: "handcraft image 1.png", "handcraft image 2.png", dst
 */
const CATEGORY_IMAGE_MAP: Record<string, { folder: string; pattern: string }> =
  {
    paintings: { folder: "painting", pattern: "painting images" },
    "silver-jewelry": { folder: "silver", pattern: "silver jewelry image" },
    handcraft: { folder: "handcraft", pattern: "handcraft image" },
  };

/**
 * PENGECUALIAN EKSTENSI FILE
 * ==========================
 * Default semua kategori adalah .png (lihat `imagePath` di bawah). Kalau ada
 * karya yang dikirim ulang dalam format lain, daftarkan di sini alih-alih
 * mengkonversi paksa file-nya — supaya file yang di-render benar-benar file
 * yang dikirim, bukan hasil konversi yang bisa menurunkan kualitas.
 *
 * Kunci: "<slug kategori>/<nomor gambar>" — nomor gambar 1-based, sama dengan
 * yang dipakai membangun nama file (index produk + 1).
 */
const IMAGE_EXT_OVERRIDES: Record<string, string> = {
  "paintings/16": "jpg", // "Coral Transition" — dikirim ulang sebagai .jpg
};

/**
 * KOMPONEN KARTU PRODUK (ProductCard)
 * ===================================
 * Komponen reusable yang menampilkan satu item produk dalam bentuk kartu.
 * Digunakan di:
 * - Homepage (kategori preview)
 * - Halaman /gallery (overview semua kategori)
 * - Halaman /products/[category] (daftar produk per kategori)
 *
 * Props:
 * - product: Data produk (judul, artis, medium, harga, dll)
 * - index: Nomor urut produk (0-based) untuk mapping ke gambar
 * - category: Slug kategori (paintings, silver-jewelry, handcraft)
 * - priority: opsional — kalau tidak diisi, default-nya `index < 3`. Itu
 *   cuma benar kalau `index` juga sama dengan posisi render di grid (mis.
 *   GalleryCategorySection / ProductCategoryPage, yang me-render
 *   `category.items` apa adanya). Untuk grid yang menyusun ULANG/memilih
 *   subset produk (mis. NewArrivals, yang `index`-nya adalah posisi produk
 *   di KATALOG, bukan di grid itu sendiri), caller WAJIB kirim `priority`
 *   sendiri berdasarkan posisi render-nya — kalau tidak, next/image bisa
 *   salah nge-lazy-load gambar yang sebenarnya sudah kelihatan di layar.
 */
export default function ProductCard({
  product,
  index = 0,
  category = "paintings",
  priority,
}: {
  product: Product;
  index?: number;
  category?: string;
  priority?: boolean;
}) {
  // Ambil konfigurasi folder dan pola nama file untuk kategori yang dipilih
  const categoryMap = CATEGORY_IMAGE_MAP[category] || CATEGORY_IMAGE_MAP.paintings;

  // Konversi index (0-based) ke nomor urut gambar (1-based)
  // Contoh: index 0 → imageNum "1", index 5 → imageNum "6"
  const imageNum = (index + 1).toString();

  // Bangun path gambar lengkap dari folder public
  // Contoh hasil: "/img/painting/painting images 1.png"
  const ext = IMAGE_EXT_OVERRIDES[`${category}/${imageNum}`] ?? "png";
  const imagePath = `/img/${categoryMap.folder}/${categoryMap.pattern} ${imageNum}.${ext}`;

  return (
    <Link
      href={`/products/${category}`}
      className="group flex flex-col"
    >
      {/* Bingkai putih 3px di sekeliling foto produk, seperti bingkai foto
          fisik. Ditaruh di wrapper (bukan di Placeholder) supaya hanya
          gambar produk yang punya bingkai ini, bukan semua pemakaian
          Placeholder di halaman lain (Collections, BrandStory, About). */}
      <div className="relative overflow-hidden rounded-none border-[3px] border-white aspect-[3/4]">
        <Image
          src={imagePath}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority ?? index < 3}
        />
      </div>
      <div className="mt-4 flex flex-col gap-1 text-center">
        <span className="text-[11px] uppercase tracking-widest text-muted">
          {product.medium}
        </span>
        <h3 className="text-sm font-medium text-text transition-colors group-hover:text-accent sm:text-base">
          {product.title}
        </h3>
        <span className="text-sm text-muted">by {product.artist}</span>
        {/* <span className="mt-1 text-sm font-semibold text-text">
          {formatPrice(product.price)}
        </span> */}
      </div>
    </Link>
  );
}
