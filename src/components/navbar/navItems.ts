export type SubLink = { label: string; href: string };
export type MegaColumn = { title: string; links: SubLink[] };
export type NavItem = { label: string; href: string; columns?: MegaColumn[] };

export const ANNOUNCEMENT =
  "Original Paintings from Our Paris Studio — Carefully Shipped Worldwide";

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Original Paintings",
    href: "/original-paintings",
    columns: [
      {
        title: "By Medium",
        links: [
          { label: "Oil Paintings", href: "/original-paintings/oil" },
          { label: "Watercolors", href: "/original-paintings/watercolors" },
          { label: "Coffee Paintings", href: "/original-paintings/coffee" },
        ],
      },
      {
        title: "By Thematic",
        links: [
          { label: "Paris & Architecture", href: "/original-paintings/paris-architecture" },
          { label: "Abstract", href: "/original-paintings/abstract" },
          { label: "Landscapes & Seascapes", href: "/original-paintings/landscapes-seascapes" },
          { label: "View All Themes", href: "/original-paintings/themes" },
        ],
      },
      {
        title: "By Price",
        links: [
          { label: "Under €400", href: "/original-paintings/under-400" },
          { label: "€300 – €500", href: "/original-paintings/300-500" },
          { label: "€1000 & Above", href: "/original-paintings/1000-above" },
        ],
      },
    ],
  },
  { label: "Artists", href: "/artists" },
  { label: "Visit Us", href: "/visit-us" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];
