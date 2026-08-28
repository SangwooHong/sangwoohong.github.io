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
    caption: "Physical AI Hackathon Award",
    source: "Google Sites Board / Awards",
    acquisition: "download"
  },
  {
    src: "/assets/img/gallery/award-ku-rise-ideathon.png",
    alt: "TML student award photo from the KU RISE ideathon",
    caption: "KU RISE Ideathon Award",
    source: "Google Sites Board / Awards",
    acquisition: "download"
  },
  {
    src: "/assets/img/gallery/summer-study-01.png",
    alt: "TML 2025 summer study session",
    caption: "2025 Summer Study",
    source: "Google Sites Board / 2025 Summer",
    acquisition: "download"
  },
  {
    src: "/assets/img/gallery/summer-study-capture.png",
    alt: "TML students participating in a summer study session",
    caption: "2025 Summer Study",
    source: "Google Sites Board / 2025 Summer",
    acquisition: "screenshot"
  },
  {
    src: "/assets/img/gallery/winter-study-01.png",
    alt: "TML 2025 winter study session",
    caption: "2025 Winter Study",
    source: "Google Sites Board / 2025 Winter",
    acquisition: "download"
  },
  {
    src: "/assets/img/gallery/winter-study-capture.png",
    alt: "TML students participating in a winter study session",
    caption: "2025 Winter Study",
    source: "Google Sites Board / 2025 Winter",
    acquisition: "screenshot"
  },
  {
    src: "/assets/img/gallery/board-overview-capture.png",
    alt: "TML study and lab activity photo from the old Google Site board",
    caption: "Study Program",
    source: "Google Sites Board",
    acquisition: "screenshot"
  }
];
