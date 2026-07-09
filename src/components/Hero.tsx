import Button from "@/components/ui/Button";
import Placeholder from "@/components/ui/Placeholder";

// Full-width gallery-interior banner with centered text, mirroring the
// reference site's hero. Colors and font are unchanged (warm palette +
// Cormorant); a row of framed placeholders stands in for the studio photo.
export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[560px] items-center justify-center overflow-hidden md:min-h-[640px]">
      {/* Gallery-wall backdrop */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(180deg,#2c1e16 0%,#3a2a20 100%)",
          }}
        />
        {/* Framed paintings hung on the wall */}
        <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-40">
          {[0, 1, 2, 3, 4].map((i) => (
            <Placeholder
              key={i}
              aspect="portrait"
              seed={i}
              rounded="rounded-none"
              className="w-40 shrink-0 shadow-2xl sm:w-52"
            />
          ))}
        </div>
        {/* Darkening overlay for legibility */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Centered text overlay */}
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          Original Paintings from Our Paris Art Gallery
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/85">
          A family of artists creating unique paintings from our studio. Each
          piece tells a story and is meant to become part of yours.
        </p>
        <div className="mt-8 flex justify-center">
          <Button
            href="/original-paintings"
            variant="primary"
            className="px-9 py-3.5 text-base"
          >
            Explore Originals
          </Button>
        </div>
      </div>
    </section>
  );
}
