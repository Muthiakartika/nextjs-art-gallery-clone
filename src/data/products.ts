export type Product = {
  id: string;
  title: string;
  artist: string;
  price: number; // in euros
  medium: string;
  soldOut?: boolean;
};

// Placeholder catalogue for the "New Arrivals" grid and the Gallery page's
// Painting category.
export const products: Product[] = [
  {
    id: "golden-hour-tegalalang",
    title: "Golden Hour Over Tegalalang",
    artist: "Made Sudiarta",
    price: 350,
    medium: "Oil on canvas",
  },
  {
    id: "temple-gate-tanah-lot",
    title: "Temple Gate at Tanah Lot",
    artist: "Wayan Suarsana",
    price: 480,
    medium: "Oil on canvas",
  },
  {
    id: "legong-dancer-study",
    title: "Legong Dancer, Study No. 2",
    artist: "Kadek Puspitasari",
    price: 1200,
    medium: "Oil on canvas",
  },
  {
    id: "rice-terrace-dawn",
    title: "Rice Terrace at Dawn",
    artist: "Nyoman Ardika",
    price: 400,
    medium: "Watercolor",
  },
  {
    id: "jungle-silhouette-sayan",
    title: "Jungle Silhouette, Sayan",
    artist: "Ketut Wirawan",
    price: 680,
    medium: "Oil on canvas",
  },
  {
    id: "still-life-frangipani",
    title: "Still Life with Frangipani",
    artist: "Dewa Ayu Laksmi",
    price: 300,
    medium: "Acrylic on canvas",
  },
  {
    id: "abstract-monsoon-no4",
    title: "Abstract Monsoon No. 4",
    artist: "Made Arsana",
    price: 520,
    medium: "Acrylic on canvas",
  },
  {
    id: "the-batik-weaver",
    title: "The Batik Weaver",
    artist: "Komang Sari",
    price: 350,
    medium: "Oil on canvas",
    soldOut: true,
  },
];
