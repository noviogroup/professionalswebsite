import Link from "next/link";
import styles from "./Footer.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/history", label: "Our History" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.ctaBand}>
        <div className="container">
          <div className={styles.ctaContent}>
            <div>
              <span className="tagline">Let&apos;s Discuss!</span>
              <h3>Ready to elevate your financial strategy?</h3>
              <p>
                Email <a href="mailto:noreply@pbminfotech.com">noreply@pbminfotech.com</a> or call{" "}
                <a href="tel:+14408488222">+1440 848 8222</a>. Find us at 174 Street Charleston, New
                York.
              </p>
            </div>
            <Link href="/contact" className="btn btn-teal">
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.footerBody}>
        <div className="container">
          <div className={styles.grid}>
            <div>
              <h4>Gudfin Advisory</h4>
              <p>
                We partner with ambitious teams to craft resilient financial plans, strengthen
                compliance and accelerate sustainable growth.
              </p>
            </div>
            <div>
              <h5>Navigation</h5>
              <ul className={styles.links}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5>Quick Contact</h5>
              <ul className={styles.links}>
                <li>
                  <a href="mailto:noreply@pbminfotech.com">noreply@pbminfotech.com</a>
                </li>
                <li>
                  <a href="tel:+14408488222">+1440 848 8222</a>
                </li>
                <li>174 Street Charleston, New York</li>
              </ul>
            </div>
            <div>
              <h5>Newsletter</h5>
              <p>Receive quarterly insights on market trends and compliance changes.</p>
              <form className={styles.newsletter}>
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input id="newsletter-email" type="email" placeholder="Email address" required />
                <button type="submit" className="btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className={styles.bottom}>
            <p>© {new Date().getFullYear()} Gudfin Advisory. All rights reserved.</p>
            <div className={styles.bottomLinks}>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
