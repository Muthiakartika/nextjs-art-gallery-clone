export type Review = {
  name: string;
  rating: number; // 1-5
  text: string;
  date?: string;
};

// Three featured reviews for the homepage slider.
export const reviews: Review[] = [
  {
    name: "Sophie Bennett",
    rating: 5,
    text: "The painting arrived beautifully packaged all the way to London, and it's even more striking in person. Working with the Satori team felt personal from start to finish.",
    date: "3 weeks ago",
  },
  {
    name: "Hiroshi Tanaka",
    rating: 5,
    text: "I visited the studio in Ubud during a trip to Bali and left with a silver ring I still wear every day. Wonderful craftsmanship and a real story behind every piece.",
    date: "1 month ago",
  },
  {
    name: "Emma Johansson",
    rating: 5,
    text: "Our woven wall hanging is the first thing guests notice in our home. Shipping to Stockholm was smooth and the quality exceeded what we expected.",
    date: "2 months ago",
  },
];
