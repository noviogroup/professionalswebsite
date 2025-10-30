import Link from "next/link";
import styles from "./ServiceCard.module.css";

type ServiceCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
};

export default function ServiceCard({ title, description, icon, href = "#" }: ServiceCardProps) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className={styles.more}>Learn More →</span>
    </Link>
  );
}
