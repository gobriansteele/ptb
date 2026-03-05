export type GalleryCategory = {
  slug: string;
  isHidden: boolean;
  images: string[];
};

export const galleryCategories: GalleryCategory[] = [
  {
    slug: "flooring-tile-work",
    isHidden: false,
    images: [
      "/ptb_gallery_11.jpeg",
      "/ptb_gallery_1.jpeg",
      "/ptb_gallery_3.jpeg",
      "/ptb_gallery_5.jpeg",
      "/ptb_gallery_6.jpeg",
      "/ptb_gallery_9.jpeg",
      "/ptb_gallery_10.jpeg",
    ],
  },
  {
    slug: "landscaping-outdoor",
    isHidden: false,
    images: [
      "/ptb_gallery_2.jpeg",
      "/ptb_gallery_7.jpeg",
      "/ptb_gallery_8.jpeg",
    ],
  },
  { slug: "general-repairs", isHidden: false, images: [

      "/ptb_gallery_9.jpeg",
      "/ptb_gallery_10.jpeg",
    ] },
  {
    slug: "minor-plumbing",
    isHidden: false,
    images: ["/ptb_gallery_4.jpeg"],
  },
  { slug: "minor-electrical", isHidden: true, images: [] },
  { slug: "carpentry-woodwork", isHidden: true, images: [] },
  { slug: "assembly-installation", isHidden: true, images: [] },
  { slug: "seasonal-more", isHidden: true, images: [] },
];
