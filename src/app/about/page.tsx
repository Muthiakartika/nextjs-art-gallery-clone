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
    text: "Every piece is made by hand, with no shortcuts and no mass production.",
  },
  {
    title: "Community",
    text: "We work directly with painters, silversmiths, and artisans across Bali, paying fair prices for their craft.",
  },
  {
    title: "Sustainability",
    text: "Locally sourced wood, silver, and textiles, worked in small batches rather than assembly lines.",
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
          Satori Art Gallery is nestled in the heart of Seminyak, Bali, on Jalan
          Kayu Aya (Oberoi), where painters, silversmiths, and artisans come
          together to celebrate the island&apos;s rich artistic heritage. More than
          just a gallery, Satori is a place where handcrafted works are carefully
          curated, allowing every piece to tell its own story.
        </p>

        <p>
          The name <em>Satori</em> — a moment of sudden, quiet understanding —
          reflects how we hope you feel when discovering a work that truly speaks
          to you. We value authenticity over mass production. Every painting,
          every piece of silver jewelry, and every handcrafted object is created
          with patience, skill, and respect for traditional craftsmanship.
        </p>

        <p>
          Today, Satori Art Gallery proudly showcases the work of talented
          Balinese artists and craftspeople, welcoming visitors from around the
          world to experience original creations inspired by the culture, beauty,
          and spirit of Bali. From our gallery in Seminyak, each piece continues
          its journey from the hands of its maker to collectors across the globe.
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
