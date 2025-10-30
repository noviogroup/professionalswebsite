import Head from "next/head";
import HeroBanner from "@/components/common/HeroBanner";
import ContactCard from "@/components/contact/ContactCard";
import ContactForm from "@/components/contact/ContactForm";
import PartnerLogos from "@/components/common/PartnerLogos";
import { partnerLogos } from "@/data/partners";
import styles from "@/styles/Contact.module.css";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Gudfin Advisory</title>
        <meta
          name="description"
          content="Get in touch with Gudfin Advisory for financial consulting, taxation support, and strategic planning services."
        />
      </Head>

      <HeroBanner
        eyebrow="Contact Us"
        title="Let’s build the financial foundation your business deserves."
        description="Reach out to connect with our advisors. We respond within one business day."
        backgroundImage="https://images.unsplash.com/photo-1521790360788-9b1ba9a3c0f4?auto=format&fit=crop&w=1600&q=80"
        actions={[{ label: "Call Us", href: "tel:+01238954732", variant: "primary" }]}
      />

      <section className={styles.optionsSection}>
        <div className="container">
          <div className={styles.optionsGrid}>
            <ContactCard
              title="Email"
              description="Quick, cost-effective support for any enquiry."
              detail="reply@example.com"
              icon="✉️"
              href="mailto:reply@example.com"
            />
            <ContactCard
              title="Phone"
              description="Our team is available Mon-Sat 09:00am – 05:00pm, Sun 09:00am – 12:00pm."
              detail="+0123-895-4732"
              icon="📞"
              href="tel:+01238954732"
            />
            <ContactCard
              title="Location"
              description="Visit our office for in-person consultations and workshops."
              detail="8502 Preston Rd. Inglewood, Maine 9838086, Hoofddorp Noord-2132"
              icon="📍"
              href="/contact#location"
            />
          </div>
        </div>
      </section>

      <section className={styles.formSection} id="location">
        <div className="container">
          <div className={styles.formGrid}>
            <div className={styles.visual}>
              <div className={styles.visualContent}>
                <span className="tagline">Collaborate with us</span>
                <h2>We’re ready to support your next financial milestone.</h2>
                <p>
                  Share your goals and challenges. Our advisors will tailor a response with clear next steps, timelines and the
                  expertise you’ll need.
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <PartnerLogos
        title="Join the 14k+ businesses using Gudfin"
        subtitle="We collaborate with industry-leading partners to deliver trusted financial outcomes."
        logos={partnerLogos}
      />
    </>
  );
}
