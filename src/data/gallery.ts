export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
  source: string;
  acquisition: "download" | "screenshot";
}

export const galleryItems: GalleryItem[] = [
  {
    src: "/assets/img/gallery/award-physical-ai-hackathon.png",
    alt: "TML students receiving recognition at the Physical AI Hackathon",
    caption: "Physical AI Hackathon",
    source: "Google Sites Board / Awards",
    acquisition: "download"
  },
  {
    src: "/assets/img/gallery/award-ku-rise-ideathon.png",
    alt: "TML student award photo from the KU RISE ideathon",
    caption: "KU RISE Ideathon",
    source: "Google Sites Board / Awards",
    acquisition: "download"
  },
  {
    src: "/assets/img/gallery/summer-study-01.png",
    alt: "TML 2025 summer study session",
    caption: "Summer Study",
    source: "Google Sites Board / 2025 Summer",
    acquisition: "download"
  },
  {
    src: "/assets/img/gallery/winter-study-01.png",
    alt: "TML 2025 winter study session",
    caption: "Winter Study",
    source: "Google Sites Board / 2025 Winter",
    acquisition: "download"
  }
];
