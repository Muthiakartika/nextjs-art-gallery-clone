import Image from "next/image";
import Button from "@/components/ui/Button";
import { dummyImageUrl } from "@/lib/dummyImage";

// Seed foto dummy yang dipakai bergantian sebagai latar Hero (bukan foto
// asli — lihat dummyImageUrl di src/lib/dummyImage.ts). Urutan array ini
// juga menentukan urutan tampil di slideshow.
const HERO_PHOTO_SEEDS = [10, 11, 12, 13];

// Lama satu putaran penuh slideshow (detik). Dibagi rata ke tiap foto lewat
// animation-delay di bawah, supaya kemunculannya bergantian rapi, bukan
// tumpuk. Keyframe animasinya (heroFade, heroZoom) ada di globals.css.
const CYCLE_SECONDS = HERO_PHOTO_SEEDS.length * 6;

// Full-width, full-height gallery-interior banner. Latar belakangnya adalah
// slideshow foto dummy yang mengisi SELURUH lebar & tinggi section (bukan
// kotak/thumbnail kecil) dan saling crossfade + zoom pelan secara otomatis
// (murni CSS, tanpa JS/carousel library) supaya terlihat "bergerak".
export default function Hero() {
  return (
    <section
      className="relative isolate flex min-h-[420px] items-center justify-center overflow-hidden
        sm:min-h-[520px] md:min-h-[600px] lg:min-h-[680px] mt-[100px]"
    >
      {/* Latar belakang: slideshow foto dummy, tiap foto absolute+inset-0
          sehingga otomatis selebar dan setinggi section-nya di semua
          ukuran layar. */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(180deg,#2c1e16 0%,#3a2a20 100%)",
          }}
        />

        {HERO_PHOTO_SEEDS.map((seed, i) => (
          <div
            key={seed}
            className="hero-slide absolute inset-0 overflow-hidden"
            style={{
              animationDuration: `${CYCLE_SECONDS}s`,
              animationDelay: `${i * (CYCLE_SECONDS / HERO_PHOTO_SEEDS.length)}s`,
            }}
          >
            <Image
              src={dummyImageUrl(seed, 1600, 900, "artgallery,painting,museum")}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="hero-slide-img object-cover"
              style={{
                animationDuration: `${CYCLE_SECONDS}s`,
                animationDelay: `${i * (CYCLE_SECONDS / HERO_PHOTO_SEEDS.length)}s`,
              }}
            />
          </div>
        ))}

        {/* Overlay gelap supaya teks tetap mudah dibaca di atas foto */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Teks di tengah. Ukuran font sengaja dibedakan per breakpoint agar
          proporsional: kecil di mobile, sedang di tablet (sm/md), besar di
          desktop (lg). */}
      <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-16 md:py-20">
        <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Original Paintings from Our Bali Art Gallery
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:mt-5 sm:text-lg md:mt-6 md:text-xl">
          A family of artists creating unique paintings from our studio. Each
          piece tells a story and is meant to become part of yours.
        </p>
        <div className="mt-6 flex justify-center sm:mt-7 md:mt-8">
          <Button
            href="/gallery#paintings"
            variant="light"
            className="px-6 py-3 text-sm sm:px-8 sm:py-3.5 sm:text-base md:px-9 md:text-base"
          >
            Explore Originals
          </Button>
        </div>
      </div>
    </section>
  );
}
