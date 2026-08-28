import type { ReliabilityProblem, ResearchLayer } from "./publications";

export interface CurrentResearch {
  id: string;
  title: string;
  shortTitle?: string;
  koreanSummary: string;
  question: string;
  layer: ResearchLayer;
  algorithmTags?: ReliabilityProblem[];
  domainTags?: string[];
  featuredOnHome?: boolean;
}

export const currentResearch: CurrentResearch[] = [
  {
    id: "sequential-machine-unlearning",
    title: "Preventing Degradation in Sequential Machine Unlearning",
    koreanSummary: "연속적인 정보 삭제가 누적될 때 발생하는 모델 성능 저하를 분석하고 완화합니다.",
    question: "How can models keep forgetting without progressively losing their capabilities?",
    layer: "Foundation Models",
    algorithmTags: ["Unlearning"],
    featuredOnHome: true
  },
  {
    id: "qng-accelerated-quantum-optimization",
    title: "Accelerating Variational Quantum Algorithms with Quantum Natural Gradient",
    shortTitle: "QNG-Accelerated Quantum Optimization",
    koreanSummary: "QNG의 측정·피드백 비용을 줄여 변분 양자 알고리즘의 최적화를 가속합니다.",
    question: "How can we reduce measurement and feedback latency in quantum natural gradient optimization?",
    layer: "Reliable Computing",
    domainTags: ["Quantum Computing", "Efficient Optimization"],
    featuredOnHome: true
  },
  {
    id: "multi-agent-hallucination-detection",
    title: "Hallucination Detection in Multi-Agent Systems",
    koreanSummary: "여러 AI 에이전트가 상호작용할 때 발생하고 전파되는 hallucination을 탐지합니다.",
    question: "How do hallucinations emerge and propagate among interacting AI agents?",
    layer: "Foundation Models",
    domainTags: ["Multi-Agent Systems", "Reliability"],
    featuredOnHome: true
  },
  {
    id: "shortcut-bias-autonomous-driving",
    title: "Detecting Shortcut Bias in World Models for Autonomous Driving",
    koreanSummary: "자율주행 월드 모델이 실제 세계의 구조가 아닌 데이터의 shortcut에 의존하는 현상을 탐지합니다.",
    question: "Are world models learning the physical world — or shortcuts in the data?",
    layer: "Physical World",
    algorithmTags: ["Robustness"],
    featuredOnHome: true
  },
  {
    id: "spurious-correlations-protein-models",
    title: "Mitigating Spurious Correlations in Protein Foundation Models",
    koreanSummary: "단백질 모델이 사용하는 비생물학적 spurious signal과 shortcut을 탐지하고 완화합니다.",
    question: "Do protein models rely on non-biological shortcuts, and how can we identify and mitigate them?",
    layer: "Foundation Models",
    algorithmTags: ["Robustness"],
    domainTags: ["AI for Science"],
    featuredOnHome: true
  },
  {
    id: "explainable-autonomous-driving",
    title: "Explainable Decision-Making for Autonomous Driving",
    koreanSummary: "자율주행 AI의 판단 근거를 설명하고 검증하는 방법을 연구합니다.",
    question: "How can we understand and verify why autonomous-driving models make particular decisions?",
    layer: "Physical World",
    algorithmTags: ["Explainability"]
  },
  {
    id: "data-informed-quantum-kernels",
    title: "Data-Informed Quantum Kernels for Time-Series Forecasting",
    koreanSummary: "시계열 데이터의 구조적 특성을 inductive bias로 반영한 양자 커널을 설계합니다.",
    question: "Can data-informed inductive biases make quantum kernels better suited for structured time-series forecasting?",
    layer: "Reliable Computing",
    domainTags: ["Quantum Machine Learning", "Time-Series Forecasting", "Inductive Bias"]
  },
  {
    id: "diffusion-language-model-pruning",
    title: "Efficient Pruning for Diffusion Language Models",
    koreanSummary: "Diffusion language model의 구조적 특성을 활용해 성능을 유지하면서 모델을 효율적으로 경량화합니다.",
    question: "How should diffusion language models be pruned while preserving generation quality?",
    layer: "Foundation Models",
    domainTags: ["Diffusion Language Models", "Model Efficiency"]
  }
];

export const homeCurrentResearch = currentResearch.filter((item) => item.featuredOnHome);

export const getCurrentResearchByAlgorithm = (problem: ReliabilityProblem) =>
  currentResearch.filter((item) => item.algorithmTags?.includes(problem));
