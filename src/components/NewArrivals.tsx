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

// Ambil `count` item acak (tanpa duplikat) dari sebuah array.
function pickRandom<T>(items: T[], count: number): T[] {
  const copy = [...items];
  const picked: T[] = [];
  for (let i = 0; i < count && copy.length > 0; i++) {
    const randomIndex = Math.floor(Math.random() * copy.length);
    picked.push(copy.splice(randomIndex, 1)[0]);
  }
  return picked;
}

// Homepage category preview.
// Menampilkan 6 produk acak dari kategori (bukan 6 pertama secara urut),
// supaya susunannya berbeda-beda tiap kali di-build ulang.
export default function NewArrivals({
  category,
}: {
  category: GalleryCategory;
}) {
  const newestItems: PoolItem[] = pickRandom(toPool(category), 6);

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

      {/* Product Grid */}
      <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 sm:mt-12 sm:grid-cols-3 sm:gap-x-7 lg:mt-14 lg:gap-x-8 lg:gap-y-12">
        {newestItems.map((entry) => (
          <ProductCard
            key={`${entry.category}-${entry.product.id}`}
            product={entry.product}
            index={entry.index}
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