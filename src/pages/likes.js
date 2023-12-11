import { Content } from "../containers/Content";
import { PageHeader } from "../components/PageHeader";
import { LikeCards } from "../components/LikeCards";
import { ActiveLike } from "../components/ActiveLike";
import styles from "./pages.module.scss";
import { useEffect, useState } from "react";
export const Likes = () => {
  const [likes, setLikes] = useState([]);

  const fetchFunction = async (endpoint, method) => {
    try {
      const response = await fetch(endpoint, { method });
      return await response;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    async function fetchLikes() {
      try {
        const fetchLikes = await fetchFunction(
          "https://ge3tyb1a3k.execute-api.us-east-1.amazonaws.com/staging/likes",
          "GET"
        ).then((response) => response.json());
        setLikes(fetchLikes.body);
      } catch (err) {
        console.error(err);
      }
    }
    fetchLikes();
  }, []);
  return (
    <div className={styles.pages}>
      <Content
        components={[
          <PageHeader text="Likes" key="0" />,
          <div className={styles.likeContainer}>
            <ActiveLike key="1" />
            <LikeCards likes={likes} key="2" />
          </div>,
        ]}
      />
    </div>
  );
};
