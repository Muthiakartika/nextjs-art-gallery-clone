import SectionHeading from "@/components/ui/SectionHeading";
import ReviewCard from "@/components/ReviewCard";
import { reviews } from "@/data/reviews";

export default function Reviews() {
  return (
    <section className="py-20">
      <div className="mb-12 flex justify-center">
        <SectionHeading
          eyebrow="Reviews"
          title="Google reviews of our customers"
          description="Rated 5 stars by collectors around the world."
        />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <ReviewCard key={review.name} review={review} />
        ))}
      </div>
    </section>
  );
}
