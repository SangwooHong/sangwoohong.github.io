export type PublicationTopic =
  | "Reliable Computing"
  | "Foundation Models"
  | "Physical World"
  | "Reliable & Safe AI Algorithms";

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  topic: PublicationTopic;
  venueShort: string;
  image: string;
  links?: {
    paper?: string;
    code?: string;
    project?: string;
  };
  note?: string;
  featured?: boolean;
  representativeFor?: PublicationTopic[];
}

export const publications: Publication[] = [
  {
    id: "function-level-execution-feedback",
    title: "Function-Level Execution Feedback for Code Preference Optimization",
    authors: "Idris Nechnech, Sehwan Kim, Jimin Seo, Yeongoon Kim, Minhae Oh, Sangwoo Hong, Jungwoo Lee",
    venue: "Findings of the Association for Computational Linguistics: EMNLP",
    year: 2026,
    topic: "Foundation Models",
    venueShort: "EMNLP Findings",
    image: "/assets/img/publications/function-level-execution-feedback.png",
    links: {
      paper: "https://arxiv.org/abs/2608.23632",
      code: "https://github.com/inechnech/STEP-KTODER"
    },
    representativeFor: ["Foundation Models"]
  },
  {
    id: "geometry-preserving-robust-neural-reconstruction",
    title: "Geometry-Preserving Robust Neural Reconstruction via Statistical Reweighting",
    authors: "Jiyoon Shin, Sangwoo Hong",
    venue: "British Machine Vision Conference",
    year: 2026,
    topic: "Physical World",
    venueShort: "BMVC",
    image: "/assets/img/publications/geometry-preserving-robust-neural-reconstruction.png",
    representativeFor: ["Physical World"]
  },
  {
    id: "predlm",
    title: "PredLM: A Sparse Large Language Model Decoding Accelerator with Hardware-Efficient Zero-Activation Prediction",
    authors: "Seunghyun Moon, Seowon Ji, Sangwoo Hong, Eunji Kwon",
    venue: "IEEE Transactions on Circuits and Systems II: Express Briefs",
    year: 2026,
    topic: "Reliable Computing",
    venueShort: "TCAS-II",
    image: "/assets/img/publications/predlm-sparse-llm-decoding-accelerator.png",
    links: {
      paper: "https://doi.org/10.1109/TCSII.2026.3690531"
    },
    representativeFor: ["Reliable Computing"]
  },
  {
    id: "efficient-process-reward-modeling",
    title: "Efficient Process Reward Modeling via Contrastive Mutual Information",
    authors: "Nakyung Lee, Sangwoo Hong, Jungwoo Lee",
    venue: "The 64th Annual Meeting of the Association for Computational Linguistics (Main paper)",
    year: 2026,
    topic: "Foundation Models",
    venueShort: "ACL",
    image: "/assets/img/publications/efficient-process-reward-modeling.png",
    links: {
      paper: "https://aclanthology.org/2026.acl-long.1744/"
    },
    featured: true,
    representativeFor: ["Foundation Models"]
  },
  {
    id: "bias-alleviation-network-pruning",
    title: "Bias Alleviation through Network Pruning for Sparse and Debiased Models",
    authors: "Sangwoo Hong, Sehwan Kim, Hyungjun Joo, Hyeonggeun Han, Jiyoon Shin, Yoav Wald, and Jungwoo Lee",
    venue: "IEEE Transactions on Image Processing",
    year: 2026,
    topic: "Reliable & Safe AI Algorithms",
    venueShort: "TIP",
    image: "/assets/img/publications/bias-alleviation-network-pruning.png",
    links: {
      paper: "https://doi.org/10.1109/TIP.2026.3687070"
    },
    featured: true,
    representativeFor: ["Reliable & Safe AI Algorithms"]
  },
  {
    id: "beyond-prompts-diffusion-communication",
    title: "Beyond Prompts: Preserving Semantics in Diffusion-based Communication",
    authors: "Wonjung Kim, Nakyung Lee, Sangwoo Hong*, Jungwoo Lee",
    venue: "IEEE Wireless Communications Letters",
    year: 2026,
    topic: "Foundation Models",
    venueShort: "WCL",
    image: "/assets/img/publications/beyond-prompts-diffusion-communication.png",
    links: {
      paper: "https://ieeexplore.ieee.org/document/11432887"
    }
  },
  {
    id: "mvp-lam",
    title: "MVP-LAM: Learning Action-Centric Latent Action via Cross-Viewpoint Reconstruction",
    authors: "Jung Min Lee, Dohyeok Lee, Seokhun Ju, Taehyun Cho, Jin Woo Koo, Li Zhao, Sangwoo Hong, Jungwoo Lee",
    venue: "Proceedings of the 43rd International Conference on Machine Learning",
    year: 2026,
    topic: "Physical World",
    venueShort: "ICML",
    image: "/assets/img/publications/mvp-lam-action-centric-latent-action.png",
    links: {
      paper: "https://arxiv.org/abs/2602.03668",
      code: "https://github.com/jmSNU/mvp_lam",
      project: "https://jm-this.github.io/mvp_lam/"
    },
    featured: true,
    representativeFor: ["Physical World"]
  },
  {
    id: "adaptive-sampling-dataset-distillation",
    title: "An Adaptive Sampling Framework for Diffusion-based Dataset Distillation with High Fidelity and Diversity",
    authors: "Sunbeom Jeong, Sehwan Kim, Hyeonggeun Han, Hyungjun Joo, Sangwoo Hong, Jungwoo Lee",
    venue: "40th Annual AAAI Conference on Artificial Intelligence",
    year: 2026,
    topic: "Foundation Models",
    venueShort: "AAAI",
    image: "/assets/img/publications/adaptive-sampling-dataset-distillation.png",
    links: {
      paper: "https://ojs.aaai.org/index.php/AAAI/article/view/37447",
      code: "https://github.com/sb3991/adaptive-diffusion-dd"
    },
    note: "Oral Presentation",
    representativeFor: ["Foundation Models"]
  },
  {
    id: "operator-aware-shadow-importance-sampling",
    title: "Operator-aware shadow importance sampling for accurate fidelity estimation",
    authors: "Hyunho Cha, Sangwoo Hong, Jungwoo Lee",
    venue: "Physical Review A",
    year: 2026,
    topic: "Reliable Computing",
    venueShort: "PRA",
    image: "/assets/img/publications/operator-aware-shadow-importance-sampling.png",
    links: {
      paper: "https://doi.org/10.1103/9fr2-dvg7"
    },
    representativeFor: ["Reliable Computing"]
  },
  {
    id: "adjusting-initial-noise-memorization",
    title: "Adjusting Initial Noise to Mitigate Memorization in Text-to-Image Diffusion Models",
    authors: "Hyeonggeun Han*, Sehwan Kim*, Hyungjun Joo, Sangwoo Hong, Jungwoo Lee",
    venue: "The Thirty-ninth Annual Conference on Neural Information Processing Systems",
    year: 2025,
    topic: "Reliable & Safe AI Algorithms",
    venueShort: "NeurIPS",
    image: "/assets/img/publications/adjusting-initial-noise-memorization.png",
    links: {
      paper: "https://arxiv.org/abs/2510.08625"
    },
    representativeFor: ["Reliable & Safe AI Algorithms"]
  },
  {
    id: "mix-from-failure",
    title: "Mix from Failure: Confusion-Pairing Mixup for Long-Tailed Recognition",
    authors: "Youngseok Yoon, Sangwoo Hong, Hyungjoon Joo, Yao Qin, Haewon Jeong, Jungwoo Lee",
    venue: "arXiv",
    year: 2025,
    topic: "Reliable & Safe AI Algorithms",
    venueShort: "arXiv",
    image: "/assets/img/publications/mix-from-failure.png",
    links: {
      paper: "https://arxiv.org/abs/2411.07621"
    },
    note: "Preprint"
  },
  {
    id: "prototype-based-explanation",
    title: "Prototype-based Explanation for Semantic Gap Reduction with Distributional Embedding",
    authors: "Hyungjun Joo, Sangwoo Hong, Hyeonggeun Han, Youngseok Yoon, Jungwoo Lee",
    venue: "IEEE Access",
    year: 2025,
    topic: "Reliable & Safe AI Algorithms",
    venueShort: "IEEE Access",
    image: "/assets/img/publications/prototype-based-explanation.png",
    links: {
      paper: "https://doi.org/10.1109/ACCESS.2025.3535884"
    }
  },
  {
    id: "constructing-fair-latent-space",
    title: "Constructing Fair Latent Space for Intersection of Fairness and Explainability",
    authors: "Hyungjun Joo, Hyeonggeun Han, Sehwan Kim, Sangwoo Hong, Jungwoo Lee",
    venue: "The Association for the Advancement of Artificial Intelligence",
    year: 2025,
    topic: "Reliable & Safe AI Algorithms",
    venueShort: "AAAI",
    image: "/assets/img/publications/constructing-fair-latent-space.png",
    links: {
      paper: "https://arxiv.org/abs/2412.17523"
    }
  },
  {
    id: "mitigating-spurious-correlations",
    title: "Mitigating Spurious Correlations via Disagreement Probability",
    authors: "Hyeonggeun Han, Sehwan Kim, Hyungjun Joo, Sangwoo Hong, Jungwoo Lee",
    venue: "The Thirty-eighth Annual Conference on Neural Information Processing Systems",
    year: 2024,
    topic: "Reliable & Safe AI Algorithms",
    venueShort: "NeurIPS",
    image: "/assets/img/publications/mitigating-spurious-correlations.png",
    links: {
      paper: "https://proceedings.neurips.cc/paper_files/paper/2024/file/879c5890a9d2ecdcb590c9674cda4a59-Paper-Conference.pdf"
    },
    representativeFor: ["Reliable & Safe AI Algorithms"]
  },
  {
    id: "nerflex",
    title: "NeRFlex: Flexible Neural Radiance Fields with Diffeomorphic Deformation",
    authors: "Jiyoon Shin, Sangwoo Hong, Jungwoo Lee",
    venue: "IEEE Access",
    year: 2024,
    topic: "Physical World",
    venueShort: "IEEE Access",
    image: "/assets/img/publications/nerflex-diffeomorphic-deformation.png",
    links: {
      paper: "https://doi.org/10.1109/ACCESS.2024.3391735"
    }
  },
  {
    id: "dual-hierarchical-surface-reconstruction",
    title: "Learning Dual Hierarchical Representation for 3D Surface Reconstruction",
    authors: "Jiyoon Shin, Youngwook Kim, Sangwoo Hong, Jungwoo Lee",
    venue: "Asian Conference on Computer Vision",
    year: 2024,
    topic: "Physical World",
    venueShort: "ACCV",
    image: "/assets/img/publications/dual-hierarchical-surface-reconstruction.png",
    links: {
      paper: "https://openaccess.thecvf.com/content/ACCV2024/papers/Shin_Learning_Dual_Hierarchical_Representation_for_3D_Surface_Reconstruction_ACCV_2024_paper.pdf"
    },
    representativeFor: ["Physical World"]
  },
  {
    id: "group-wise-verifiable-coded-computing",
    title: "Group-wise Verifiable Coded Computing under Byzantine Attacks and Stragglers",
    authors: "Sangwoo Hong, Heecheol Yang, Youngseok Yoon, Jungwoo Lee",
    venue: "IEEE Transactions on Information Forensics and Security",
    year: 2024,
    topic: "Reliable Computing",
    venueShort: "TIFS",
    image: "/assets/img/publications/group-wise-verifiable-coded-computing.png",
    links: {
      paper: "https://doi.org/10.1109/TIFS.2024.3377929"
    },
    representativeFor: ["Reliable Computing"]
  },
  {
    id: "gbmix",
    title: "GBMix: Enhancing Fairness by Group-Balanced Mixup",
    authors: "Sangwoo Hong, Youngseok Yoon, Hyungjun Joo, Jungwoo Lee",
    venue: "IEEE Access",
    year: 2024,
    topic: "Reliable & Safe AI Algorithms",
    venueShort: "IEEE Access",
    image: "/assets/img/publications/gbmix-group-balanced-mixup.png",
    links: {
      paper: "https://doi.org/10.1109/ACCESS.2024.3358275"
    }
  },
  {
    id: "private-distributed-matrix-multiplication",
    title: "Straggler-Exploiting Fully Private Distributed Matrix Multiplication With Chebyshev Polynomials",
    authors: "Sangwoo Hong, Heecheol Yang, Youngseok Yoon, Jungwoo Lee",
    venue: "IEEE Transactions on Communications",
    year: 2023,
    topic: "Reliable Computing",
    venueShort: "TCOM",
    image: "/assets/img/publications/straggler-exploiting-private-matrix-multiplication.png",
    links: {
      paper: "https://doi.org/10.1109/TCOMM.2023.3236385"
    }
  },
  {
    id: "hierarchical-group-testing",
    title: "Hierarchical Group Testing for Byzantine Attack Identification in Distributed Matrix Multiplication",
    authors: "Sangwoo Hong, Heecheol Yang, Jungwoo Lee",
    venue: "IEEE Journal on Selected Areas in Communications",
    year: 2022,
    topic: "Reliable Computing",
    venueShort: "JSAC",
    image: "/assets/img/publications/hierarchical-group-testing.png",
    links: {
      paper: "https://doi.org/10.1109/JSAC.2022.3142364"
    }
  },
  {
    id: "securely-straggler-exploiting-coded-computation",
    title: "Securely Straggler-Exploiting Coded Computation for Distributed Matrix Multiplication",
    authors: "Heecheol Yang, Sangwoo Hong, Jungwoo Lee",
    venue: "IEEE Access",
    year: 2021,
    topic: "Reliable Computing",
    venueShort: "IEEE Access",
    image: "/assets/img/publications/securely-straggler-exploiting-coded-computation.png",
    links: {
      paper: "https://doi.org/10.1109/ACCESS.2021.3135581"
    }
  },
  {
    id: "chebyshev-polynomial-codes",
    title: "Chebyshev Polynomial Codes: Task Entanglement-based Coding for Distributed Matrix Multiplication",
    authors: "Sangwoo Hong, Heecheol Yang, Youngseok Yoon, Taehyun Cho, Jungwoo Lee",
    venue: "Proceedings of the 38th International Conference on Machine Learning",
    year: 2021,
    topic: "Reliable Computing",
    venueShort: "ICML",
    image: "/assets/img/publications/chebyshev-polynomial-codes.png",
    links: {
      paper: "https://proceedings.mlr.press/v139/hong21b.html"
    },
    note: "Oral Presentation"
  },
  {
    id: "squeezed-polynomial-codes",
    title: "Squeezed Polynomial Codes: Communication-Efficient Coded Computation in Straggler-Exploiting Distributed Matrix Multiplication",
    authors: "Sangwoo Hong, Heecheol Yang, Jungwoo Lee",
    venue: "IEEE Access",
    year: 2020,
    topic: "Reliable Computing",
    venueShort: "IEEE Access",
    image: "/assets/img/publications/squeezed-polynomial-codes.png",
    links: {
      paper: "https://doi.org/10.1109/ACCESS.2020.3031590"
    }
  }
];

export const featuredPublications = publications.filter((publication) => publication.featured);

export const getRepresentativePublications = (topic: PublicationTopic) =>
  publications.filter((publication) => publication.representativeFor?.includes(topic));
