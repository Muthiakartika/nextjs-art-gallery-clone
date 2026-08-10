import Image from "next/image";
import Button from "@/components/ui/Button";

/**
 * DAFTAR GAMBAR HERO UNTUK SLIDESHOW
 * ==================================
 * Setiap item berisi:
 * - src: Path menuju gambar di folder /public/img/hero/
 * - alt: Teks alternatif untuk aksesibilitas (jika gambar tidak bisa dimuat)
 *
 * Gambar akan ditampilkan bergantian dengan animasi crossfade dan zoom
 * yang smooth tanpa perlu JavaScript (menggunakan CSS animation).
 */
const HERO_IMAGES = [
  { src: "/img/hero/hero painting with plant new.jpg", alt: "Painting Collection" },
  { src: "/img/hero/new painting balinese.jpg", alt: "Balinese" }, 
  { src: "/img/hero/hero craft  1.jpg", alt: "Craft Collection" },
  { src: "/img/hero/hero silver 1.jpg", alt: "Silver Collection" },
  { src: "/img/hero/shop image 3.jpg", alt: "Shop Image with Statue Collection" },
];

// Durasi satu siklus penuh slideshow (detik)
// Rumus: jumlah gambar × 6 detik per gambar
// Contoh: 3 gambar × 6 detik = 18 detik per siklus
const CYCLE_SECONDS = HERO_IMAGES.length * 6;

// Full-width, full-height gallery-interior banner. Latar belakangnya adalah
// slideshow foto dummy yang mengisi SELURUH lebar & tinggi section (bukan
// kotak/thumbnail kecil) dan saling crossfade + zoom pelan secara otomatis
// (murni CSS, tanpa JS/carousel library) supaya terlihat "bergerak".
export default function Hero() {
  return (
    <section
      className="relative isolate flex min-h-[420px] items-center justify-center overflow-hidden
        sm:min-h-[520px] md:min-h-[600px] lg:min-h-[680px] mt-12 sm:mt-16 md:mt-20 lg:mt-[100px] border-[1px] border-white"
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

        {HERO_IMAGES.map((image, i) => (
          <div
            key={i}
            className="hero-slide absolute inset-0 overflow-hidden"
            style={{
              animationDuration: `${CYCLE_SECONDS}s`,
              animationDelay: `${i * (CYCLE_SECONDS / HERO_IMAGES.length)}s`,
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
              sizes="100vw"
              className="hero-slide-img object-cover"
              style={{
                animationDuration: `${CYCLE_SECONDS}s`,
                animationDelay: `${i * (CYCLE_SECONDS / HERO_IMAGES.length)}s`,
              }}
            />
          </div>
        ))}

        {/* Overlay gelap supaya teks tetap mudah dibaca di atas foto */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Teks di tengah. Ukuran font sengaja dibedakan per breakpoint agar
          proporsional: kecil di mobile, sedang di tablet (sm/md), besar di
          desktop (lg). */}
      <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-16 md:py-20">
        <h1 className="font-semibold leading-tight text-white">
        Welcome to Satori Art Gallery 
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:mt-5 sm:text-lg md:mt-6 md:text-xl">
        Discover original paintings, handmade crafts, and sterling silver jewelry at Satori Art Gallery in Seminyak. Our collection brings together local and international artwork with handcrafted pieces made in Bali.
        </p>
        <div className="mt-6 flex justify-center sm:mt-7 md:mt-8">
          <Button
            href="/gallery#paintings"
            variant="light"
            className="px-6 py-3 text-sm sm:px-8 sm:py-3.5 sm:text-base md:px-9 md:text-base"
          >
            Explore More
          </Button>
        </div>
      </div>
    </section>
  );
}
