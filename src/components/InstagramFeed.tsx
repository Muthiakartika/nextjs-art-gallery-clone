import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { InstagramIcon } from "@/components/ui/icons";
import { dummyImageUrl } from "@/lib/dummyImage";
import { instagramPosts } from "@/data/instagram";

// Profil Instagram dummy (belum ada integrasi Instagram Graph API/access
// token — project ini tidak punya backend, lihat CLAUDE.md), jadi tiap
// tile dan tombol "Follow" di bawah cuma mengarah ke sini.
const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/";

// Section baru di homepage: grid foto ala widget Instagram. Datanya dari
// src/data/instagram.ts (dummy), fotonya dari dummyImageUrl() — sama
// seperti Placeholder.tsx, tapi TANPA bingkai/frame dekoratifnya, karena
// grid Instagram aslinya rapat & polos (bukan foto produk berbingkai).
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

      {/* Grid rapat khas Instagram: 2 kolom di mobile, 3 di tablet (sm),
          6 di desktop (lg) supaya 6 post pas dalam satu baris. */}
      <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 sm:gap-1.5 lg:grid-cols-6">
        {instagramPosts.map((post) => (
          <a
            key={post.id}
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="group relative block aspect-square overflow-hidden"
          >
            <Image
              src={dummyImageUrl(post.seed, 400, 400, post.tags)}
              alt={post.caption}
              fill
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay + ikon Instagram muncul saat hover, menandakan tile
                ini bisa diklik menuju profil Instagram sungguhan. */}
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
