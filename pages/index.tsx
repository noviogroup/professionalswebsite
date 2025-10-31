import Head from "next/head";
import Link from "next/link";
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
    icon: "",
    label: "40+ Years Serving Members"
  },
  {
    icon: "",
    label: "Competitive Rates"
  },
  {
    icon: "",
    label: "Community Focused"
  }
];

const strategyPoints = [
  "Low-interest loans tailored to your needs",
  "High-yield savings accounts to grow your wealth",
  "Dedicated support from a team that understands law enforcement"
];

const reasons = [
  {
    title: "Low-Rate Loans",
    description: "Consumer, vehicle, property, and education loans with competitive rates.",
    icon: ""
  },
  {
    title: "High-Yield Savings",
    description: "Grow your wealth with savings accounts and fixed deposits.",
    icon: ""
  },
  {
    title: "Member-Owned",
    description: "As a cooperative, profits go back to members through better rates.",
    icon: ""
  },
  {
    title: "Fast Approvals",
    description: "Quick loan processing to meet your urgent financial needs.",
    icon: ""
  },
  {
    title: "Financial Education",
    description: "Free counseling and resources to help you make informed decisions.",
    icon: ""
  }
];

const highlights = [
  "Personalized loan options for every need",
  "No hidden fees or surprise charges",
  "Local decision-making by people who know you"
];

const trioItems = [
  {
    title: "Consumer Loans",
    description: "Personal loans for any purpose with flexible repayment terms.",
    imageUrl: "https://images.pexels.com/photos/4968382/pexels-photo-4968382.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80"
  },
  {
    title: "Vehicle Financing",
    description: "Get behind the wheel with affordable auto loans.",
    imageUrl: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80"
  },
  {
    title: "Savings Plans",
    description: "Build your future with competitive savings rates and fixed deposits.",
    imageUrl: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80"
  }
];

export default function HomePage() {
  return (
    <>
      <Head>
        <title>BLECCU | Bahamas Law Enforcement Co-operative Credit Union</title>
        <meta
          name="description"
          content="Serving Bahamas law enforcement professionals since 1985 with trusted financial services including loans, savings, and member benefits."
        />
      </Head>

      <HeroBanner
        eyebrow="SERVING LAW ENFORCEMENT SINCE 1985"
        title={
          <>
            Your financial partner for <span className={heroStyles.headlineHighlight}>growth</span> and <span className={heroStyles.headlineHighlight}>security</span>.
          </>
        }
        description="BLECCU provides affordable loans, competitive savings rates, and dedicated member support to Bahamas law enforcement professionals."
        backgroundImage="https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=1800&q=80"
      >
        <div>
          <Link href="/membership" className={heroStyles.heroButton}>
            Join BLECCU
            <span>→</span>
          </Link>
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
            eyebrow="Our Commitment"
            title="Financial services designed for law enforcement"
            description="As a member-owned credit union, we prioritize your financial well-being with personalized service and competitive rates."
            align="left"
          />
          <ul style={{ margin: 0, paddingLeft: "1.3rem", color: "var(--color-muted)", display: "grid", gap: "0.75rem" }}>
            {strategyPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div>
            <Link href="/membership" className="btn">
              Become a Member
            </Link>
          </div>
        </div>
      </section>

      <CountersStrip
        eyebrow="Our Impact"
        title="Trusted by Bahamas law enforcement community"
        description="Four decades of reliable service to those who serve and protect our communities."
        metrics={[
          { label: "Years of Service", value: 40, suffix: "+" },
          { label: "Active Members", value: 1500, suffix: "+" },
          { label: "Loans Approved", value: 5000, suffix: "+" },
          { label: "Community Partners", value: 8, suffix: "" }
        ]}
      />

      <ServicesShowcase imageUrl="https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80" />

      <WhyChooseUs reasons={reasons} highlights={highlights} />

      <ImageTrio
        eyebrow="Our Services"
        title="Financial products designed for you"
        subtitle="Explore our full range of loans, savings, and member benefits."
        items={trioItems}
      />

      <ProcessSteps steps={financialProcess} title="Simple membership process" eyebrow="How It Works" />

      <TeamGrid
        members={teamMembers}
        title="Meet the dedicated team serving our members"
        subtitle="Our board, committees, and staff are committed to your financial success."
        actionLabel="View Full Team"
        actionHref="/about"
      />

      <TestimonialsCarousel
        testimonials={testimonials}
        title="What our members say about BLECCU"
        subtitle="Trusted by law enforcement professionals across the Bahamas."
        ratingLabel="★ 4.8/5"
      />

      <PartnerLogos
        title="Proudly serving Bahamas law enforcement agencies"
        subtitle="Partner organizations include RBPF, RBDF, Correctional Services, Immigration, Customs, and more."
        logos={partnerLogos}
      />
    </>
  );
}
