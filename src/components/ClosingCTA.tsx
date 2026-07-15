import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

/**
 * CLOSING CALL-TO-ACTION
 * ======================
 * Small, compact CTA section sebelum footer dengan background color.
 *
 * Tujuan:
 * - Mengarahkan visitor ke halaman Contact Us dengan subtle approach
 * - Sejajar dengan width section lainnya via Container
 * - Background: sage green (color-link) untuk luxury aesthetic
 * - Text color: white/light untuk kontras dengan dark background
 */
export default function ClosingCTA() {
  return (
    <section className="bg-ink-soft py-16 sm:py-20">
      <Container>
        {/* CTA Content - Flex row untuk desktop, col untuk mobile */}
        <div className="flex flex-col items-start justify-between gap-8 sm:gap-10 lg:flex-row lg:items-center">
          {/* LEFT: Text Content */}
          <div className="flex-1">
            <span className="text-xs uppercase tracking-widest text-white/70">
              Get In Touch
            </span>

            <h3 className="mt-3 text-xl font-medium text-white sm:text-2xl">
              Looking for the Perfect Piece?
            </h3>

            <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
              Whether you&apos;re searching for an original painting,
              handcrafted décor, or a unique piece of sterling silver
              jewelry, our team is ready to help you discover artwork
              that perfectly suits your home or collection.
            </p>

            <p className="mt-2 text-xs text-white/60 sm:text-sm">
              Visit our gallery in Seminyak, Bali, or contact us for personalized recommendations.
            </p>
          </div>

          {/* RIGHT: Button */}
          <div className="flex-shrink-0">
            <Button
              href="/contact-us"
              className="whitespace-nowrap bg-white px-6 py-2.5 text-sm text-link hover:bg-white/90 sm:px-8 sm:py-3 sm:text-base"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}