import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import GalleryCategorySection from "@/components/GalleryCategorySection";
import { galleryCategories } from "@/data/gallery";

// Pre-render the three known category pages (paintings, silver-jewelry,
// handcraft) at build time — same static-export behavior as every other
// route in this project.
export function generateStaticParams() {
  return galleryCategories.map((category) => ({ category: category.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const found = galleryCategories.find((c) => c.id === category);

  if (!found) return {};

  return {
    title: `${found.title} — Satori Art Gallery`,
    description: found.description,
  };
}

// One dynamic route serves all three product categories instead of three
// near-identical page files — the only thing that changes per URL is which
// category object we look up and hand to GalleryCategorySection.
export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const found = galleryCategories.find((c) => c.id === category);

  if (!found) {
    notFound();
  }

  return (
    <Container className="py-16">
      <GalleryCategorySection category={found} />
    </Container>
  );
}
