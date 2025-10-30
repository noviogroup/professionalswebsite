export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating?: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Martin Bailey",
    role: "Founder, Vertex Labs",
    quote:
      "Partnering with this financial consulting team was a game-changer for our business. Their analytics, planning and execution helped us unlock new revenue streams in under six months.",
    rating: 4.9
  },
  {
    name: "Alex Zander",
    role: "COO, Horizon Ventures",
    quote:
      "The team’s depth of expertise and hands-on approach delivered results we did not think were possible. We now have full visibility into our financial operations and compliance posture."
  },
  {
    name: "Stephen Welch",
    role: "Managing Director, Summit Partners",
    quote:
      "They are professional, transparent and always available to answer my questions. They truly care about our financial success and continually provide proactive recommendations."
  }
];
