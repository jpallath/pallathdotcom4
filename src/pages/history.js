import { Content } from "../containers/Content";
import { PageHeader } from "../components/PageHeader";
import { Timeline } from "../components/Timeline";
import styles from "./pages.module.scss";
import { Skills } from "../components/Skills";
import { PhoneModal } from "../components/PhoneModal";

export const History = () => {
  return (
    <div className={styles.pages}>
      <Content
        components={[
          <PageHeader text="History" key="11" />,
          <Timeline key="21" />,
          <Skills key="31" />,
        ]}
      />
      <PhoneModal />
    </div>
  );
};
