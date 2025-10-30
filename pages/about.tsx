import Head from "next/head";
import HeroBanner from "@/components/common/HeroBanner";
import SectionHeading from "@/components/common/SectionHeading";
import ProcessSteps from "@/components/common/ProcessSteps";
import PartnerLogos from "@/components/common/PartnerLogos";
import TeamGrid from "@/components/team/TeamGrid";
import { financialProcess } from "@/data/processSteps";
import { partnerLogos } from "@/data/partners";
import { teamMembers } from "@/data/team";
import styles from "@/styles/About.module.css";

const missionCards = [
  {
    icon: "💼",
    title: "Payroll processing services",
    description: "End-to-end payroll, compliance and reporting managed by specialists."
  },
  {
    icon: "🏆",
    title: "Expertise you can trust",
    description: "Advisors with deep experience across accounting, tax and global operations."
  },
  {
    icon: "📊",
    title: "Business financial planning",
    description: "Scenario planning that aligns cash flow, investment and growth targets."
  }
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Gudfin Advisory | Experienced Financial Consultants</title>
        <meta
          name="description"
          content="Since 1998, Gudfin Advisory has delivered exceptional accounting, taxation and payroll processing services for growth-focused businesses."
        />
      </Head>

      <HeroBanner
        eyebrow="About Us"
        title="With years of experience and a results-focused approach, we empower businesses to navigate complexity and achieve their goals."
        description="Our advisory practice blends global reach with local insight so you can seize opportunities, reduce risk and scale with confidence."
        backgroundImage="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80"
        actions={[{ label: "Discover More", href: "/services", variant: "primary" }]}
      />

      <section className={styles.missionSection}>
        <div className="container">
          <SectionHeading
            eyebrow="Our Mission"
            title="With a global reach, our firm has been in business since 1998."
            description="We provide exceptional accounting, taxation and payroll processing services delivered by agile teams and advanced technology."
          />
          <div className={styles.missionGrid}>
            {missionCards.map((card) => (
              <div key={card.title} className={styles.missionCard}>
                <span>{card.icon}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
          <div className={styles.missionDetails}>
            <p>
              We believe every business deserves transparent insight and proactive partnership. Our methodology combines data,
              automation and human expertise to deliver measurable outcomes across accounting, tax and financial planning.
            </p>
            <div>
              <h3>Where we make the difference</h3>
              <ul>
                <li>Tax relief and refund claims handled end-to-end</li>
                <li>Support for first-time filers with guided onboarding</li>
                <li>Solutions for couriers, riders and drivers with unique needs</li>
              </ul>
            </div>
            <div>
              <a href="/contact" className="btn">
                Discover More
              </a>
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps steps={financialProcess} title="Successful financial control process" eyebrow="Process" />

      <section className={styles.blockquoteSection}>
        <div className="container">
          <div className={styles.blockquote}>
            <span className="tagline">Client Stories</span>
            <h2>The team is professional, transparent, and always available to answer my questions.</h2>
            <p>
              “They truly care about my financial success. From compliance to strategic planning, Gudfin Advisory continues to
              deliver beyond expectations.”
            </p>
            <strong>Stephen Welch — Managing Director, Summit Partners</strong>
          </div>
        </div>
      </section>

      <PartnerLogos
        title="Join the 14k+ businesses using Gudfin"
        subtitle="Trusted by companies worldwide to streamline financial operations and compliance."
        logos={partnerLogos}
      />

      <TeamGrid
        members={teamMembers}
        title="Our nearly 350+ expert team members are ready to help now."
        subtitle="Contact us to connect with the specialists who will guide your next chapter."
        actionLabel="Contact Us Now"
        actionHref="/contact"
      />
    </>
  );
}
