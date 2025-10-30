import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import styles from "./HeroBanner.module.css";

type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "light";
};

type HeroBannerProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  backgroundImage?: string;
  actions?: HeroAction[];
  overlayVariant?: "light" | "dark";
  children?: React.ReactNode;
};

export default function HeroBanner({
  eyebrow,
  title,
  description,
  backgroundImage,
  actions = [],
  overlayVariant = "dark",
  children
}: HeroBannerProps) {
  return (
    <section className={`${styles.hero} ${overlayVariant === "light" ? styles.light : ""}`}>
      {backgroundImage ? (
        <div className={styles.media}>
          <Image src={backgroundImage} alt="" fill priority sizes="100vw" />
        </div>
      ) : null}
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className={styles.content}>
          {eyebrow ? <span className="tagline">{eyebrow}</span> : null}
          <h1 className={styles.headline}>{title}</h1>
          {description ? <div className={styles.subheadline}>{description}</div> : null}
          {actions.length ? (
            <div className={styles.actions}>
              {actions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className={[
                    "btn",
                    action.variant === "secondary"
                      ? "btn-outline"
                      : action.variant === "light"
                      ? styles.lightAction
                      : styles.primaryAction
                  ].join(" ")}
                >
                  {action.label}
                </Link>
              ))}
            </div>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  );
}
