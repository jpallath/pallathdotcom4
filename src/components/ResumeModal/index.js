import styles from "./ResumeModal.module.scss";
export const ResumeModal = () => {
  return (
    <div className={StyleSheet.modalContainer}>
      <div className={styles.modal}>
        <ModalHeader />
        <section>
          <Resume />
        </section>
      </div>
    </div>
  );
};

const ModalHeader = () => {
  const dispatch = useDispatch();
  const closeModal = () =>
    dispatch(
      togglePhoneModal({ showModal: false, title: "", description: "" })
    );
  return (
    <div className={styles.modalHeader}>
      <div onClick={() => closeModal()}>
        <CloseIcon />
      </div>
    </div>
  );
};

const Resume = () => {
  return (
    <div>
      <div className="title">Jerry Pallath</div>
      <div className="userInformation">
        <h2>Software Engineer</h2>
        <h3>201-655-5144 | PallathJ@gmail.com | New York, New York</h3>
        <h3>
          <a href="linkedin.com/in/jpallath/">linkedin.com/in/jpallath/</a> |
          <a href="github.com/jpallath/">github.com/jpallath/</a>
      </div>
      <div className="workExperience"></div>
      <div className="education"></div>
      <div className="skills"></div>
      <div className="interests"></div>
    </div>
  );
};
