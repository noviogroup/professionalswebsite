import Head from "next/head";
import Image from "next/image";
import HeroBanner from "@/components/common/HeroBanner";
import styles from "@/styles/Services.module.css";

const services = [
  {
    title: "Business Growth",
    description: "Align strategy and execution to generate measurable, sustainable growth.",
    imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Capital Markets",
    description: "Structure, model and execute capital raises with confidence.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Business Planning",
    description: "Transform goals into actionable business plans and performance metrics.",
    imageUrl: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Financial Planning",
    description: "Forecast, budget and secure financial resilience in any market.",
    imageUrl: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Taxes Planning",
    description: "Optimise tax positions across jurisdictions while staying compliant.",
    imageUrl: "https://images.unsplash.com/photo-1518544889280-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Capital Restructuring",
    description: "Rebalance capital structures, manage refinancings and unlock liquidity.",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Tax Consulting",
    description: "Navigate complex tax codes with specialist insight and proactive planning.",
    imageUrl: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80&sat=-30"
  },
  {
    title: "Professional Advisory",
    description: "Executive-level guidance across treasury, M&A and enterprise finance.",
    imageUrl: "https://images.unsplash.com/photo-1518609571773-39b7d303a86c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Consulting Service",
    description: "Tailored consulting engagements to streamline operations and governance.",
    imageUrl: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | Gudfin Advisory</title>
        <meta
          name="description"
          content="Explore the comprehensive services offered by Gudfin Advisory including business growth, capital markets, tax planning and more."
        />
      </Head>

      <HeroBanner
        eyebrow="Services"
        title="Financial services that move your business forward."
        description="From strategic consulting to tax optimisation, we tailor every engagement to deliver stronger performance and resilience."
        backgroundImage="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80"
      />

      <section className={styles.intro}>
        <div className="container">
          <div className={styles.introContent}>
            <h2>Solutions designed for every stage of growth</h2>
            <p>
              Our cross-disciplinary team supports your business with insightful planning, compliant execution and proactive
              guidance. Explore how we can help you gain an edge.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {services.map((service) => (
              <article key={service.title} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image src={service.imageUrl} alt={service.title} fill sizes="(min-width: 768px) 30vw, 90vw" />
                </div>
                <div className={styles.content}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className={styles.arrow}>Explore Service →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
