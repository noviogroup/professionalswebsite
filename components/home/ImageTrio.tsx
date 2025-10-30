import Image from "next/image";
import styles from "./ImageTrio.module.css";

type TrioItem = {
  title: string;
  description: string;
  imageUrl: string;
};

type ImageTrioProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: TrioItem[];
};

export default function ImageTrio({ eyebrow, title, subtitle, items }: ImageTrioProps) {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          {eyebrow ? <span className="tagline">{eyebrow}</span> : null}
          <h2>{title}</h2>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
        <div className={styles.grid}>
          {items.map((item) => (
            <article key={item.title} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image src={item.imageUrl} alt={item.title} fill sizes="(min-width: 768px) 30vw, 90vw" />
              </div>
              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
