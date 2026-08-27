import type { PublicationTopic } from "./publications";

export interface ResearchArea {
  title: Exclude<PublicationTopic, "Reliable & Safe AI Algorithms">;
  summary: string;
  topics: string[];
}

export const researchAreas: ResearchArea[] = [
  {
    title: "Reliable Computing",
    summary:
      "Computational foundations for reliable AI, spanning efficient execution, distributed systems, verifiability, and next-generation computing.",
    topics: ["Efficient Computing", "Distributed Computing", "Verifiable Computing", "Quantum / Next-Gen Computing"]
  },
  {
    title: "Foundation Models",
    summary:
      "Reliable training and inference for large language models, generative AI, and multimodal models.",
    topics: ["LLMs", "Generative AI", "Multimodal Models"]
  },
  {
    title: "Physical World",
    summary:
      "Reliable AI for real-world perception and action, including autonomous driving, VLA models, embodied AI, and robotics.",
    topics: ["Autonomous Driving", "Vision-Language-Action", "Embodied AI", "Robotics"]
  }
];

export const crossCutting: {
  title: "Reliable & Safe AI Algorithms";
  summary: string;
  topics: string[];
} = {
  title: "Reliable & Safe AI Algorithms",
  summary:
    "Cross-layer methods that make AI systems private, robust, interpretable, aligned, and correctable across computing, models, and deployment.",
  topics: ["Unlearning", "Privacy", "Robustness", "Alignment", "Explainability"]
};
