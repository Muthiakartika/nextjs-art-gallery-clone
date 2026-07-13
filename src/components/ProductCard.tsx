import Link from "next/link";
import Placeholder from "@/components/ui/Placeholder";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/data/products";

// Kata kunci foto dummy per kategori, supaya foto produk yang tampil
// relevan (lukisan untuk "paintings", perhiasan untuk "silver-jewelry",
// dst), bukan foto acak apa pun.
const CATEGORY_IMAGE_TAGS: Record<string, string> = {
  paintings: "painting,canvas,art",
  "silver-jewelry": "jewelry,silver,ring",
  handcraft: "woodcarving,craft,handmade",
};

// Reusable gallery item card — used on the homepage's category previews,
// the /gallery overview page, and each /products/[category] page.
export default function ProductCard({
  product,
  index = 0,
  category = "paintings",
}: {
  product: Product;
  index?: number;
  category?: string;
}) {
  return (
    <Link
      href={`/products/${category}`}
      className="group flex flex-col"
    >
      {/* Bingkai putih 3px di sekeliling foto produk, seperti bingkai foto
          fisik. Ditaruh di wrapper (bukan di Placeholder) supaya hanya
          gambar produk yang punya bingkai ini, bukan semua pemakaian
          Placeholder di halaman lain (Collections, BrandStory, About). */}
      <div className="relative overflow-hidden rounded-none border-[3px] border-white">
        <Placeholder
          label={product.title}
          aspect="portrait"
          seed={index}
          rounded="rounded-none"
          tags={CATEGORY_IMAGE_TAGS[category] ?? CATEGORY_IMAGE_TAGS.paintings}
          className="transition-transform duration-500 group-hover:scale-105"
        />
        {product.soldOut && (
          <span className="absolute left-3 top-3 rounded-full bg-text/85 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white">
            Sold out
          </span>
        )}
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
