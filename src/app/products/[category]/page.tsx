import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductCategoryPage from "@/components/ProductCategoryPage";
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

// One dynamic route serves all three product categories. It only resolves the
// category from the URL and hands it to the shared ProductCategoryPage
// template, so all three pages share the exact same layout.
export default async function ProductCategoryRoute({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const found = galleryCategories.find((c) => c.id === category);

  if (!found) {
    notFound();
  }

  return <ProductCategoryPage category={found} />;
}
