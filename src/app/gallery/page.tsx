import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryCategorySection from "@/components/GalleryCategorySection";
import { galleryCategories } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery — Satori Art Gallery",
  description:
    "Browse original paintings, silver jewelry, and handcraft from our Ubud, Bali studio.",
};

export default function GalleryPage() {
  // Paintings-only for now — widen this filter (or drop it) to list all.
  const visibleCategories = galleryCategories.filter(
    (cat) => cat.id === "paintings",
  );

  return (
    <Container className="py-section">
      <SectionHeading
        eyebrow="Satori Art Gallery"
        title="The Gallery"
        description="Original paintings, silver jewelry, and handcraft — each piece made by hand in Bali."
      />

      {/* Jump links only earn their place when there's more than one category
          to jump between. With a single category the link just scrolled to a
          heading already on screen, so it stays hidden — and comes back on
          its own once the filter above lists more than one. */}
      {visibleCategories.length > 1 && (
        <nav
          aria-label="Gallery categories"
          className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2"
        >
          {visibleCategories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="text-sm font-medium text-text-secondary underline-offset-4 hover:text-accent hover:underline"
            >
              {cat.title}
            </a>
          ))}
        </nav>
      )}

      {/* GalleryCategorySection already renders its own <section> with the
          id + scroll-mt-32 anchor and the border divider between categories,
          so we map it directly here. (A previous extra <section> wrapper
          caused duplicate ids and made every category a :first-child, which
          removed the divider lines + spacing between them.) */}
      <div className="mt-4">
        {visibleCategories.map((cat) => (
          <GalleryCategorySection key={cat.id} category={cat} />
        ))}
      </div>
    </Container>
  );
}
