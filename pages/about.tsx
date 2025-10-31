import Head from "next/head";
import Link from "next/link";
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
    icon: "",
    title: "Member-Owned",
    description: "As a cooperative, we're owned by our members and operate for their benefit."
  },
  {
    icon: "",
    title: "Community Focused",
    description: "Serving Bahamas law enforcement professionals and their families since 1985."
  },
  {
    icon: "",
    title: "Financial Strength",
    description: "Four decades of stable growth and reliable service to our community."
  }
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | BLECCU - Bahamas Law Enforcement Credit Union</title>
        <meta
          name="description"
          content="Since 1985, BLECCU has served Bahamas law enforcement professionals with trusted financial services and member benefits."
        />
      </Head>

      <HeroBanner
        eyebrow="About BLECCU"
        title="Serving those who serve and protect our communities"
        description="For over 40 years, the Bahamas Law Enforcement Co-operative Credit Union has been the trusted financial partner for law enforcement professionals across the Bahamas."
        backgroundImage="https://images.pexels.com/photos/8761660/pexels-photo-8761660.jpeg?auto=compress&cs=tinysrgb&w=1600&q=80"
        actions={[{ label: "Become a Member", href: "/membership", variant: "primary" }]}
      />

      <section className={styles.missionSection}>
        <div className="container">
          <SectionHeading
            eyebrow="Our Mission"
            title="Established in 1985 to serve law enforcement"
            description="BLECCU provides affordable financial services with personalized attention and competitive rates to those who protect our communities."
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
              BLECCU was founded by and for law enforcement professionals who wanted better financial services. Today, we continue that mission with member-focused products, competitive rates, and personalized service that recognizes the unique needs of those who serve our communities.
            </p>
            <div>
              <h3>What sets us apart</h3>
              <ul>
                <li>Member-owned cooperative putting your interests first</li>
                <li>Competitive loan rates and high-yield savings products</li>
                <li>Dedicated service from staff who understand law enforcement</li>
              </ul>
            </div>
            <div>
              <Link href="/membership" className="btn">
                Join BLECCU Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps steps={financialProcess} title="Our journey: 40+ years of service" eyebrow="History" />

      <section className={styles.blockquoteSection}>
        <div className="container">
          <div className={styles.blockquote}>
            <span className="tagline">Member Testimonials</span>
            <h2>BLECCU has been my financial partner for over 15 years.</h2>
            <p>
              &quot;From my first vehicle loan to saving for my children&apos;s education, BLECCU has always been there with competitive rates and genuine care. They understand the challenges law enforcement professionals face.&quot;
            </p>
            <strong>Officer J. Thompson — Royal Bahamas Police Force</strong>
          </div>
        </div>
      </section>

      <PartnerLogos
        title="Proudly serving Bahamas law enforcement"
        subtitle="Trusted partner to RBPF, RBDF, Correctional Services, Immigration, Customs, and related agencies."
        logos={partnerLogos}
      />

      <TeamGrid
        members={teamMembers}
        title="Meet our board, committees, and staff"
        subtitle="Dedicated professionals committed to serving BLECCU members with excellence."
        actionLabel="Contact Us"
        actionHref="/contact"
      />
    </>
  );
}
