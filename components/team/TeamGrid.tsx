import Image from "next/image";
import Link from "next/link";
import styles from "./TeamGrid.module.css";
import { TeamMember } from "@/data/team";

type TeamGridProps = {
  members: TeamMember[];
  title: string;
  subtitle?: string;
  actionLabel?: string;
  actionHref?: string;
};

export default function TeamGrid({ members, title, subtitle, actionLabel, actionHref }: TeamGridProps) {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <span className="tagline">Our Advisors</span>
          <h2>{title}</h2>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
        <div className={styles.grid}>
          {members.map((member) => (
            <article key={member.name} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  sizes="(min-width: 768px) 20vw, 60vw"
                />
              </div>
              <div className={styles.content}>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </article>
          ))}
        </div>
        {actionLabel && actionHref ? (
          <div className={styles.cta}>
            <Link href={actionHref} className="btn btn-outline">
              {actionLabel}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
