import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Us — Satori Art Gallery",
  description:
    "The story behind Satori Art Gallery, a home for painters, silversmiths, and artisans in Ubud, Bali.",
};

const values = [
  {
    title: "Craftsmanship",
    text: "Every painting, piece of jewelry, and handcrafted object is created with skill, patience, and genuine respect for traditional craftsmanship.",
  },
  {
    title: "Community",
    text: "We work closely with artists and artisans across Bali, helping introduce their work to collectors and visitors through our gallery.",
  },
  {
    title: "Sustainability",
    text: "Many of our handcrafted collections are produced in small batches using traditional techniques that value quality over quantity.",
  },
];

export default function AboutPage() {
  return (
    <Container className="py-section">
      <SectionHeading
        eyebrow="Our Story"
        title="About Satori Art Gallery"
        description="A home for painters, silversmiths, and artisans in the heart of Seminyak, Bali."
      />

      <div className="mt-12 grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:items-center lg:gap-14">
        {/*
          GAMBAR STUDIO
          ============
          - Gambar asli dari folder /public/img/about/
          - Menggunakan aspect ratio video (16:9)
          - Border putih 5px untuk konsistensi dengan kartu produk lain
          - Priority loading untuk UX yang lebih baik di halaman About
        */}
        <div className="relative overflow-hidden rounded-none border-[5px] border-white shadow-xl aspect-video">
          <Image
            src="/img/about/abaout us image.jpg"
            alt="Our Studio in Ubud"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 200vw, 50vw"
            priority
          />
        </div>
        <div className="flex flex-col gap-5 text-base text-text-secondary sm:text-lg">
        <p>
        Satori Art Gallery is located on Jalan Kayu Aya (Oberoi) in Seminyak, Bali. Our collection includes original paintings by local Balinese and international artists, handcrafted sterling silver jewelry, and traditional Balinese crafts created by skilled local artisans.
        </p>

        <p>
        We believe every handmade piece carries the character of its maker. Instead of mass producing our collections, we focus on works that reflect creativity, craftsmanship, and the artistic traditions that continue to thrive across Bali.
        </p>

        <p>
        Today, Satori Art Gallery is home to a diverse collection of original paintings, handcrafted silver jewelry, and Balinese crafts. We work with local artisans and artists from Bali and beyond to present original handmade creations for visitors and collectors.

        </p>
        </div>
      </div>

      <div className="mt-16 grid gap-8 border-t border-border pt-12 sm:grid-cols-3">
        {values.map((v) => (
          <div key={v.title}>
            <h3 className="text-lg font-semibold text-text">{v.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary sm:text-base">
              {v.text}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}
