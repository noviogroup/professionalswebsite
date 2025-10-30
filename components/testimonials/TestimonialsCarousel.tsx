import { useState } from "react";
import styles from "./TestimonialsCarousel.module.css";
import { Testimonial } from "@/data/testimonials";

type TestimonialsCarouselProps = {
  testimonials: Testimonial[];
  title: string;
  subtitle?: string;
  ratingLabel?: string;
};

export default function TestimonialsCarousel({
  testimonials,
  title,
  subtitle,
  ratingLabel
}: TestimonialsCarouselProps) {
  const [index, setIndex] = useState(0);
  const activeTestimonial = testimonials[index];

  const goTo = (i: number) => setIndex(i);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const previous = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="tagline">Testimonials</span>
            <h2>{title}</h2>
            {subtitle ? <p>{subtitle}</p> : null}
          </div>
          {ratingLabel ? <span className={styles.rating}>{ratingLabel}</span> : null}
        </div>
        <div className={styles.carousel}>
          <button type="button" aria-label="Previous testimonial" onClick={previous} className={styles.navButton}>
            ‹
          </button>
          <article className={styles.card}>
            <p className={styles.quote}>“{activeTestimonial.quote}”</p>
            <div className={styles.meta}>
              <span className={styles.name}>{activeTestimonial.name}</span>
              <span className={styles.role}>{activeTestimonial.role}</span>
            </div>
          </article>
          <button type="button" aria-label="Next testimonial" onClick={next} className={styles.navButton}>
            ›
          </button>
        </div>
        <div className={styles.dots}>
          {testimonials.map((testimonial, i) => (
            <button
              key={testimonial.name}
              aria-label={`Show testimonial ${i + 1}`}
              className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
