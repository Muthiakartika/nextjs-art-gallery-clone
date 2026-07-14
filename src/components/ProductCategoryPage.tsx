import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ProductCard";
import type { GalleryCategory } from "@/data/gallery";

// Shared template for every /products/[category] page. Given a category, it
// renders a page heading (its title + description) and the full grid of that
// category's products. All three category pages (Paintings, Silver Jewelry,
// Handcraft) share this single layout — only the `category` data differs —
// and it reuses SectionHeading + ProductCard + Container so nothing is
// duplicated.
export default function ProductCategoryPage({
  category,
}: {
  category: GalleryCategory;
}) {
  return (
    <Container className="py-section">
      <SectionHeading
        eyebrow="Our Product"
        title={category.title}
        description={category.description}
      />

      {/* Standard product grid used across the site (2 columns on mobile,
          4 on desktop), reusing ProductCard. Renders every product in the
          category. */}
      <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4">
        {category.items.map((item, i) => (
          <ProductCard
            key={item.id}
            product={item}
            index={i}
            category={category.id}
          />
        ))}
      </div>
    </Container>
  );
}
