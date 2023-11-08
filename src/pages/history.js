import { Content } from "../containers/Content";
import { PageHeader } from "../components/PageHeader";
import { Timeline } from "../components/Timeline";
import styles from "./pages.module.scss";
import { Skills } from "../components/Skills";

export const History = () => {
  return (
    <div className={styles.pages}>
      <Content
        components={[<PageHeader text="History" />, <Timeline />, <Skills />]}
      />
    </div>
  );
};
