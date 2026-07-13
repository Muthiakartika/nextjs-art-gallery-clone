import Button from "@/components/ui/Button";
import Placeholder from "@/components/ui/Placeholder";

export default function BrandStory() {
  return (
    <section className="py-14 sm:py-16 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="order-2 flex flex-col items-start gap-6 lg:order-1">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            About Us
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Step into our world of art.
          </h2>
          <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
            We are a family of artists creating paintings in our Ubud studio.
            Each piece tells a story and is meant to become part of yours.
          </p>
          {/* Diarahkan ke halaman About Us (src/app/about/page.tsx), sesuai
              section ini yang sekarang mengarah ke tema "About Us". */}
          <Button href="/about" variant="dark">
            Learn More About Us
          </Button>
        </div>
        <div className="order-1 lg:order-2">
          <Placeholder
            label="Our Ubud Studio"
            aspect="landscape"
            seed={4}
            rounded="rounded-none"
            tags="artstudio,painter,workshop"
            className="shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
