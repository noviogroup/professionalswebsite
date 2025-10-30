import Link from "next/link";
import styles from "./ContactCard.module.css";

type ContactCardProps = {
  title: string;
  description: string;
  detail: string;
  icon: string;
  href?: string;
};

export default function ContactCard({ title, description, detail, icon, href }: ContactCardProps) {
  const content = (
    <>
      <div className={styles.icon}>{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className={styles.detail}>{detail}</span>
      </div>
    </>
  );

  return href ? (
    <Link href={href} className={styles.card}>
      {content}
    </Link>
  ) : (
    <div className={styles.card}>{content}</div>
  );
}
