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
    id: "balinese-farmer",
    title: "Balinese Farmer",
    artist: "Kiem Liang",
    price: 350,
    medium: "Oil on Canvas",
  },
  {
    id: "balinese-woman",
    title: "Balinese Woman",
    artist: "Kiem Liang",
    price: 420,
    medium: "Oil on Canvas",
  },
  {
    id: "abstract-composition",
    title: "Abstract Composition",
    artist: "Darsana",
    price: 520,
    medium: "Oil on Canvas",
  },
  {
    id: "modern-pop-art",
    title: "Modern Pop Art",
    artist: "Khassanan",
    price: 680,
    medium: "Oil on Canvas",
  },
  {
    id: "the-fisherman",
    title: "The Fisherman",
    artist: "Lokadana",
    price: 540,
    medium: "Oil on Canvas",
  },
  {
    id: "offering-procession",
    title: "Offering Procession",
    artist: "Cabek",
    price: 480,
    medium: "Oil on Canvas",
  },
  {
    id: "harmony-in-bloom",
    title: "Harmony in Bloom",
    artist: "Made Suraja",
    price: 620,
    medium: "Oil on Canvas",
  },
  {
    id: "abstract-balinese-figure",
    title: "Abstract Balinese Figure",
    artist: "Kiem Liang",
    price: 560,
    medium: "Oil on Canvas",
  },
  {
    id: "serene-portrait",
    title: "Serene Portrait",
    artist: "Lokadana",
    price: 460,
    medium: "Oil on Canvas",
  },
  {
    id: "a-hand-painted-balinese-vintage-artwork-by-shivatri",
    title: "A hand-painted Balinese vintage artwork by Shivatri",
    artist: "Shivatri",
    price: 540,
    medium: "Hand-Painted Balinese Vintage Artwork",
  },
  {
    id: "structure-of-the-sky",
    title: "Structure of the Sky",
    artist: "Chaiwan",
    price: 610,
    medium: "Oil on Canvas",
  },
  {
    id: "blue-horizon",
    title: "Blue Horizon",
    artist: "Douglas",
    price: 470,
    medium: "Oil on Canvas",
  },
  {
    id: "tranquil-figures",
    title: "Tranquil Figures",
    artist: "Chupip",
    price: 520,
    medium: "Oil on Canvas",
  },
  {
    id: "farmers-in-the-rice-fields",
    title: "Farmers in the Rice Fields",
    artist: "Cabek",
    price: 450,
    medium: "Oil on Canvas",
  },
  {
    id: "the-village-vendor",
    title: "The Village Vendor",
    artist: "Rhindo",
    price: 680,
    medium: "Oil on Canvas",
  },
  {
    id: "coral-transition",
    title: "Coral Transition",
    artist: "Chaiwan",
    price: 580,
    medium: "Oil on Canvas",
  },
  {
    id: "textured-abstraction",
    title: "Textured Abstraction",
    artist: "Satori Art Gallery",
    price: 590,
    medium: "Oil on Canvas",
  },
  {
    id: "rhythm-of-work",
    title: "Rhythm of Work",
    artist: "Satori Art Gallery",
    price: 540,
    medium: "Oil on Canvas",
  },
  {
    id: "lokadana-abstract",
    title: "Lokadana Abstract",
    artist: "Satori Art Gallery",
    price: 630,
    medium: "Oil on Canvas",
  },
  {
    id: "jakkrit-pop-art",
    title: "Jakkrit Pop Art",
    artist: "Satori Art Gallery",
    price: 720,
    medium: "Oil on Canvas",
  },
  {
    id: "burning-sunset",
    title: "Burning Sunset",
    artist: "Satori Art Gallery",
    price: 610,
    medium: "Oil on Canvas",
  },
  {
    id: "autumn-reverie",
    title: "Autumn Reverie",
    artist: "Satori Art Gallery",
    price: 550,
    medium: "Oil on Canvas",
  },
  {
    id: "decorative-pop-art-portrait",
    title: "Decorative Pop Art Portrait",
    artist: "Satori Art Gallery",
    price: 690,
    medium: "Oil on Canvas",
  },
  {
    id: "floral-fantasy",
    title: "Floral Fantasy",
    artist: "Chutip",
    price: 670,
    medium: "Oil on Canvas",
  },
];
