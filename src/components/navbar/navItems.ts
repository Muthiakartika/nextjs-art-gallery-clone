import { galleryCategories } from "@/data/gallery";

export type SubLink = { label: string; href: string };
export type MegaColumn = { title: string; links: SubLink[] };
export type NavItem = { label: string; href: string; columns?: MegaColumn[] };

export const ANNOUNCEMENT =
  "Original Art from Our Bali Studio — Worldwide Shipping Available";

// Derived from the same category data used on the Gallery/Products pages,
// so the "Our Product" mega menu can never list a category name that
// doesn't match the real pages it links to.
const productLinks: SubLink[] = galleryCategories.map((category) => ({
  label: category.title,
  href: `/gallery#${category.id}`,
}));

export const NAV_ITEMS: NavItem[] = [
  // Plain link — Gallery is a standalone overview page, not a dropdown.
  { label: "Gallery", href: "/gallery" },
  {
    label: "Our Product",
    href: "#",
    columns: [{ title: "Shop by Category", links: productLinks }],
  },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact-us" },
];
