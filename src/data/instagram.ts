export type InstagramPost = {
  id: string;
  seed: number;
  caption: string;
  // Kata kunci foto dummy, disesuaikan dengan isi caption (mis. lukisan,
  // perhiasan perak, tenun) supaya fotonya relevan, bukan acak.
  tags: string;
};

// Dummy Instagram feed data for the homepage section. There's no real
// Instagram API/access token wired up (no backend in this project — see
// CLAUDE.md), so this just stands in for posts that would normally come
// from the Instagram Graph API. `seed` + `tags` feed dummyImageUrl() for a
// consistent, on-theme dummy photo per post.
export const instagramPosts: InstagramPost[] = [
  {
    id: "ig-1",
    seed: 20,
    caption: "Fresh coat of varnish drying in the studio",
    tags: "artstudio,painter,canvas",
  },
  {
    id: "ig-2",
    seed: 21,
    caption: "Hand-forging a new silver ring in Celuk",
    tags: "silversmith,jewelry,ring",
  },
  {
    id: "ig-3",
    seed: 22,
    caption: "Rice terrace study, still on the easel",
    tags: "painting,easel,art",
  },
  {
    id: "ig-4",
    seed: 23,
    caption: "Packing a painting for shipping to London",
    tags: "artstudio,painting,frame",
  },
  {
    id: "ig-5",
    seed: 24,
    caption: "Weaving detail on a new ikat wall hanging",
    tags: "weaving,textile,craft",
  },
  {
    id: "ig-6",
    seed: 25,
    caption: "Golden hour over the studio courtyard",
    tags: "artstudio,architecture,bali",
  },
];
