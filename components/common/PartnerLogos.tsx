import Image from "next/image";
import styles from "./PartnerLogos.module.css";

type PartnerLogosProps = {
  title: string;
  subtitle?: string;
  logos: { name: string; imageUrl: string }[];
};

export default function PartnerLogos({ title, subtitle, logos }: PartnerLogosProps) {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <span className="tagline">Trusted Partners</span>
          <h2>{title}</h2>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
        <div className={styles.logos}>
          {logos.map((logo) => (
            <div key={logo.name} className={styles.logoCard}>
              <Image src={logo.imageUrl} alt={`${logo.name} logo`} width={140} height={40} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
