import type { ReliabilityProblem, ResearchLayer } from "./publications";

export interface ResearchArea {
  title: ResearchLayer;
  summary: string;
  koreanSummary: string;
  topics: string[];
  visualImage: string;
  visualAlt: string;
}

export const researchAreas: ResearchArea[] = [
  {
    title: "Reliable Computing",
    summary:
      "Computational foundations for reliable AI, spanning efficient execution, distributed systems, verifiability, and next-generation computing.",
    koreanSummary: "AI를 효율적이고 안정적으로 실행하기 위한 연산·시스템 기술을 연구합니다.",
    topics: ["Efficient Computing", "Distributed Computing", "Verifiable Computing", "Quantum / Next-Gen Computing"],
    visualImage: "/assets/img/publications/group-wise-verifiable-coded-computing.png",
    visualAlt: "Teaser figure for group-wise verifiable coded computing"
  },
  {
    title: "Foundation Models",
    summary:
      "Reliable training and inference for large language models, generative AI, and multimodal models.",
    koreanSummary: "LLM, 생성형 AI, 멀티모달 모델의 학습과 활용을 더 신뢰할 수 있게 만듭니다.",
    topics: ["LLMs", "Generative AI", "Multimodal Models"],
    visualImage: "/assets/img/publications/efficient-process-reward-modeling.png",
    visualAlt: "Teaser figure for efficient process reward modeling"
  },
  {
    title: "Physical World",
    summary:
      "Reliable AI for real-world perception and action, including autonomous driving, Vision-Language-Action (VLA) models, and embodied AI.",
    koreanSummary: "자율주행과 Vision-Language-Action (VLA) 등 실제 환경에서 동작하는 AI를 연구합니다.",
    topics: ["Autonomous Driving", "Vision-Language-Action (VLA)", "Embodied AI"],
    visualImage: "/assets/img/publications/mvp-lam-action-centric-latent-action.png",
    visualAlt: "Teaser figure for MVP-LAM action-centric latent action learning"
  }
];

export interface ReliabilityProblemDefinition {
  title: string;
  tags: ReliabilityProblem[];
  koreanQuestion: string;
}

export const reliabilityProblems: ReliabilityProblemDefinition[] = [
  {
    title: "Privacy & Unlearning",
    tags: ["Privacy", "Unlearning"],
    koreanQuestion: "민감한 정보를 보호하고 학습된 정보를 선택적으로 제거하면서 모델 성능을 어떻게 유지할 수 있을까?"
  },
  {
    title: "Robustness",
    tags: ["Robustness"],
    koreanQuestion: "Shortcut, spurious correlation, distribution shift에도 모델이 안정적으로 동작하게 할 수 있을까?"
  },
  {
    title: "Fairness",
    tags: ["Fairness"],
    koreanQuestion: "데이터와 모델의 편향을 줄이고 공정한 판단을 어떻게 유도할 수 있을까?"
  },
  {
    title: "Alignment & Explainability",
    tags: ["Alignment", "Explainability"],
    koreanQuestion: "AI의 행동을 인간의 의도에 맞추고 판단 근거를 어떻게 이해할 수 있을까?"
  }
];
