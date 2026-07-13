import SectionHeading from "@/components/ui/SectionHeading";
import FaqItem from "@/components/FaqItem";
import { faqs } from "@/data/faqs";

export default function Faq() {
  return (
    <section className="bg-section py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 flex justify-center">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        </div>
        <div className="rounded-none bg-surface px-6 shadow-sm sm:px-8">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
