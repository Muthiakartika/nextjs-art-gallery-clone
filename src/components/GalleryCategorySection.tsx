import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ProductCard";
import type { GalleryCategory } from "@/data/gallery";

// Reusable Gallery page section: one category, its own title/description,
// and a grid of items. Mapped once per category on the Gallery page.
export default function GalleryCategorySection({
  category,
}: {
  category: GalleryCategory;
}) {
  return (
    <section
      id={category.id}
      className="scroll-mt-32 border-t border-border py-16 first:border-t-0 first:pt-0"
    >
      <SectionHeading
        align="left"
        eyebrow="Category"
        title={category.title}
        description={category.description}
      />

      <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {category.items.map((item, i) => (
          <ProductCard
            key={item.id}
            product={item}
            index={i}
            category={category.id}
          />
        ))}
      </div>
    </section>
  );
}
