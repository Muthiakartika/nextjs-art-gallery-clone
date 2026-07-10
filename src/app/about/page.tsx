import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Placeholder from "@/components/ui/Placeholder";

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
    <Container className="py-16">
      <SectionHeading
        eyebrow="Our Story"
        title="About Satori Art Gallery"
        description="A home for painters, silversmiths, and artisans in the heart of Ubud, Bali."
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">
        <Placeholder
          label="Our Studio in Ubud"
          aspect="landscape"
          seed={3}
          rounded="rounded-2xl"
          className="shadow-xl"
        />
        <div className="flex flex-col gap-5 text-text-secondary">
          <p>
            Satori Art Gallery began as a small studio tucked between the rice
            terraces of Ubud, where a handful of painters, silversmiths, and
            woodcarvers shared a single workshop and a shared belief: that
            handmade work, made without haste, still has a place in the world.
          </p>
          <p>
            The name <em>Satori</em> — a moment of sudden, quiet understanding
            — reflects how we hope you feel in front of a piece that speaks to
            you. We are not interested in mass production. Each painting, each
            ring, each woven textile passes through the hands of one artisan
            from start to finish.
          </p>
          <p>
            Today, Satori works with a growing family of artists and
            craftspeople across Bali, and ships their work to collectors
            around the world — but every piece still begins the same way it
            always has: in Ubud, by hand.
          </p>
        </div>
      </div>

      <div className="mt-16 grid gap-8 border-t border-border pt-12 sm:grid-cols-3">
        {values.map((v) => (
          <div key={v.title}>
            <h3 className="text-lg font-semibold text-text">{v.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              {v.text}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}
