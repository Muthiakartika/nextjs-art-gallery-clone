# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Satori Art Gallery** — a fictional multi-category art gallery site (paintings, silver jewelry, handcraft) based in Ubud, Bali. Built as a Next.js App Router learning/demo project. All content (artist names, product titles, prices, testimonials, address, phone, email) is placeholder/dummy — there is no backend, database, CMS, or real checkout. Every "product image" is a generated gradient swatch, not a real photo.

## Commands

- `npm run dev` — start the dev server (port 3000)
- `npm run build` — production build (Turbopack); also statically generates the `/products/[category]` routes via `generateStaticParams`
- `npm run start` — serve the production build
- `npm run lint` — ESLint (flat config in `eslint.config.mjs`, `eslint-config-next`)

There is no test suite in this project.

**Windows note:** Next.js refuses to start a second `next dev` on the same project directory. If a dev server is already running elsewhere (e.g. the user's own terminal), preview changes with `npm run build && npm run start` instead of `npm run dev`.

## Architecture

**Stack:** Next.js 16 (App Router, Turbopack), React 19, TypeScript (strict), Tailwind CSS v4. No UI or icon library — every icon is a hand-written inline SVG in `src/components/ui/icons.tsx`.

**Design tokens** live in `src/app/globals.css` via a Tailwind v4 `@theme` block (this project uses v4's CSS-first config, not `tailwind.config.js`). Every color is a semantic token — `primary`, `primary-hover`, `secondary`, `accent`, `background`, `section`, `surface`, `border`, `text`, `text-secondary`, `muted`, `ink-soft`, `link`, `link-hover`, `success`, `error`. Components use these as Tailwind classes (`bg-surface`, `text-accent`, `border-border`, …) instead of hardcoded colors, so the whole site re-themes from one file. The previous color theme is archived in `color-backup/` if a revert is ever needed. Font is Cormorant (serif) via `next/font/google`, wired through the `--font-cormorant` variable into Tailwind's `font-sans`.

**Sharp corners is a deliberate convention**, not an oversight: `ProductCard`, `CollectionCard`, `ReviewCard`, `Placeholder`, and the FAQ panel all use `rounded-none`. Buttons (`ui/Button.tsx`) and the nav's `MegaPanel` are the intentional exceptions (`rounded-full` / `rounded-md`).

**Layout consistency:** `src/components/ui/Container.tsx` (`max-w-[1320px]` + responsive padding) is the single source of truth for content width. Every section on every page, including `Footer`, renders inside this same component so all content shares identical left/right edges. New sections should reuse `Container` rather than adding their own `max-w-*` wrapper.

**Global chrome:** `Navbar` and `Footer` are both rendered once in `src/app/layout.tsx` — not imported per-page. Any new route under `src/app/` gets both automatically.

**Navigation data model:** `src/components/navbar/navItems.ts` (`NAV_ITEMS`) is the single source of truth for the nav. An item renders as a plain link unless it has a `columns` array, in which case `DesktopNav`/`MobileNavItem` automatically render `MegaPanel` (desktop) or an accordion (mobile) instead — adding a mega-menu item is a data change, not a new component. The "Our Product" mega menu's links are *generated* from `data/gallery.ts`'s `galleryCategories`, not hand-written, so they can't drift out of sync with the real category pages.

**Product/category data model:** `src/data/products.ts` defines the `Product` type (`id, title, artist, price, medium, soldOut?`) and the painting catalogue. `src/data/gallery.ts` defines `GalleryCategory` (`id, title, description, items: Product[]`) and exports `galleryCategories` — the three categories (paintings, silver-jewelry, handcraft) that drive the nav, the homepage previews, the `/gallery` overview page, and the `/products/[category]` pages. `ProductCard` and `GalleryCategorySection` are reused across all of these rather than duplicated per category. Adding a 4th category only requires adding an entry to `galleryCategories` — nav, homepage, gallery, and routing all follow automatically.

**Dynamic product routes:** `src/app/products/[category]/page.tsx` is one dynamic route serving all three category URLs, using `generateStaticParams()` sourced from `galleryCategories` and `notFound()` for unknown slugs. There are intentionally no separate static folders per category.

**Homepage composition (`src/app/page.tsx`):** maps `galleryCategories` to render `NewArrivals` once per category, each showing that category's 3 newest items with a "View All" link to its `/products/[category]` page. `NewArrivals` is a parameterized, reusable section despite its name — the name is a holdover from when it only showed paintings, kept because it's homepage-only and renaming wasn't necessary.

**Reviews slider (`src/components/Reviews.tsx`):** a small, dependency-free carousel — local `useState` index, prev/next handlers, dot indicators, no carousel library. `ChevronDownIcon` rotated `90deg` (clockwise) points left; `-90deg` (counter-clockwise) points right — easy to get backwards when wiring up prev/next.

**Price display is intentionally disabled**: `Product.price` and `src/lib/format.ts`'s `formatPrice` exist but the price `<span>` in `ProductCard` is commented out, not deleted.
