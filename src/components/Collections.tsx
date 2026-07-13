import SectionHeading from "@/components/ui/SectionHeading";
import CollectionCard from "@/components/CollectionCard";
import { collections } from "@/data/collections";

export default function Collections() {
  return (
    <section className="py-14 sm:py-16 lg:py-24">
      <div className="mb-12 flex justify-center">
        <SectionHeading
          eyebrow="Collections"
          title="Explore the Collections"
          description="Find the perfect piece by theme — from Bali's rice terraces to bold abstract statements."
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {collections.map((collection, i) => (
          <CollectionCard key={collection.id} collection={collection} index={i} />
        ))}
      </div>
    </section>
  );
}
