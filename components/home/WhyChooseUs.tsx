import styles from "./WhyChooseUs.module.css";

type Reason = {
  title: string;
  description: string;
  icon: string;
};

type WhyChooseUsProps = {
  reasons: Reason[];
  highlights: string[];
};

export default function WhyChooseUs({ reasons, highlights }: WhyChooseUsProps) {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <span className="tagline">Why Choose Us</span>
            <h2>Why choose us as your accountant consultant?</h2>
            <p>
              We combine deep financial expertise, cutting-edge tools and proactive support to help you achieve lasting growth
              and compliance confidence.
            </p>
            <div className={styles.reasons}>
              {reasons.map((reason) => (
                <div key={reason.title} className={styles.reasonCard}>
                  <span className={styles.reasonIcon}>{reason.icon}</span>
                  <div>
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.highlightCard}>
            <h3>Tailored compliance support</h3>
            <ul>
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
