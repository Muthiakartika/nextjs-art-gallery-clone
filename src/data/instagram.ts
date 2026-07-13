import { dummyImageUrl } from "@/lib/dummyImage";

const PROFILE_URL = "https://www.instagram.com/satoriartgallery/";

export type InstagramPost = {
  id: string;
  // Final image URL for this post. Right now every entry below builds this
  // from dummyImageUrl() (no real photos yet — see CLAUDE.md), but
  // InstagramFeed.tsx only ever reads `imageUrl` as a plain string, so
  // swapping in a real Instagram integration later is just a matter of
  // pointing this at that post's real `media_url` — no component changes.
  imageUrl: string;
  caption: string;
  // Link for this specific post. Dummy data has no real per-post page, so
  // every entry falls back to the profile URL for now; a real integration
  // would set this to that post's actual `permalink` from the Graph API.
  permalink: string;
};

// Dummy Instagram feed data for the homepage section. There's no real
// Instagram API/access token wired up (no backend in this project — see
// CLAUDE.md), so this just stands in for posts that would normally come
// from the Instagram Graph API.
export const instagramPosts: InstagramPost[] = [
  {
    id: "ig-1",
    imageUrl: dummyImageUrl(20, 400, 400, "artstudio,painter,canvas"),
    caption: "Fresh coat of varnish drying in the studio",
    permalink: PROFILE_URL,
  },
  {
    id: "ig-2",
    imageUrl: dummyImageUrl(21, 400, 400, "silversmith,jewelry,ring"),
    caption: "Hand-forging a new silver ring in Celuk",
    permalink: PROFILE_URL,
  },
  {
    id: "ig-3",
    imageUrl: dummyImageUrl(22, 400, 400, "painting,easel,art"),
    caption: "Rice terrace study, still on the easel",
    permalink: PROFILE_URL,
  },
  {
    id: "ig-4",
    imageUrl: dummyImageUrl(23, 400, 400, "artstudio,painting,frame"),
    caption: "Packing a painting for shipping to London",
    permalink: PROFILE_URL,
  },
  {
    id: "ig-5",
    imageUrl: dummyImageUrl(24, 400, 400, "weaving,textile,craft"),
    caption: "Weaving detail on a new ikat wall hanging",
    permalink: PROFILE_URL,
  },
  {
    id: "ig-6",
    imageUrl: dummyImageUrl(25, 400, 400, "artstudio,architecture,bali"),
    caption: "Golden hour over the studio courtyard",
    permalink: PROFILE_URL,
  },
];
