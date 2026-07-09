import Link from "next/link";
import Placeholder from "@/components/ui/Placeholder";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/data/products";

// Reusable painting card used in the New Arrivals grid.
export default function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  return (
    <Link
      href={`/original-paintings/${product.id}`}
      className="group flex flex-col"
    >
      <div className="relative overflow-hidden rounded-none">
        <Placeholder
          label={product.title}
          aspect="portrait"
          seed={index}
          rounded="rounded-none"
          className="transition-transform duration-500 group-hover:scale-105"
        />
        {product.soldOut && (
          <span className="absolute left-3 top-3 rounded-full bg-neutral-900/85 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white">
            Sold out
          </span>
        )}
      </div>
      <div className="mt-4 flex flex-col gap-1 text-center">
        <span className="text-[11px] uppercase tracking-widest text-neutral-400">
          {product.medium}
        </span>
        <h3 className="text-sm font-medium text-neutral-900 transition-colors group-hover:text-[#8a5a3c]">
          {product.title}
        </h3>
        <span className="text-sm text-neutral-500">by {product.artist}</span>
        <span className="mt-1 text-sm font-semibold text-neutral-900">
          {formatPrice(product.price)}
        </span>
      </div>
    </Link>
  );
}
