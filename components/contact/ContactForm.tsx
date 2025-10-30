import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <form className={styles.form} aria-label="Contact form">
      <div className={styles.grid}>
        <label className={styles.field}>
          <span>Name</span>
          <input type="text" name="name" placeholder="Your name" required />
        </label>
        <label className={styles.field}>
          <span>Phone</span>
          <input type="tel" name="phone" placeholder="+1 (555) 123-4567" required />
        </label>
        <label className={styles.field}>
          <span>Email</span>
          <input type="email" name="email" placeholder="you@example.com" required />
        </label>
      </div>
      <label className={styles.field}>
        <span>Message</span>
        <textarea name="message" placeholder="Describe how we can help you" rows={5} required />
      </label>
      <label className={styles.checkbox}>
        <input type="checkbox" name="consent" /> Save my contact information for future consultations
      </label>
      <button type="submit" className="btn">
        Send Message
      </button>
    </form>
  );
}
