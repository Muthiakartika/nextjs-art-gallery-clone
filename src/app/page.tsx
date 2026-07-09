import Container from "@/components/ui/Container";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import BrandStory from "@/components/BrandStory";
import Collections from "@/components/Collections";
import Faq from "@/components/Faq";
import Reviews from "@/components/Reviews";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* One shared content container: every section lines up to the same
          ~1320px centered column. Footer stays full-width below it. */}
      <Container>
        <Hero />
        <NewArrivals />
        <BrandStory />
        <Collections />
        <Faq />
        <Reviews />
        <Newsletter />
      </Container>
      <Footer />
    </>
  );
}
