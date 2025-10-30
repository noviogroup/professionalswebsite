import Accordion, { AccordionItem } from "@/components/common/Accordion";
import styles from "./FAQColumns.module.css";

type FAQColumnsProps = {
  left: AccordionItem[];
  right: AccordionItem[];
};

export default function FAQColumns({ left, right }: FAQColumnsProps) {
  return (
    <div className={styles.columns}>
      <Accordion items={left} />
      <Accordion items={right} />
    </div>
  );
}
