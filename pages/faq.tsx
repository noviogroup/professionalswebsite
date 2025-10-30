import Head from "next/head";
import HeroBanner from "@/components/common/HeroBanner";
import FAQColumns from "@/components/faq/FAQColumns";
import Accordion from "@/components/common/Accordion";
import {
  primaryFaqsLeft,
  primaryFaqsRight,
  additionalFaqs
} from "@/data/faqs";
import styles from "@/styles/FAQ.module.css";

export default function FAQPage() {
  return (
    <>
      <Head>
        <title>Frequently Asked Questions | Gudfin Advisory</title>
        <meta
          name="description"
          content="Find answers to the most common questions about financial statements, accounting practices, tax planning and more."
        />
      </Head>

      <HeroBanner
        eyebrow="Frequently Asked Questions"
        title="Clarity for every financial decision."
        description="Explore insights from our advisors to better understand accounting, tax and financial operations."
        backgroundImage="https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=1600&q=80"
        actions={[{ label: "Contact Support", href: "/contact", variant: "primary" }]}
      />

      <section className={styles.intro}>
        <div className="container">
          <div className={styles.introContent}>
            <span className="tagline">How can we help?</span>
            <h2>Discover frequently asked questions from our support team.</h2>
            <p>
              We’ve compiled the answers to questions we hear most often about accounting best practices, compliance and
              financial planning. Select a topic below to learn more.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FAQColumns left={primaryFaqsLeft} right={primaryFaqsRight} />
        </div>
      </section>

      <section className={`${styles.additional} section`}>
        <div className="container">
          <h2>Got A Question?</h2>
          <div className={styles.additionalContent}>
            <Accordion items={additionalFaqs} />
          </div>
        </div>
      </section>
    </>
  );
}
