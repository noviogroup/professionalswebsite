import styles from "./FeatureHighlights.module.css";

type Feature = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

type FeatureHighlightsProps = {
  features: Feature[];
};

export default function FeatureHighlights({ features }: FeatureHighlightsProps) {
  return (
    <div className={styles.row}>
      {features.map((feature) => (
        <div key={feature.title} className={styles.item}>
          <div className={styles.icon}>{feature.icon}</div>
          <div>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
