import styles from "./ResumeButtons.module.scss";
export const ResumeButtons = () => {
  return (
    <div className={styles.resumeButtons}>
      <button>View Resume</button>
      <button>Download Resume</button>
    </div>
  );
};
