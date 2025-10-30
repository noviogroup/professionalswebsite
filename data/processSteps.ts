export type ProcessStep = {
  title: string;
  description: string;
  icon: string;
};

export const financialProcess: ProcessStep[] = [
  {
    title: "Basic Research",
    description: "We immerse ourselves in your financial data, goals and regulatory obligations.",
    icon: "🔎"
  },
  {
    title: "Discovery",
    description: "Collaborative workshops identify opportunities, risks and stakeholder priorities.",
    icon: "🧩"
  },
  {
    title: "Build Plan",
    description: "We design a phased roadmap with measurable milestones and governance.",
    icon: "🛠️"
  },
  {
    title: "Execute",
    description: "Specialists activate your plan, track KPIs and iterate for sustained success.",
    icon: "🚀"
  }
];
