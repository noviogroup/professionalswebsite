import Head from "next/head";
import Link from "next/link";
import HeroBanner from "@/components/common/HeroBanner";
import Timeline from "@/components/history/Timeline";
import { companyTimeline } from "@/data/timeline";
import styles from "@/styles/History.module.css";

export default function HistoryPage() {
  return (
    <>
      <Head>
        <title>Our History | Gudfin Advisory</title>
        <meta
          name="description"
          content="Explore the milestones that shaped Gudfin Advisory into a trusted partner for financial strategy and growth."
        />
      </Head>

      <HeroBanner
        eyebrow="Our History"
        title="Shape a better future with simple choices."
        description="From inception to global advisory, our journey reflects a relentless commitment to progress and partnership."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
        actions={[{ label: "Schedule Consultation", href: "/contact", variant: "primary" }]}
      >
        <div className={styles.heroStats}>
          <div className={styles.heroStat}>
            <strong>18+</strong>
            <span>Years of Experience</span>
          </div>
          <div className={styles.heroStat}>
            <strong>145%</strong>
            <span>Average Revenue Increase</span>
          </div>
          <div className={styles.heroStat}>
            <strong>1-800-222-000</strong>
            <span>Call for immediate guidance</span>
          </div>
        </div>
      </HeroBanner>

      <Timeline events={companyTimeline} />

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <span className="tagline">Begin today</span>
            <h2>Ready to write the next chapter of your growth story?</h2>
            <p>
              Schedule an appointment with our advisors to evaluate your goals, design tailored strategies and activate your next
              wave of transformation.
            </p>
            <Link href="/contact" className="btn btn-teal">
              Schedule an Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
