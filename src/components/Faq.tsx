import SectionHeading from "@/components/ui/SectionHeading";
import FaqItem from "@/components/FaqItem";
import { faqs } from "@/data/faqs";

export default function Faq() {
  return (
    <section className="bg-[#f7f2ec] py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 flex justify-center">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        </div>
        <div className="rounded-2xl bg-white px-6 shadow-sm sm:px-8">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
