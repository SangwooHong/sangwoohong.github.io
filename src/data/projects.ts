export type ProjectStatus = "Upcoming" | "Ongoing" | "Completed";

export interface Project {
  title: string;
  originalTitle?: string;
  agency: string;
  role?: string;
  startDate: string;
  endDate: string;
  themes: string[];
  description: string;
  statusOverride?: ProjectStatus;
}

export interface ProjectWithStatus extends Project {
  status: ProjectStatus;
}

export const projects: Project[] = [
  {
    title: "AI Research Computing Support Project",
    originalTitle: "AI연구용컴퓨팅지원프로젝트",
    agency: "KETI, Korea Electronics Technology Institute",
    startDate: "2026-11-20",
    endDate: "2027-03-20",
    themes: ["Infrastructure", "Foundation Models", "GPU Computing"],
    description:
      "Confirmed research computing support with access to eight NVIDIA B200 GPUs for AI research workloads."
  },
  {
    title: "AI Star Fellowship: Deepfake Defense and Agent Authentication",
    originalTitle: "AI스타펠로우십지원(제주대학교, 학제연계형)",
    agency: "Jeju National University (lead), Konkuk University, NC AI, Metsakuur Company, AIVIS",
    role: "Prof. Sangwoo Hong serves as Project 2 Leader.",
    startDate: "2026-07-01",
    endDate: "2031-12-31",
    themes: ["Trustworthy AI", "Deepfake Defense", "Agent Authentication"],
    description:
      "Konkuk's Project 2 studies proactive defense for AI video-call-based multi-unit deepfakes and authentication technologies for AI agents."
  },
  {
    title: "Global Talent Development in Copyright Technology",
    originalTitle: "저작권 기술 글로벌 인재 양성",
    agency: "Ministry of Culture, Sports and Tourism / Korea Creative Content Agency",
    startDate: "2026-04-01",
    endDate: "2029-12-31",
    themes: ["Generative AI", "Copyright Technology", "Trustworthy AI"],
    description:
      "A talent development and research program for copyright technology in the era of generative AI."
  },
  {
    title: "Advanced Industry Talent Training Bootcamp",
    originalTitle: "첨단산업 인재양성 부트캠프",
    agency: "Korea Institute for Advancement of Technology",
    startDate: "2026-04-01",
    endDate: "2031-12-31",
    themes: ["Education", "AI Training", "Industry Collaboration"],
    description:
      "An advanced industry workforce development program supported by KIAT."
  },
  {
    title: "Verifiable Privacy-Preserving Machine Unlearning",
    originalTitle: "검증 가능한 프라이버시 보존형 머신 언러닝",
    agency: "National Research Foundation of Korea, Early-Career Researcher Program Type A",
    startDate: "2026-03-01",
    endDate: "2029-02-28",
    themes: ["Unlearning", "Privacy", "Verifiable Computing"],
    description:
      "Research on machine unlearning methods that support verifiability and privacy-preserving guarantees."
  },
  {
    title: "Coded Operation-Based Tensor Contraction for Quantum Simulation",
    originalTitle: "양자 시뮬레이션을 위한 부호화 연산 기반 텐서 수축 기법",
    agency: "National Research Foundation of Korea, Outstanding Early-Career Researcher Seed Grant",
    startDate: "2025-09-01",
    endDate: "2026-08-31",
    themes: ["Reliable Computing", "Quantum Computing", "Tensor Contraction"],
    description:
      "Robust and efficient quantum circuit simulation through coded operation-based tensor contraction."
  }
];

const dateKey = (date: Date) => {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return values.year + "-" + values.month + "-" + values.day;
};

export const getProjectStatus = (project: Project, today = new Date()): ProjectStatus => {
  if (project.statusOverride) return project.statusOverride;

  const current = dateKey(today);
  if (current < project.startDate) return "Upcoming";
  if (current <= project.endDate) return "Ongoing";
  return "Completed";
};

export const getProjectsWithStatus = (today = new Date()): ProjectWithStatus[] =>
  projects.map((project) => ({
    ...project,
    status: getProjectStatus(project, today)
  }));

const formatDate = (value: string) => value.replaceAll("-", ".");

export const formatProjectDuration = (project: Project) =>
  formatDate(project.startDate) + " - " + formatDate(project.endDate);
