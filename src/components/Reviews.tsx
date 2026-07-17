"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ReviewCard from "@/components/ReviewCard";
import { ChevronDownIcon } from "@/components/ui/icons";
import { reviews } from "@/data/reviews";

// Simple, dependency-free testimonial slider: one review at a time,
// prev/next controls, and dot indicators to jump directly.
export default function Reviews() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((i) => (i + 1) % reviews.length);

  return (
    <section className="py-section mt-[-50px]">
      <div className="mb-12 flex justify-center">
        <SectionHeading
          eyebrow="Reviews"
          title="What Our Collectors Say"
          description="Read what collectors and visitors have shared about their experience at Satori Art Gallery."
        />
      </div>

      {/* Same reading-width cap as the FAQ section (max-w-3xl), and no
          side buttons competing for its space, so the card reads at a
          consistent width instead of looking squeezed next to its siblings. */}
      <div className="mx-auto w-full max-w-3xl" aria-live="polite">
        <ReviewCard review={reviews[index]} />
      </div>

      {/* Controls live below the card: prev / dots / next, grouped together. */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous review"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-text transition-colors hover:border-accent hover:text-accent"
        >
          {/* Down-chevron rotated clockwise 90° points left. */}
          <ChevronDownIcon className="h-4 w-4 rotate-90" />
        </button>

        <div className="flex gap-2">
          {reviews.map((r, i) => (
            <button
              key={r.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to review ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-accent" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next review"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-text transition-colors hover:border-accent hover:text-accent"
        >
          {/* Down-chevron rotated counter-clockwise 90° points right. */}
          <ChevronDownIcon className="h-4 w-4 -rotate-90" />
        </button>
      </div>
    </section>
  );
}
