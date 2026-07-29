// import SectionHeading from "@/components/ui/SectionHeading";
// import Button from "@/components/ui/Button";
// import ProductCard from "@/components/ProductCard";
// import type { GalleryCategory } from "@/data/gallery";

// // Homepage category preview. Rendered once per product category (Paintings,
// // Silver Jewelry, Handcraft) to show its 3 newest items with a "View All"
// // link to the full category page. Kept under its original name — it's only
// // ever used from the homepage, so renaming it isn't necessary.
// export default function NewArrivals({ category }: { category: GalleryCategory }) {
//   const newestItems = category.items.slice(0, 3);

//   return (
//     <section className="py-10 sm:py-14 lg:py-20 xl:py-24">
//       <div className="flex justify-center">
//         <SectionHeading
//           eyebrow="New Arrivals"
//           title={`Newest ${category.title}`}
//           description={category.description}
//         />
//       </div>

//       {/* 2/3-column grid (rather than the site's usual 4-column grid) since
//           this preview always shows exactly 3 items. */}
//       <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10">
//         {newestItems.map((item, i) => (
//           <ProductCard
//             key={item.id}
//             product={item}
//             index={i}
//             category={category.id}
//           />
//         ))}
//       </div>

//       <div className="mb-8 sm:mb-10 lg:mb-12 flex justify-center">
//         <Button href={`/products/${category.id}`} variant="outline">
//           View All <span aria-hidden>→</span>
//         </Button>
//       </div>
//     </section>
//   );
// }


import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ProductCard from "@/components/ProductCard";
import type { GalleryCategory } from "@/data/gallery";
import type { Product } from "@/data/products";

type PoolItem = { product: Product; category: string; index: number };

function toPool(cat: GalleryCategory): PoolItem[] {
  return cat.items.map((product, index) => ({
    product,
    category: cat.id,
    index,
  }));
}

// Susunan tetap (bukan acak) untuk section Paintings di homepage — 12
// lukisan sesuai urutan nomor file persis dari client (painting images
// 2,3,4,5,7,22,6,8,9,10,11,12). Grid di bawah otomatis menyesuaikan jadi
// 4 kolom di desktop (3 baris × 4) supaya tetap terasa rapi seperti
// dinding galeri, bukan cuma daftar gambar panjang ke bawah.
const FIXED_HOMEPAGE_PAINTING_IDS = [
  "balinese-woman", // painting images 2
  "abstract-composition", // painting images 3
  "modern-pop-art", // painting images 4
  "the-fisherman", // painting images 5
  "harmony-in-bloom", // painting images 7
  "autumn-reverie", // painting images 22
  "offering-procession", // painting images 6
  "abstract-balinese-figure", // painting images 8
  "serene-portrait", // painting images 9
  "textured-abstraction", // painting images 10
  "structure-of-the-sky", // painting images 11
  "blue-horizon", // painting images 12
];

// Homepage category preview.
export default function NewArrivals({
  category,
}: {
  category: GalleryCategory;
}) {
  const pool = toPool(category);
  const newestItems: PoolItem[] =
    category.id === "paintings"
      ? (FIXED_HOMEPAGE_PAINTING_IDS.map((id) =>
          pool.find((entry) => entry.product.id === id)
        ).filter(Boolean) as PoolItem[])
      : pool.slice(0, 6);

  return (
    <section className="pb-[0px] py-section">
      {/* Section Heading */}
      <div className="flex justify-center">
        <SectionHeading
          eyebrow="New Arrivals"
          title={`Newest ${category.title}`}
          description="Explore the latest original paintings by local and international artists, now available at our gallery in Seminyak."
        />
      </div>

      {/* Product Grid — 2 cols mobile, 3 cols tablet, 4 cols desktop (3
          rows × 4 with the 12 fixed paintings above), so it reads like an
          evenly hung gallery wall instead of a long single strip. */}
      <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 sm:mt-12 sm:grid-cols-3 sm:gap-x-7 lg:mt-14 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
        {newestItems.map((entry, renderPosition) => (
          <ProductCard
            key={`${entry.category}-${entry.product.id}`}
            product={entry.product}
            index={entry.index}
            // `entry.index` is this product's position in the full catalog
            // (needed for the image filename), which is NOT the same as
            // where it renders in THIS grid — so priority has to be passed
            // explicitly here. First row (4 cards on desktop) loads eager.
            priority={renderPosition < 4}
            category={entry.category}
          />
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-10 flex justify-center sm:mt-12 lg:mt-14">
        <Button
          href={`/products/${category.id}`}
          variant="outline"
        >
          View All <span aria-hidden>→</span>
        </Button>
      </div>
    </section>
  );
}