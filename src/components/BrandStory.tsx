import Button from "@/components/ui/Button";
import Placeholder from "@/components/ui/Placeholder";

export default function BrandStory() {
  return (
    <section className="bg-[#f7f2ec] py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="order-2 flex flex-col items-start gap-6 lg:order-1">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a5a3c]">
            Our Story
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Step into our world of art.
          </h2>
          <p className="text-lg leading-relaxed text-neutral-600">
            We are a family of artists creating paintings in our Paris studio.
            Each piece tells a story and is meant to become part of yours.
          </p>
          <Button href="/artists" variant="dark">
            Meet Our Family of Artists ⭐
          </Button>
        </div>
        <div className="order-1 lg:order-2">
          <Placeholder
            label="Our Paris Studio"
            aspect="landscape"
            seed={4}
            rounded="rounded-2xl"
            className="shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
