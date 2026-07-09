export type Collection = {
  id: string;
  title: string;
  description: string;
  href: string;
};

export const collections: Collection[] = [
  {
    id: "urban-art-paris",
    title: "Urban Art – Paris Paintings",
    description: "The streets, cafés, and rooftops of Paris, captured in vivid brushwork.",
    href: "/original-paintings/paris-architecture",
  },
  {
    id: "life-scenes",
    title: "Life Scenes",
    description: "Everyday moments and quiet stories from around the city.",
    href: "/original-paintings/life-scenes",
  },
  {
    id: "still-life",
    title: "Still Life",
    description: "Intimate studies of objects, light, and texture.",
    href: "/original-paintings/still-life",
  },
  {
    id: "abstract",
    title: "Abstract",
    description: "Bold color and form for the contemporary collector.",
    href: "/original-paintings/abstract",
  },
  {
    id: "animals",
    title: "Animals",
    description: "Beloved companions and creatures, full of character.",
    href: "/original-paintings/animals",
  },
];
