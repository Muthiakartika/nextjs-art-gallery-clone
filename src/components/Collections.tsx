import SectionHeading from "@/components/ui/SectionHeading";
import CollectionCard from "@/components/CollectionCard";
import { collections } from "@/data/collections";

export default function Collections() {
  return (
    <section className="py-20">
      <div className="mb-12 flex justify-center">
        <SectionHeading
          eyebrow="Collections"
          title="Explore the Collections"
          description="Find the perfect piece by theme — from the streets of Paris to bold abstract statements."
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((collection, i) => (
          <CollectionCard key={collection.id} collection={collection} index={i} />
        ))}
      </div>
    </section>
  );
}
