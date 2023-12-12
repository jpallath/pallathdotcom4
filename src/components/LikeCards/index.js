import { useSelector } from "react-redux";
import { Card } from "./card";
import styles from "./likeCards.module.scss";

export const LikeCards = ({ likes }) => {
  const currentLike = useSelector((state) => state.likes);
  const likeCardsContainer = currentLike.title
    ? styles.likeCardsContainerWithCurrentLike
    : styles.likeCardsContainer;
  const likeData = likes.map((like, ind) => {
    return <Card data={like} key={ind} />;
  });
  return <div className={likeCardsContainer}>{likeData}</div>;
};
