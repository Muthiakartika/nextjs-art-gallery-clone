import SectionHeading from "@/components/ui/SectionHeading";
import CollectionCard from "@/components/CollectionCard";
import { galleryCategories } from "@/data/gallery";

// Homepage shortcut section: one card per product category (Paintings,
// Silver Jewelry, Handcraft), linking straight to /products/[category] —
// matches the "Our Product" nav menu one-to-one (client revision; this used
// to show 5 painting sub-themes from data/collections.ts instead).
export default function Collections() {
  return (
    <section className="py-14 sm:py-16 lg:py-24">
      <div className="mb-12 flex justify-center">
        <SectionHeading
          eyebrow="Collections"
          title="Explore the Collections"
          description="Shop by category — paintings, silver jewelry, and handcraft, each piece made by hand in Bali."
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {galleryCategories.map((category, i) => (
          <CollectionCard
            key={category.id}
            index={i}
            collection={{
              id: category.id,
              title: category.title,
              description: category.description,
              href: `/products/${category.id}`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
