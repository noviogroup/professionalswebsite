import styles from "./Timeline.module.css";
import { TimelineEvent } from "@/data/timeline";

type TimelineProps = {
  events: TimelineEvent[];
};

export default function Timeline({ events }: TimelineProps) {
  return (
    <section className={`section ${styles.wrapper}`}>
      <div className="container">
        <div className={styles.timeline}>
          {events.map((event, index) => (
            <div key={event.year} className={styles.event}>
              <div className={styles.marker}>
                <span>{event.icon}</span>
              </div>
              <div className={styles.content}>
                <span className={styles.year}>{event.year}</span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
