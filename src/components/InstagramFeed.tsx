import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { InstagramIcon } from "@/components/ui/icons";
import { instagramPosts } from "@/data/instagram";

// Homepage "Follow Us" section. This is a static grid of hand-picked photos,
// deliberately NOT connected to Instagram — it used to render a behold.so
// feed widget, which meant a third-party script on every page load and a
// grid whose contents nobody here controlled.
export default function InstagramFeed() {
  return (
    <section className="pb-[50px] py-section">
      <div className="mb-10 flex justify-center">
        <SectionHeading
          eyebrow="Follow Us"
          title="@satoriartgallery"
          description="See our newest collections, featured artists, and moments from daily life at our gallery in Seminyak."
        />
      </div>

      {/* 2 columns on mobile, 3 from tablet up — same 3-across layout the
          feed widget rendered, and the same white frame ProductCard uses. */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        {instagramPosts.map((post) => (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-square overflow-hidden rounded-none border-[3px] border-white"
          >
            <Image
              src={post.imageUrl}
              alt={post.caption}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, 33vw"
              // This section sits well below the fold, so nothing here needs
              // to load eagerly.
              loading="lazy"
            />

            {/* Hover state carried over from the old widget: the photo dims
                and the Instagram glyph fades in on top. */}
            <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
              <InstagramIcon className="h-8 w-8 text-white" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
