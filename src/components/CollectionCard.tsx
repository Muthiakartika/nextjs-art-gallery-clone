import Link from "next/link";
import Placeholder from "@/components/ui/Placeholder";
import type { Collection } from "@/data/collections";

// Reusable collection tile with an image, gradient scrim, and overlaid text.
export default function CollectionCard({
  collection,
  index = 0,
}: {
  collection: Collection;
  index?: number;
}) {
  return (
    <Link
      href={collection.href}
      className="group relative block overflow-hidden rounded-none" 
    >
      <Placeholder
        aspect="landscape"
        seed={index + 2}
        rounded="rounded-none"
        className="transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent" />
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
