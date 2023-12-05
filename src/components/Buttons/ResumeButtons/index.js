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
        href="https://work-files-public.s3.us-east-1.amazonaws.com/Pallath%202023%20Resume.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCJKXdvBR8k9JVcdR4OowdmDFyyCduan0Xr2Y1BMG89YgIhAIF94OFc5yXVH6unWj5k6qB5usKn%2BLC%2BbfLdUwyMclfjKuQCCGAQAxoMMTE2NTYwMjAxNjk4IgzU47%2BfTLIwnUha6HIqwQJ5dUn15tOHlS4VcJ3jbJWXVZidG3AF%2FqmNrCmusNqNb6Vrm9q0ZpWt8nBHt5oIEtshm09QKlamgQWAG8WsVKJSGEJJqZIrqmqkMnwrbfeu1XBSUH6rpZdplZT9eDH4Rnr8hrOsHDzjj%2FEJ7ne5EjZSoVAbo0UFeLKNL0nzGOg3Pc1rkLV38jXyjMq2qRacWbI6xnoDPomepmwiZAghoK43kYqRs9mYTGUVt8CSwd1q6dopd%2FnZmXvcelnA%2Ff2AzQdQBzoo4euvEA1L6AdhB%2F1pINnwxbstLutbdlbWI%2FcA6u%2FHmMIWLelR93Yb67%2F4t8Yj5Uj7BpseyoodoGGdzkDnEn47qZJnCq1b80Ej4hKaSZrnu3mCA31FDByJBQEATKBvQzC4seS4BBsnMb%2BsuGbHmzuyld9WmIurqPol%2FZ9IteYwsc63qwY6sgIoamsx%2FVMtJTVn4uirwy%2Fa5Vf5QaqotXl%2BJyV1nCkfJEhY72pNt4tJbCa31RKUZ0HiqC2rtOxeWAJffzWfjyw%2BgnePRx64CDTpfcVkaZrFzeswJDJl949MJpXieoza%2FJtssNFs9zMjTQv0xYofreqBv7EXvnDMgJe9hsUmwoml4toRLLDsOOf1Y19meqeEQl0qMN3iT%2BPW3ZatG2Hf3liSiZiBQiQaAUGd102M8vFzBDJY9dXb%2Bg1bkyXOQPJJFPB4R6gfDuhF9Ty%2BIKulf4xoVrBUjEX6QqcIJj%2BuLvhH91N9BWQ5s9KDiceDBEJ%2BvV1bhxWwb%2Bb0qpZ27iwwMpFWhgEr9HpPLUqUTXulcndFT9C8D9RSe5Ao7eiPcmlBBL%2F2M20CeYMTgwBfeZieski6s6A%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231204T160036Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIARWI4HQ7RBPYBRL4H%2F20231204%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=919dceeebd5480a448c0861404ec9a875d42a505b6458e603df15d79401000f8"
        download
        target="_blank"
        rel="noreferrer"
      >
        <button>Download Resume</button>
      </a>
    </div>
  );
};
