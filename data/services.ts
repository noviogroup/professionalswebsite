import { ReactNode } from "react";

export type Service = {
  title: string;
  description: string;
  icon: ReactNode;
  href?: string;
  imageUrl?: string;
};

export const coreServices: Service[] = [
  {
    title: "Business Growth",
    description: "Strategies that accelerate revenue, strengthen margins and unlock lasting value.",
    icon: "📈"
  },
  {
    title: "Capital Markets",
    description: "Structure capital raises, debt instruments and equity rounds with confidence.",
    icon: "💹"
  },
  {
    title: "Business Planning",
    description: "Build data-driven plans aligned with objectives, budgets and stakeholder expectations.",
    icon: "🗂️"
  },
  {
    title: "Financial Planning",
    description: "Forecast, scenario plan and protect your financial position with clarity.",
    icon: "🧭"
  },
  {
    title: "Taxes Planning",
    description: "Integrated tax strategies that optimize liabilities while maintaining compliance.",
    icon: "🧾"
  },
  {
    title: "Audit Assurance",
    description: "Comprehensive audits and assurance engagements for regulatory confidence.",
    icon: "🔍"
  },
  {
    title: "Capital Restructuring",
    description: "Rebalance debt and equity, divest portfolios and unlock trapped capital.",
    icon: "🏛️"
  },
  {
    title: "Tax Consulting",
    description: "Navigate complex tax codes, cross-border implications and filings.",
    icon: "⚖️"
  },
  {
    title: "Professional Advisory",
    description: "Executive advisory across treasury operations, M&A and governance.",
    icon: "🤝"
  },
  {
    title: "Consulting Service",
    description: "Tailored consulting to streamline financial operations and drive efficiency.",
    icon: "🧠"
  }
];
