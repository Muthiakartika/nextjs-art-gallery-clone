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
    <Container className="py-section">
      <SectionHeading
        eyebrow="Satori Art Gallery"
        title="The Gallery"
        description="Original paintings, silver jewelry, and handcraft — each piece made by hand in Bali."
      />

      <nav
        aria-label="Gallery categories"
        className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2"
      >
        {/* Paintings-only for now — restore the commented map below to list all. */}
        {galleryCategories
          .filter((cat) => cat.id === "paintings")
          .map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="text-sm font-medium text-text-secondary underline-offset-4 hover:text-accent hover:underline"
            >
              {cat.title}
            </a>
          ))}
        {/* {galleryCategories.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className="text-sm font-medium text-text-secondary underline-offset-4 hover:text-accent hover:underline"
          >
            {cat.title}
          </a>
        ))} */}
      </nav>

      {/* GalleryCategorySection already renders its own <section> with the
          id + scroll-mt-32 anchor and the border divider between categories,
          so we map it directly here. (A previous extra <section> wrapper
          caused duplicate ids and made every category a :first-child, which
          removed the divider lines + spacing between them.) */}
      <div className="mt-4">
        {/* Paintings-only for now — restore the commented map below to show all. */}
        {galleryCategories
          .filter((cat) => cat.id === "paintings")
          .map((cat) => (
            <GalleryCategorySection key={cat.id} category={cat} />
          ))}
        {/* {galleryCategories.map((cat) => (
          <GalleryCategorySection key={cat.id} category={cat} />
        ))} */}
      </div>
    </Container>
  );
}
