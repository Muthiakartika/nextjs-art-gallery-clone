import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

/**
 * CLOSING CALL-TO-ACTION
 * ======================
 * CTA section sebelum footer untuk mengarahkan visitor menuju Contact Us.
 *
 * Design:
 * - Dark luxury card
 * - Tidak full width agar lebih premium
 * - Layout 2 kolom di desktop
 * - Stack di mobile
 * - Konsisten dengan identitas visual Satori Art Gallery
 */
export default function ClosingCTA() {
  return (
    <section className="mb-[40px] sm:mb-[60px] lg:mb-[80px]">
      
        {/* Wrapper agar card tidak terlalu lebar */}
        <div className="mx-auto w-[100%]">
          <div className="rounded-none bg-ink-soft px-8 py-10 shadow-lg sm:px-10 sm:py-12 lg:px-16 lg:py-14">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:items-center">
              {/* ==========================
                  LEFT CONTENT
              ========================== */}
              <div className="max-w-2xl lg:flex-1">
                <span className="text-xs uppercase tracking-[0.3em] text-white/60">
                  Get In Touch
                </span>

                <h2 className="mt-4 text-3xl font-medium leading-tight text-white lg:text-4xl">
                  Looking for something special?
                </h2>

                <p className="mt-5 text-base leading-8 text-white/80">
                  Explore original paintings, handcrafted Balinese décor, and
                  sterling silver jewelry thoughtfully created by local artisans.
                  Whether you're searching for a statement artwork or a unique
                  handcrafted piece, we're here to help.
                </p>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  Visit Satori Art Gallery in Seminyak, Bali, or contact us for
                  personalized recommendations and assistance with your
                  purchase.
                </p>
              </div>

              {/* ==========================
                  RIGHT BUTTON
              ========================== */}
              <div className="mt-2 lg:ml-16 xl:ml-24 flex-shrink-0">
                <Button
                  href="/contact-us"
                  className="whitespace-nowrap bg-white px-10 py-3 text-base text-link transition hover:bg-white/90"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      
    </section>
  );
}