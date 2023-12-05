import { Card } from "./card";
import styles from "./likeCards.module.scss";

export const LikeCards = ({ likes }) => {
  const likeData = likes.map((like, ind) => {
    return <Card data={like} key={ind} />;
  });
  return <div className={styles.likeCardsContainer}>{likeData}</div>;
};
