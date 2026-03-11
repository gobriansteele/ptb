export type GalleryImage = {
  src: string;
  label?: "before" | "after";
};

export type GalleryCategory = {
  slug: string;
  isHidden: boolean;
  thumbnail: string;
  images: GalleryImage[];
};

export const galleryCategories: GalleryCategory[] = [
  {
    slug: "flooring-tile-work",
    isHidden: false,
    thumbnail: "/ptb_gallery_11.jpeg",
    images: [
      { src: "/ptb_gallery_10.jpeg", label: "before" },
      { src: "/ptb_gallery_11.jpeg", label: "after" },
      { src: "/ptb_gallery_4.jpeg", label: "before" },
      { src: "/ptb_gallery_6.jpeg", label: "after" },
      { src: "/ptb_gallery_3.jpeg", label: "before" },
      { src: "/ptb_gallery_9.jpeg", label: "after" },
      { src: "/ptb_gallery_1.jpeg", label: "before" },
      { src: "/ptb_gallery_5.jpeg", label: "after" },
    ],
  },
  {
    slug: "landscaping-outdoor",
    isHidden: false,
    thumbnail: "/ptb_gallery_2.jpeg",
    images: [
      { src: "/ptb_gallery_2.jpeg" },
      { src: "/ptb_gallery_7.jpeg" },
      { src: "/ptb_gallery_8.jpeg" },
    ],
  },
  {
    slug: "carpentry-woodwork",
    isHidden: false,
    thumbnail: "/ptb_gallery_5.jpeg",
    images: [
      { src: "/ptb_gallery_1.jpeg", label: "before" },
      { src: "/ptb_gallery_5.jpeg", label: "after" },
    ],
  },
  {
    slug: "minor-plumbing",
    isHidden: false,
    thumbnail: "/ptb_gallery_6.jpeg",
    images: [
      { src: "/ptb_gallery_4.jpeg", label: "before" },
      { src: "/ptb_gallery_6.jpeg", label: "after" },
    ],
  },
  { slug: "general-repairs", isHidden: true, thumbnail: "", images: [] },
  { slug: "minor-electrical", isHidden: true, thumbnail: "", images: [] },
  { slug: "assembly-installation", isHidden: true, thumbnail: "", images: [] },
  { slug: "seasonal-more", isHidden: true, thumbnail: "", images: [] },
];
