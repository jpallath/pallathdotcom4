import styles from "./ParagraphItem.module.scss";

export const ParagraphItem = ({ text }) => {
  return <p className={styles.paragraphItem}>{text}</p>;
};
