import type { ReliabilityProblem, ResearchLayer } from "./publications";

export interface ResearchArea {
  title: ResearchLayer;
  summary: string;
  koreanSummary: string;
  topics: string[];
}

export const researchAreas: ResearchArea[] = [
  {
    title: "Reliable Computing",
    summary:
      "Computational foundations for reliable AI, spanning efficient execution, distributed systems, verifiability, and next-generation computing.",
    koreanSummary: "효율적이고 검증 가능한 AI를 위한 계산 및 시스템 기반을 연구합니다.",
    topics: ["Efficient Computing", "Distributed Computing", "Verifiable Computing", "Quantum / Next-Gen Computing"]
  },
  {
    title: "Foundation Models",
    summary:
      "Reliable training and inference for large language models, generative AI, and multimodal models.",
    koreanSummary: "LLM, 생성형 AI, 멀티모달 모델의 학습과 추론을 더 신뢰할 수 있게 만듭니다.",
    topics: ["LLMs", "Generative AI", "Multimodal Models"]
  },
  {
    title: "Physical World",
    summary:
      "Reliable AI for real-world perception and action, including autonomous driving, Vision-Language-Action (VLA) models, and embodied AI.",
    koreanSummary: "자율주행과 embodied AI처럼 실제 환경에서 인식하고 행동하는 AI를 연구합니다.",
    topics: ["Autonomous Driving", "Vision-Language-Action (VLA)", "Embodied AI"]
  }
];

export interface ReliabilityProblemDefinition {
  title: ReliabilityProblem;
  koreanQuestion: string;
}

export const reliabilityProblems: ReliabilityProblemDefinition[] = [
  {
    title: "Unlearning",
    koreanQuestion: "학습된 정보를 선택적으로 제거하면서 모델의 성능을 어떻게 유지할 수 있을까?"
  },
  {
    title: "Privacy",
    koreanQuestion: "학습 데이터와 모델에 포함된 민감한 정보를 어떻게 보호할 수 있을까?"
  },
  {
    title: "Robustness",
    koreanQuestion: "Shortcut, spurious correlation, distribution shift에도 모델이 안정적으로 동작하게 할 수 있을까?"
  },
  {
    title: "Alignment",
    koreanQuestion: "AI의 행동을 인간의 선호와 의도에 어떻게 맞출 수 있을까?"
  },
  {
    title: "Explainability",
    koreanQuestion: "AI가 어떤 근거로 판단하는지 어떻게 이해하고 검증할 수 있을까?"
  }
];
