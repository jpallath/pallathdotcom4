import styles from "./activeLike.module.scss";
import { useSelector } from "react-redux";
export const ActiveLike = () => {
  const currentLike = useSelector((state) => state.likes);
  return (
    <>
      {currentLike.title ? (
        <div className={styles.activeLike}>
          <img src={currentLike.image} alt={currentLike.image} />
          <a href={currentLike.link} target="_blank" rel="noreferrer">
            <h1>{currentLike.title}</h1>
          </a>
          <p>{currentLike.description}</p>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
