import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ProductCard from "@/components/ProductCard";
import type { GalleryCategory } from "@/data/gallery";

// Homepage category preview. Rendered once per product category (Paintings,
// Silver Jewelry, Handcraft) to show its 3 newest items with a "View All"
// link to the full category page. Kept under its original name — it's only
// ever used from the homepage, so renaming it isn't necessary.
export default function NewArrivals({ category }: { category: GalleryCategory }) {
  const newestItems = category.items.slice(0, 3);

  return (
    <section className="py-14 sm:py-16 lg:py-24">
      <div className="flex justify-center">
        <SectionHeading
          eyebrow="New Arrivals"
          title={`Newest ${category.title}`}
          description={category.description}
        />
      </div>

      {/* 2/3-column grid (rather than the site's usual 4-column grid) since
          this preview always shows exactly 3 items. */}
      <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10">
        {newestItems.map((item, i) => (
          <ProductCard
            key={item.id}
            product={item}
            index={i}
            category={category.id}
          />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button href={`/products/${category.id}`} variant="outline">
          View All <span aria-hidden>→</span>
        </Button>
      </div>
    </section>
  );
}
