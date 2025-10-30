import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/history", label: "Our History" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <Link href="/" className={styles.brand}>
            <span className={styles.brandMark}>Gudfin</span>
            <span className={styles.brandSub}>Advisory</span>
          </Link>
          <nav className={styles.nav} aria-label="Primary navigation">
            {links.map((link) => {
              const isActive = router.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <Link href="/contact" className="btn btn-teal">
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </header>
  );
}
