import { useDispatch, useSelector } from "react-redux";
import styles from "./PhoneModal.module.scss";
import { ReactComponent as CloseIcon } from "../../assets/actionsSvgs/close.svg";
import { togglePhoneModal } from "../../features/phoneModal";

export const PhoneModal = () => {
  const modalData = useSelector((state) => state.phoneModal);
  const { showModal, title, description } = modalData;
  const dispatch = useDispatch();
  const closeModal = () =>
    dispatch(
      togglePhoneModal({ showModal: false, title: "", description: "" })
    );
  return (
    <div
      className={`${styles.modalContainer} ${
        showModal ? styles.active : styles.hidden
      }`}
      onClick={() => closeModal()}
    >
      <div className={styles.modal}>
        <ModalHeader />
        <section>
          <h1>{title}</h1>
          <p>{description}</p>
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
