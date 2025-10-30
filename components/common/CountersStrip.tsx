import { useEffect, useState } from "react";
import styles from "./CountersStrip.module.css";
import { useInView } from "@/hooks/useInView";

export type CounterMetric = {
  label: string;
  value: number;
  suffix?: string;
};

type CountersStripProps = {
  metrics: CounterMetric[];
  eyebrow?: string;
  title?: string;
  description?: string;
};

export default function CountersStrip({ metrics, eyebrow, title, description }: CountersStripProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [displayValues, setDisplayValues] = useState(metrics.map(() => 0));

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const start = performance.now();
    const duration = 1600;

    const step = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setDisplayValues(metrics.map((metric) => Math.round(metric.value * progress)));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, metrics]);

  return (
    <section className={styles.strip}>
      <div className="container">
        <div className={styles.head}>
          {eyebrow ? <span className="tagline">{eyebrow}</span> : null}
          {title ? <h3>{title}</h3> : null}
          {description ? <p>{description}</p> : null}
        </div>
        <div className={styles.metrics} ref={ref}>
          {metrics.map((metric, index) => (
            <div key={metric.label} className={styles.metric}>
              <span className={styles.value}>
                {displayValues[index]}
                {metric.suffix ?? "+"}
              </span>
              <span className={styles.label}>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
