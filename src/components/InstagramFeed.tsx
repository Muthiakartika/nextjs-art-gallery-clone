import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { InstagramIcon } from "@/components/ui/icons";
import { instagramPosts } from "@/data/instagram";

// Profile link for the "Follow" CTA below the grid. Individual tiles link
// to their own post via `post.permalink` instead (see data/instagram.ts).
const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/satoriartgallery/";

// Section on the homepage: grid of tiles styled like an Instagram widget.
// Purely presentational — it only reads `imageUrl`/`caption`/`permalink`
// off each post, so swapping data/instagram.ts for a real Instagram feed
// later requires no changes here. No decorative frame like Placeholder.tsx
// uses elsewhere, since a real Instagram grid is tight and borderless.
export default function InstagramFeed() {
  return (
    <section className="py-14 sm:py-16 lg:py-24">
      <div className="mb-10 flex justify-center">
        <SectionHeading
          eyebrow="Follow Us"
          title="@satoriartgallery"
          description="A closer look at the studio, new arrivals, and behind-the-scenes moments from Ubud."
        />
      </div>

      {/* Tight grid typical of Instagram: 2 columns on mobile, 3 on tablet
          (sm), 6 on desktop (lg) so 6 posts fit in a single row. */}
      <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 sm:gap-1.5 lg:grid-cols-6">
        {instagramPosts.map((post) => (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noreferrer"
            className="group relative block aspect-square overflow-hidden"
          >
            <Image
              src={post.imageUrl}
              alt={post.caption}
              fill
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay + Instagram icon on hover, signaling the tile links
                out to the real post. */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/50">
              <InstagramIcon className="h-6 w-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href={INSTAGRAM_PROFILE_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-text transition-colors hover:text-accent"
        >
          <InstagramIcon className="h-4 w-4" />
          Follow @satoriartgallery
        </a>
      </div>
    </section>
  );
}
