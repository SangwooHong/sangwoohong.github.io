import type { ReliabilityProblem, ResearchLayer } from "./publications";

export interface CurrentResearch {
  id: string;
  title: string;
  shortTitle?: string;
  displayKeyword?: string;
  homepageTitle?: string;
  homepageQuestionKo?: string;
  homepageOrder?: number;
  koreanSummary: string;
  question: string;
  image?: string;
  imageAlt?: string;
  layer: ResearchLayer;
  algorithmTags?: ReliabilityProblem[];
  domainTags?: string[];
  featuredOnHome?: boolean;
}

export const currentResearch: CurrentResearch[] = [
  {
    id: "sequential-machine-unlearning",
    title: "Preventing Degradation in Sequential Machine Unlearning",
    displayKeyword: "Unlearning",
    homepageTitle: "Sequential Machine Unlearning",
    homepageQuestionKo: "반복적인 정보 삭제에도 모델의 성능을 유지할 수 있을까?",
    homepageOrder: 1,
    koreanSummary: "연속적인 정보 삭제가 누적될 때 발생하는 모델 성능 저하를 분석하고 완화합니다.",
    question: "How can models keep forgetting without progressively losing their capabilities?",
    image: "/assets/img/current-research/sequential-machine-unlearning.png",
    imageAlt: "Sequential machine unlearning diagram comparing unstable naive unlearning with stable unlearning across repeated deletion requests.",
    layer: "Foundation Models",
    algorithmTags: ["Unlearning"],
    featuredOnHome: true
  },
  {
    id: "qng-accelerated-quantum-optimization",
    title: "Accelerating Variational Quantum Algorithms with Quantum Natural Gradient",
    shortTitle: "QNG-Accelerated Quantum Optimization",
    displayKeyword: "Quantum Computing",
    homepageTitle: "QNG-Accelerated Quantum Optimization",
    homepageQuestionKo: "측정과 피드백 비용을 줄여 양자 최적화를 가속할 수 있을까?",
    homepageOrder: 5,
    koreanSummary: "QNG의 측정·피드백 비용을 줄여 변분 양자 알고리즘의 최적화를 가속합니다.",
    question: "How can we reduce measurement and feedback latency in quantum natural gradient optimization?",
    image: "/assets/img/current-research/qng-quantum-optimization.png",
    imageAlt: "Quantum natural gradient diagram comparing block-diagonal QFIM estimation with an adaptive mask.",
    layer: "Reliable Computing",
    domainTags: ["Quantum Computing", "Efficient Optimization"],
    featuredOnHome: true
  },
  {
    id: "multi-agent-hallucination-detection",
    title: "Hallucination Detection in Multi-Agent Systems",
    displayKeyword: "Multi-Agent Systems",
    homepageTitle: "Hallucination Detection",
    homepageQuestionKo: "에이전트 간 hallucination은 어떻게 발생하고 전파되는가?",
    homepageOrder: 3,
    koreanSummary: "여러 AI 에이전트가 상호작용할 때 발생하고 전파되는 hallucination을 탐지합니다.",
    question: "How do hallucinations emerge and propagate among interacting AI agents?",
    image: "/assets/img/current-research/multi-agent-hallucination.png",
    imageAlt: "Multi-agent interaction diagram showing how hallucinations emerge and propagate between agents.",
    layer: "Foundation Models",
    domainTags: ["Multi-Agent Systems", "Reliability"],
    featuredOnHome: true
  },
  {
    id: "shortcut-bias-autonomous-driving",
    title: "Detecting Shortcut Bias in World Models for Autonomous Driving",
    displayKeyword: "World Models",
    homepageTitle: "Shortcut Bias in Autonomous Driving",
    homepageQuestionKo: "월드 모델은 실제 세계를 학습하는가, 데이터의 shortcut을 학습하는가?",
    homepageOrder: 2,
    koreanSummary: "자율주행 월드 모델이 실제 세계의 구조가 아닌 데이터의 shortcut에 의존하는 현상을 탐지합니다.",
    question: "Are world models learning the physical world — or shortcuts in the data?",
    image: "/assets/img/current-research/autonomous-driving-shortcut-bias.png",
    imageAlt: "Autonomous driving world model diagram contrasting shortcut cues with physical road structure.",
    layer: "Physical World",
    algorithmTags: ["Robustness"],
    featuredOnHome: true
  },
  {
    id: "spurious-correlations-protein-models",
    title: "Mitigating Spurious Correlations in Protein Foundation Models",
    displayKeyword: "AI for Science",
    homepageTitle: "Protein Foundation Models",
    homepageQuestionKo: "단백질 모델은 비생물학적 shortcut에 의존하는가?",
    homepageOrder: 4,
    koreanSummary: "단백질 모델이 사용하는 비생물학적 spurious signal과 shortcut을 탐지하고 완화합니다.",
    question: "Do protein models rely on non-biological shortcuts, and how can we identify and mitigate them?",
    image: "/assets/img/current-research/protein-foundation-model-spurious-correlations.png",
    imageAlt: "Protein foundation model diagram showing a prediction failure caused by a spurious sequence cue.",
    layer: "Foundation Models",
    algorithmTags: ["Robustness"],
    domainTags: ["AI for Science"],
    featuredOnHome: true
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
    image: "/assets/img/current-research/diffusion-language-model-pruning.png",
    imageAlt: "Diffusion language model pruning diagram showing redundant model components removed across denoising steps.",
    layer: "Foundation Models",
    domainTags: ["Diffusion Language Models", "Model Efficiency"]
  },
  {
    id: "mechanistic-interpretability-data-generation",
    title: "Mechanistic Interpretability for High-Quality LLM Data Generation",
    koreanSummary: "Large Language Model의 학습 데이터를 생성할 때 mechanistic interpretability를 활용해 데이터의 품질을 평가하고 향상하는 방법을 연구합니다.",
    question: "Can mechanistic interpretability guide the generation of higher-quality data for large language models?",
    image: "/assets/img/current-research/mechanistic-interpretability-data-generation.png",
    imageAlt: "Mechanistic interpretability diagram using internal LLM features to guide high-quality data generation.",
    layer: "Foundation Models",
    algorithmTags: ["Explainability"],
    domainTags: ["Mechanistic Interpretability", "Data Generation"]
  },
  {
    id: "verifiable-coded-computing-collusion",
    title: "Verifiable Distributed Computing Against Colluding Malicious Workers",
    koreanSummary: "분산 계산 환경에서 일부 참여자들이 서로 공모해 잘못된 결과를 내더라도 계산 결과를 검증할 수 있는 방법을 연구합니다.",
    question: "How can distributed computation remain verifiable when malicious workers collude?",
    layer: "Reliable Computing",
    domainTags: ["Verifiable Computing", "Distributed Computing", "Secure AI Computation"]
  }
];

export const homeCurrentResearch = currentResearch
  .filter((item) => item.featuredOnHome)
  .sort((a, b) => (a.homepageOrder ?? 0) - (b.homepageOrder ?? 0));

export const getCurrentResearchByAlgorithm = (problem: ReliabilityProblem) =>
  currentResearch.filter((item) => item.algorithmTags?.includes(problem));
