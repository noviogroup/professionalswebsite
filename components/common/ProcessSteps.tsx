import styles from "./ProcessSteps.module.css";
import { ProcessStep } from "@/data/processSteps";

type ProcessStepsProps = {
  steps: ProcessStep[];
  title: string;
  eyebrow?: string;
  description?: string;
};

export default function ProcessSteps({ steps, title, eyebrow, description }: ProcessStepsProps) {
  return (
    <section className={`section dark-section ${styles.wrapper}`}>
      <div className="container">
        <div className={styles.header}>
          {eyebrow ? <span className="tagline">{eyebrow}</span> : null}
          <h2>{title}</h2>
          {description ? <p>{description}</p> : null}
        </div>
        <div className={styles.grid}>
          {steps.map((step) => (
            <div key={step.title} className={styles.card}>
              <div className={styles.icon}>{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
