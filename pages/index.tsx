import Head from "next/head";
import HeroBanner from "@/components/common/HeroBanner";
import SectionHeading from "@/components/common/SectionHeading";
import CountersStrip from "@/components/common/CountersStrip";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import ImageTrio from "@/components/home/ImageTrio";
import ProcessSteps from "@/components/common/ProcessSteps";
import TeamGrid from "@/components/team/TeamGrid";
import TestimonialsCarousel from "@/components/testimonials/TestimonialsCarousel";
import PartnerLogos from "@/components/common/PartnerLogos";
import { financialProcess } from "@/data/processSteps";
import { teamMembers } from "@/data/team";
import { testimonials } from "@/data/testimonials";
import { partnerLogos } from "@/data/partners";
import heroStyles from "@/styles/HomeHero.module.css";

const heroHighlights = [
  {
    icon: "📸",
    label: "Trusted Insight"
  },
  {
    icon: "📈",
    label: "Proven Success"
  },
  {
    icon: "🛠️",
    label: "Ongoing Support"
  }
];

const strategyPoints = [
  "Diagnose financial blind spots with precision",
  "Deliver actionable plans for every stage of your growth",
  "Implement technology that increases visibility and control"
];

const reasons = [
  {
    title: "Business Growth",
    description: "Unlock performance with tailored growth blueprints.",
    icon: "🚀"
  },
  {
    title: "Capital Markets",
    description: "Navigate listings, raises and investor reporting with ease.",
    icon: "💼"
  },
  {
    title: "Business Planning",
    description: "Translate strategy into measurable execution plans.",
    icon: "🗓️"
  },
  {
    title: "Financial Planning",
    description: "Model cash flow scenarios and protect profitability.",
    icon: "📊"
  },
  {
    title: "Taxes Planning",
    description: "Reduce liabilities while staying compliant globally.",
    icon: "🧾"
  }
];

const highlights = [
  "Social security & pension optimization",
  "GST / TDS / income tax filings",
  "Tax deductions & exemptions guidance"
];

const trioItems = [
  {
    title: "Market Research",
    description: "Gain strategic advantage with data-backed market intelligence.",
    imageUrl: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Risk Management",
    description: "Identify, assess and mitigate financial and operational risks.",
    imageUrl: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Tax Preparation",
    description: "Prepare precise filings and stay ahead of evolving regulations.",
    imageUrl: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80&sat=-20"
  }
];

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Gudfin Advisory | Financial Strategy & Consulting</title>
        <meta
          name="description"
          content="Gudfin Advisory empowers organisations with data-driven financial strategy, tax planning, compliance and advisory services."
        />
      </Head>

      <HeroBanner
        eyebrow="YOUR GROWTH, OUR EXPERTISE"
        title={
          <>
            Investment that moves <span className={heroStyles.headlineHighlight}>business</span> forward.
          </>
        }
        description="We partner with ambitious teams to modernise accounting, optimise tax positions and unlock new revenue opportunities."
        backgroundImage="https://images.unsplash.com/premium_photo-1682146213935-13568cdc6d55?auto=format&fit=crop&w=1800&q=80"
      >
        <div>
          <a href="/about" className={heroStyles.heroButton}>
            Discover More
            <span>→</span>
          </a>
        </div>
        <div className={heroStyles.heroHighlights}>
          {heroHighlights.map((item) => (
            <div key={item.label} className={heroStyles.highlightItem}>
              <span className={heroStyles.highlightIcon}>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
      </HeroBanner>

      <section className="section">
        <div className="container" style={{ display: "grid", gap: "2rem" }}>
          <SectionHeading
            eyebrow="Strategies"
            title="Top strategies for achieving sustainable business"
            description="We align capital, operations and technology to help small businesses thrive in dynamic markets."
            align="left"
          />
          <ul style={{ margin: 0, paddingLeft: "1.3rem", color: "var(--color-muted)", display: "grid", gap: "0.75rem" }}>
            {strategyPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div>
            <a href="/contact" className="btn">
              Let&apos;s Start
            </a>
          </div>
        </div>
      </section>

      <CountersStrip
        eyebrow="Performance Insights"
        title="We’re driving results for fast-growing businesses."
        description="Quantifiable outcomes backed by proven methodologies and accountable teams."
        metrics={[
          { label: "Years of Working Experience", value: 18, suffix: "+" },
          { label: "Customers Worldwide", value: 20000, suffix: "+" },
          { label: "Financial Solutions Implemented", value: 320, suffix: "+" },
          { label: "Projects Delivered", value: 56, suffix: "+" }
        ]}
      />

      <ServicesShowcase imageUrl="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80" />

      <WhyChooseUs reasons={reasons} highlights={highlights} />

      <ImageTrio
        eyebrow="Insights"
        title="Build insight that fuels advantage"
        subtitle="Our analysts deliver the research and risk modelling you need to stay ahead."
        items={trioItems}
      />

      <ProcessSteps steps={financialProcess} title="Successful financial control process" eyebrow="Process" />

      <TeamGrid
        members={teamMembers}
        title="Our nearly 350+ expert team members are ready to help now."
        subtitle="Meet the advisors guiding leading brands with clarity and conviction."
        actionLabel="See All Advisor"
        actionHref="/about#team"
      />

      <TestimonialsCarousel
        testimonials={testimonials}
        title="What our clients say about working with Gudfin."
        subtitle="We’ve delivered 56+ projects that help companies generate real results."
        ratingLabel="★ 4.9/5"
      />

      <PartnerLogos
        title="Trusted by 50+ businesses"
        subtitle="Customer satisfaction 95%+ empowering 50+ brands worldwide."
        logos={partnerLogos}
      />
    </>
  );
}
