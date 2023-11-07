import styles from "./AnchoredImage.module.scss";

export const AnchoredImage = ({ image }) => {
  return <img className={styles.anchoredImage} src={image} alt={image} />;
};
