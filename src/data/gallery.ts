export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
  source: string;
  acquisition: "download" | "screenshot" | "provided";
}

export interface GalleryEvent {
  title: string;
  description: string;
  meta: string;
  items: GalleryItem[];
}

export const galleryEvents: GalleryEvent[] = [
  {
    title: "AI Star Fellowship Workshop",
    description: "TML joined Jeju National University for the AI Star Fellowship project workshop and team activities in Jeju.",
    meta: "Camphortree Hotel, Jeju · October 1–3, 2026",
    items: [
      {
        src: "/assets/img/gallery/ai-star-fellowship-workshop-jeju-2026-kickoff-group.jpg",
        alt: "Participants at the 2026 AI Star Fellowship kickoff workshop in Jeju",
        source: "TML",
        acquisition: "provided"
      },
      {
        src: "/assets/img/gallery/ai-star-fellowship-workshop-jeju-2026-session.jpg",
        alt: "AI Star Fellowship kickoff workshop session at Camphortree Hotel in Jeju",
        source: "TML",
        acquisition: "provided"
      },
      {
        src: "/assets/img/gallery/ai-star-fellowship-workshop-jeju-2026-01.jpg",
        alt: "TML members in a flower field during the AI Star Fellowship workshop in Jeju",
        source: "TML",
        acquisition: "provided"
      },
      {
        src: "/assets/img/gallery/ai-star-fellowship-workshop-jeju-2026-02.jpg",
        alt: "TML members visiting a citrus orchard during workshop team activities in Jeju",
        source: "TML",
        acquisition: "provided"
      },
      {
        src: "/assets/img/gallery/ai-star-fellowship-workshop-jeju-2026-03.jpg",
        alt: "TML members standing together by the coast in Jeju",
        source: "TML",
        acquisition: "provided"
      },
      {
        src: "/assets/img/gallery/ai-star-fellowship-workshop-jeju-2026-04.jpg",
        alt: "TML members taking a group selfie by the coast in Jeju",
        source: "TML",
        acquisition: "provided"
      },
      {
        src: "/assets/img/gallery/ai-star-fellowship-workshop-jeju-2026-05.jpg",
        alt: "TML members during team activities near Camphortree Hotel in Jeju",
        source: "TML",
        acquisition: "provided"
      }
    ]
  }
];

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
