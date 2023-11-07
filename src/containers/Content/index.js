import styles from "./Content.module.scss";

export const Content = ({ components }) => {
  return (
    <div className={styles.content}>
      {components.map((component) => {
        return component;
      })}
    </div>
  );
};
