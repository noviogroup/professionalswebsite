import Image from "next/image";
import Link from "next/link";
import styles from "./ServicesShowcase.module.css";
import { coreServices } from "@/data/services";

type ServicesShowcaseProps = {
  imageUrl: string;
};

export default function ServicesShowcase({ imageUrl }: ServicesShowcaseProps) {
  const services = coreServices.slice(0, 5);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.imageWrapper}>
            <Image src={imageUrl} alt="Financial advisor" fill sizes="(min-width: 1024px) 40vw, 90vw" priority />
          </div>
          <div className={styles.content}>
            <span className="tagline">Our Services</span>
            <h2>Why choose us as your accountant consultant?</h2>
            <p>
              Maximize your tax benefits and stay organised with proactive planning, compliance support and growth-focused
              advisory.
            </p>
            <div className={styles.grid}>
              {services.map((service, index) => (
                <div key={service.title} className={`${styles.card} ${index > 2 ? styles.cardBottom : ""}`}>
                  <div className={styles.icon}>{service.icon}</div>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
              <div className={styles.ctaCard}>
                <h3>Explore all our expertises we offer</h3>
                <p>Discover comprehensive solutions tailored to your growth, compliance and financial clarity.</p>
                <Link href="/services" className={styles.ctaButton}>
                  View All Services <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
