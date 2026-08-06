import Container from "@/components/ui/Container";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import Collections from "@/components/Collections";
import Faq from "@/components/Faq";
import Reviews from "@/components/Reviews";
import InstagramFeed from "@/components/InstagramFeed";
import { galleryCategories } from "@/data/gallery";
import ClosingCTA from "@/components/ClosingCTA";
// LocationMap is intentionally not imported — see the note where it used to
// render, below.
// import LocationMap from "@/components/LocationMap";

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
      {/* Studio location (Google Map) used to sit here, before the Closing
          CTA. It's hidden by NOT RENDERING it rather than with CSS: a
          `hidden`/`display:none` wrapper still ships the address, hours and
          map iframe in the HTML, and Google indexes markup it can parse
          regardless of whether it's painted. Leaving the JSX out entirely is
          what actually keeps it off the page and out of the crawl.
          src/components/LocationMap.tsx is untouched — restore this line and
          the import at the top to bring it back. */}
      <ClosingCTA />
    </Container>
  );
}
