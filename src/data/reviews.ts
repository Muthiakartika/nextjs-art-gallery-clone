export type Review = {
  name: string;
  rating: number; // 1-5
  text: string;
  date?: string;
};

export const reviews: Review[] = [
  {
    name: "Amelia Hart",
    rating: 5,
    text: "The painting is even more beautiful in person. Packaging was impeccable and it arrived in London within days.",
    date: "2 weeks ago",
  },
  {
    name: "Julien Faure",
    rating: 5,
    text: "A wonderful family of artists. Visiting the studio in Paris was the highlight of our trip.",
    date: "1 month ago",
  },
  {
    name: "Sarah Klein",
    rating: 5,
    text: "I bought my first original here and the guidance made it so easy. I love it every single day.",
    date: "1 month ago",
  },
  {
    name: "Marco Rossi",
    rating: 5,
    text: "Exceptional quality and a fair price. Shipping to Italy was fast and perfectly insured.",
    date: "2 months ago",
  },
  {
    name: "Chloé Dubois",
    rating: 5,
    text: "Every piece tells a story. The team helped me find one that fit my apartment perfectly.",
    date: "3 months ago",
  },
  {
    name: "David Chen",
    rating: 5,
    text: "Shipped all the way to Singapore without a scratch. A truly personal buying experience.",
    date: "3 months ago",
  },
];
