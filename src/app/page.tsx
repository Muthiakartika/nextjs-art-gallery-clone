import Container from "@/components/ui/Container";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import Collections from "@/components/Collections";
import Faq from "@/components/Faq";
import Reviews from "@/components/Reviews";
import InstagramFeed from "@/components/InstagramFeed";
import { galleryCategories } from "@/data/gallery";

export default function Home() {
  return (
    <Container>
      <Hero />
      {/* One "Newest {Category}" preview section per product category. */}
      {galleryCategories.map((category) => (
        <NewArrivals key={category.id} category={category} />
      ))}
      <Collections />
      <Faq />
      {/* Instagram feed comes before Reviews (client revision). */}
      <InstagramFeed />
      <Reviews />
    </Container>
  );
}
