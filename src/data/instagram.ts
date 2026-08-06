const PROFILE_URL = "https://www.instagram.com/satoriartgallery/";

export type InstagramPost = {
  id: string;
  // Path to a real file under /public — these are NOT pulled from Instagram.
  // The section used to render a third-party feed widget (behold.so) that
  // fetched live posts; the client picked these six pieces by hand instead,
  // so they're plain local images like every other photo on the site.
  //
  // These point at /img/instagram/, which holds 960x1200 WebP copies of the
  // originals in /img/painting/. next.config.ts sets `unoptimized: true`, so
  // next/image ships whatever file is named here at full size — the 1080x1350
  // PNG originals are 1.9-3.2 MB each (14 MB for the six), far too heavy for
  // tiles that render at ~433px. Swapping an image here means generating a
  // matching WebP too, not just repointing the path.
  imageUrl: string;
  caption: string;
  // No live feed means no real per-post permalink, so every tile opens the
  // gallery's Instagram profile.
  permalink: string;
};

export const instagramPosts: InstagramPost[] = [
  {
    // from painting images 20.png
    id: "ig-1",
    imageUrl: "/img/instagram/instagram-1.webp",
    caption: "Bold lines and colour — a contemporary face study on canvas",
    permalink: PROFILE_URL,
  },
  {
    // from painting images 24.png
    id: "ig-2",
    imageUrl: "/img/instagram/instagram-2.webp",
    caption: "Goldfish, blossoms and a pair of blue frames",
    permalink: PROFILE_URL,
  },
  {
    // from painting images 22.png
    id: "ig-3",
    imageUrl: "/img/instagram/instagram-3.webp",
    caption: "Warm reds against soft olive leaves",
    permalink: PROFILE_URL,
  },
  {
    // from painting images 17.png
    id: "ig-4",
    imageUrl: "/img/instagram/instagram-4.webp",
    caption: "Hand-stitched geometry, square by square",
    permalink: PROFILE_URL,
  },
  {
    // from painting images 10.png
    id: "ig-5",
    imageUrl: "/img/instagram/instagram-5.webp",
    caption:
      "Vintage sepia portrait of a Balinese dancer in a flower headdress",
    permalink: PROFILE_URL,
  },
  {
    // from painting images 14.png
    id: "ig-6",
    imageUrl: "/img/instagram/instagram-6.webp",
    caption: "Working the rice fields, painted in soft washes",
    permalink: PROFILE_URL,
  },
];
