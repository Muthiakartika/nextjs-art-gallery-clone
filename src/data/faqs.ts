export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "Are all the paintings original?",
    answer:
      "Yes — every artwork we sell is a one-of-a-kind original, hand-painted in our Paris studio. We never sell prints or reproductions, and each piece is signed by the artist.",
  },
  {
    question: "Can I see the artworks in person?",
    answer:
      "Absolutely. You are welcome to visit our atelier on the Île Saint-Louis in Paris to see the paintings in person. Get in touch and we'll arrange a convenient time.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we carefully pack and ship worldwide. Each painting is insured and tracked from our studio to your door, wherever you are.",
  },
  {
    question: "How do I know which artwork is right for me?",
    answer:
      "We're happy to help. Tell us about your space and what draws you to a piece, and we'll offer personalized recommendations so you can choose with confidence.",
  },
];
