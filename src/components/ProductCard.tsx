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
// `trimmed` menandai kategori yang file gambarnya sudah dipangkas sampai
// tepi karya lalu dikonversi ke .webp. Ini BUKAN sekadar preferensi tampilan:
// perlakuan mat putih + drop-shadow hanya masuk akal kalau tepi file = tepi
// karya. Pada file yang belum dipangkas, drop-shadow akan menempel di pinggir
// bingkai putih bawaan file dan terlihat seperti tidak ada bayangan sama
// sekali — persis masalah yang bikin ini dikerjakan.
//
// Baru `paintings` yang sudah dipangkas. Kalau nanti silver/handcraft mau
// diperlakukan sama, jalankan proses trim yang sama pada foldernya lalu ubah
// ext -> "webp" dan trimmed -> true di sini.
const CATEGORY_IMAGE_MAP: Record<
  string,
  { folder: string; pattern: string; ext: string; trimmed: boolean }
> = {
  paintings: {
    folder: "painting",
    pattern: "painting images",
    ext: "webp",
    trimmed: true,
  },
  "silver-jewelry": {
    folder: "silver",
    pattern: "silver jewelry image",
    ext: "png",
    trimmed: false,
  },
  handcraft: {
    folder: "handcraft",
    pattern: "handcraft image",
    ext: "png",
    trimmed: false,
  },
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
  const imagePath = `/img/${categoryMap.folder}/${categoryMap.pattern} ${imageNum}.${categoryMap.ext}`;

  return (
    <Link
      href={`/products/${category}`}
      className="group flex flex-col"
    >
      {/* Kartu putih polos sebagai mat; yang punya bayangan cuma lukisannya,
          jadi karyanya terlihat terangkat DI ATAS mat — bukan seluruh kartu
          yang melayang di atas halaman.

          Kuncinya `drop-shadow`, BUKAN `box-shadow`: box-shadow mengikuti
          kotak elemen, yaitu seluruh tile, sehingga bayangannya jatuh di
          tepi kartu putih. drop-shadow mengikuti piksel yang benar-benar
          tergambar — dan karena file WebP-nya sudah dipangkas sampai tepi
          karya, bayangannya persis memeluk lukisan. Ini juga alasan
          pemangkasan itu wajib: selama bingkai putih masih ter-render di
          dalam file, drop-shadow pun akan menempel di pinggir putih itu.

          Dua lapis: satu rapat (2/4) untuk ketegasan tepi, satu lebar (8/16)
          untuk sebaran lembut. Lapisan lebar menjangkau 24px sementara mat-nya
          16-20px, jadi ekornya memudar sedikit melewati tepi kartu ke krem —
          disengaja, karena memaksanya muat malah memotong gradasi jadi
          tampak seperti garis. Warna dari --color-text (#2b2926); hitam
          murni terlihat kotor keabuan di atas warna hangat.

          Putihnya datang dari `bg-white`, bukan dari bingkai bawaan file PNG
          — mat ini SIMETRIS di keempat sisi berapa pun rasio lukisannya,
          sedangkan putih bawaan file dulu tidak rata (ada yang cuma 37%
          berisi karya, sisanya melompong).

          Lebar mat dibuat lewat div dalam yang di-inset, BUKAN padding di
          kartu: padding tidak menggeser anak ber-position absolute
          (containing block-nya adalah padding box, yang sudah mencakup
          padding itu), dan next/image `fill` selalu absolute. */}
      {categoryMap.trimmed ? (
        <div className="relative aspect-[3/4] bg-white">
          <div className="absolute inset-4 sm:inset-5">
            <Image
              src={imagePath}
              alt={product.title}
              fill
              className="object-contain transition-[transform,filter] duration-500 group-hover:scale-[1.03] [filter:drop-shadow(0_2px_4px_rgba(43,41,38,0.22))_drop-shadow(0_8px_16px_rgba(43,41,38,0.3))] group-hover:[filter:drop-shadow(0_3px_6px_rgba(43,41,38,0.26))_drop-shadow(0_12px_22px_rgba(43,41,38,0.38))]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={priority ?? index < 3}
            />
          </div>
        </div>
      ) : (
        /* Kategori yang file-nya belum dipangkas tetap memakai tampilan lama:
           bingkai putih 3px + object-cover, tanpa bayangan. */
        <div className="relative aspect-[3/4] overflow-hidden rounded-none border-[3px] border-white">
          <Image
            src={imagePath}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority ?? index < 3}
          />
        </div>
      )}
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
