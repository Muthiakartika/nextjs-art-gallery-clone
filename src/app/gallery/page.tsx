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
  return (
    <Container className="py-14 sm:py-16 lg:py-24">
      <SectionHeading
        eyebrow="Satori Art Gallery"
        title="The Gallery"
        description="Original paintings, silver jewelry, and handcraft — each piece made by hand in Bali."
      />

      <nav
        aria-label="Gallery categories"
        className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2"
      >
        {galleryCategories.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className="text-sm font-medium text-text-secondary underline-offset-4 hover:text-accent hover:underline"
          >
            {cat.title}
          </a>
        ))}
      </nav>

      <div className="mt-4">
        {galleryCategories.map((cat) => (
          <GalleryCategorySection key={cat.id} category={cat} />
        ))}
      </div>
    </Container>
  );
}
