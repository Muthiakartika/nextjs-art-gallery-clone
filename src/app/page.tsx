import Container from "@/components/ui/Container";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import BrandStory from "@/components/BrandStory";
import Collections from "@/components/Collections";
import Faq from "@/components/Faq";
import Reviews from "@/components/Reviews";
import Newsletter from "@/components/Newsletter";
import { galleryCategories } from "@/data/gallery";

export default function Home() {
  return (
    <Container>
      <Hero />
      {/* One "Newest {Category}" preview section per product category. */}
      {galleryCategories.map((category) => (
        <NewArrivals key={category.id} category={category} />
      ))}
      <BrandStory />
      <Collections />
      <Faq />
      <Reviews />
      <Newsletter />
    </Container>
  );
}
