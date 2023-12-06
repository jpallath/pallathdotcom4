import { Content } from "../containers/Content";
import { PageHeader } from "../components/PageHeader";
import { LikeCards } from "../components/LikeCards";
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

  const fetchLikes = async () => {
    try {
      const fetchLikes = await fetchFunction(
        "https://qzso8y7ew8.execute-api.us-east-1.amazonaws.com/Stage/links",
        "GET"
      ).then((response) => response.json());
      setLikes(fetchLikes.body);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchLikes();
  }, []);
  return (
    <div className={styles.pages}>
      <Content
        components={[
          <PageHeader text="Likes" key="0" />,
          <LikeCards likes={likes} key="1" />,
        ]}
      />
    </div>
  );
};
