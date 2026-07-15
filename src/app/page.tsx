import Container from "@/components/ui/Container";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import Collections from "@/components/Collections";
import Faq from "@/components/Faq";
import Reviews from "@/components/Reviews";
import InstagramFeed from "@/components/InstagramFeed";
import { galleryCategories } from "@/data/gallery";
import ClosingCTA from "@/components/ClosingCTA";

export default function Home() {
  return (
    <Container>
      <Hero />
      {/* Paintings-only for now. To show every category again, restore the
          commented map below and remove this filtered one. */}
      {galleryCategories
        .filter((category) => category.id === "paintings")
        .map((category) => (
          <NewArrivals key={category.id} category={category} />
        ))}
      {/* {galleryCategories.map((category) => (
        <NewArrivals key={category.id} category={category} />
      ))} */}
      <Collections />
      <Faq />
      {/* Instagram feed comes before Reviews (client revision). */}
      <InstagramFeed />
      <Reviews />
      <ClosingCTA />
    </Container>
  );
}
