type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false
}: SectionHeadingProps) {
  return (
    <div
      className="section-title"
      style={{
        textAlign: align,
        color: dark ? "#fff" : undefined
      }}
    >
      {eyebrow ? <span className="tagline">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {description ? <p style={{ margin: "0 auto", maxWidth: "640px" }}>{description}</p> : null}
    </div>
  );
}
