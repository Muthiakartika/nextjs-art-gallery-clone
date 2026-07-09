import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function NewArrivals() {
  return (
    <section className="py-20">
      <div className="flex justify-center">
        <SectionHeading
          eyebrow="New Arrivals"
          title="Original Paintings – New Arrivals"
          description="Fresh from the easel — one-of-a-kind works, expertly curated and affordably priced to fit your every need."
        />
      </div>

      <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button href="/original-paintings" variant="outline">
          View All Paintings
        </Button>
      </div>
    </section>
  );
}
