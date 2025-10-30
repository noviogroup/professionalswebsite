export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  icon: string;
};

export const companyTimeline: TimelineEvent[] = [
  {
    year: "2015",
    title: "Started Company",
    description:
      "We screened ideas, validated market gaps and conceptualised business opportunities with early partners.",
    icon: "🚀"
  },
  {
    year: "2017",
    title: "Expert Member",
    description:
      "Expanded our bench with seasoned experts who aligned around shared goals, roles and client outcomes.",
    icon: "🤝"
  },
  {
    year: "2019",
    title: "Multiple Branches",
    description:
      "Opened new offices as we adopted high-performance work practices and extended reach across regions.",
    icon: "🌍"
  },
  {
    year: "2021",
    title: "Evolved Over",
    description:
      "Scaled into a diversified advisory trusted by global enterprises and emerging companies alike.",
    icon: "🏢"
  }
];
