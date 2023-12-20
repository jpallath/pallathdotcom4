import styles from "./Button.module.scss";
export const Button = ({ clickFunction, buttonText }) => {
  return (
    <div className={styles.styledButton}>
      <button className={styles.button1} onClick={clickFunction}>
        {buttonText}
      </button>
      <button className={styles.button2}></button>
      <button className={styles.button3}></button>
    </div>
  );
};
