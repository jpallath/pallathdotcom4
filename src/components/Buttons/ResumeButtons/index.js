import { toggleResumeModal } from "../../../features/resumeModal";
import { useDispatch } from "react-redux";
import styles from "./ResumeButtons.module.scss";

export const ResumeButtons = () => {
  const dispatch = useDispatch();

  const showResume = () => {
    dispatch(toggleResumeModal({ showModal: true }));
  };
  return (
    <div className={styles.resumeButtons}>
      <button onClick={() => showResume()}>View Resume</button>
      <a
        href="https://work-files-public.s3.us-east-1.amazonaws.com/Pallath%202023%20Resume.pdf"
        download
        target="_blank"
        rel="noreferrer"
      >
        <button>Download Resume</button>
      </a>
    </div>
  );
};
