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

// Reusable Google-style review card.
export default function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col gap-4 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <Stars rating={review.rating} />
        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-neutral-200 text-sm font-bold text-[#4285F4]">
          G
        </span>
      </div>
      <blockquote className="flex-1 text-sm leading-relaxed text-neutral-700">
        “{review.text}”
      </blockquote>
      <figcaption className="flex items-center gap-3 border-t border-neutral-100 pt-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8a5a3c] text-sm font-semibold text-white">
          {review.name.charAt(0)}
        </span>
        <div>
          <div className="text-sm font-medium text-neutral-900">
            {review.name}
          </div>
          {review.date && (
            <div className="text-xs text-neutral-400">{review.date}</div>
          )}
        </div>
      </figcaption>
    </figure>
  );
}
