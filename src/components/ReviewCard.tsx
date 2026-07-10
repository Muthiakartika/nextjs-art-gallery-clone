import type { Review } from "@/data/reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5 text-[#e8a13a]"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden>
          {i < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

// Reusable testimonial card — one card is shown at a time by the Reviews slider.
export default function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col gap-4 rounded-none border border-border bg-surface p-6 shadow-sm sm:p-8">
      <Stars rating={review.rating} />
      <blockquote className="flex-1 text-base leading-relaxed text-text-secondary">
        “{review.text}”
      </blockquote>
      <figcaption className="flex items-center gap-3 border-t border-border pt-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-none bg-text text-sm font-semibold text-background">
          {review.name.charAt(0)}
        </span>
        <div>
          <div className="text-sm font-medium text-text">
            {review.name}
          </div>
          {review.date && (
            <div className="text-xs text-muted">{review.date}</div>
          )}
        </div>
      </figcaption>
    </figure>
  );
}
