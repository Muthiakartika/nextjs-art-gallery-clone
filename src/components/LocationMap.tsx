import SectionHeading from "@/components/ui/SectionHeading";
import { ClockIcon, MapPinIcon, PhoneIcon } from "@/components/ui/icons";

// Same embed used on the Contact Us page (src/app/contact-us/page.tsx),
// reused here so the pin and address stay in sync.
const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.0817965833585!2d115.16334820000002!3d-8.6837716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd247178ea84809%3A0x96774c2eed17cb61!2sSatori!5e0!3m2!1sen!2sid!4v1783916501340!5m2!1sen!2sid";

const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=Satori+Art+Gallery+Jl+Kayu+Aya+Oberoi+Seminyak+Bali";

/**
 * HOMEPAGE LOCATION SECTION
 * =========================
 * Menampilkan lokasi studio (Google Map) langsung di homepage, sebelum
 * Closing CTA, supaya pengunjung tidak perlu membuka halaman Contact Us
 * hanya untuk melihat di mana galeri berada.
 *
 * Design: map dibingkai border putih (konsisten dengan foto About &
 * Collections), dipasangkan dengan kartu gelap (bg-ink-soft) berisi
 * alamat/jam/kontak — bahasa visual yang sama dengan Closing CTA supaya
 * terasa premium, bukan sekadar iframe polos.
 */
export default function LocationMap() {
  return (
    <section className="py-section mt-[-40px] sm:mt-[-80px] lg:mt-[-85px]">
      <div className="flex justify-center">
        <SectionHeading
          eyebrow="Visit Us"
          title="Find Us in Seminyak, Bali"
          description="Step into our studio on Jalan Kayu Aya to see original paintings, silver jewelry, and handcraft in person."
        />
      </div>

      <div className="mt-12 grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-stretch lg:gap-14">
        {/* Map, framed the same way as the studio photo on the About page. */}
        <div className="overflow-hidden rounded-none border-[5px] border-white shadow-xl">
          <iframe
            title="Satori Art Gallery location"
            src={MAP_EMBED_SRC}
            loading="lazy"
            className="h-72 w-full sm:h-80 md:h-96 lg:h-full lg:min-h-[380px]"
          />
        </div>

        {/* Studio details — dark luxury card, same visual language as Closing CTA. */}
        <div className="flex flex-col justify-center gap-6 rounded-none bg-ink-soft px-8 py-10 shadow-lg sm:px-10 sm:py-12 lg:px-10 lg:py-12">
          <div className="flex items-start gap-4">
            <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Studio
              </h3>
              <address className="mt-2 text-sm not-italic leading-relaxed text-white/75">
                Jl. Kayu Aya (Oberoi), Seminyak,
                <br />
                Kerobokan Kelod, Kuta Utara,
                <br />
                Seminyak, Kec. Kuta, Kabupaten Badung, Bali 80361
              </address>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Hours
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                Daily, 10:00 AM – 9:30 PM (Bali time)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Contact
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                <a href="https://wa.me/6289508117898" className="transition-colors hover:text-primary">
                  +62 895 0811 7898
                </a>
              </p>
            </div>
          </div>

          {/* Plain <a> (not the shared Button) since this needs
              target="_blank" for an external maps link — matches Button's
              "light" variant classes exactly so it looks identical. */}
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium tracking-wide text-text transition-colors hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
          >
            Get Directions <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
