import { useDispatch } from "react-redux";
import { updateLike } from "../../features/likes";
import styles from "./likeCards.module.scss";
export const Card = ({ data }) => {
  const dispatch = useDispatch();
  const updateLikesContainer = () => {
    dispatch(
      updateLike({
        title: data.title,
        description: data.description,
        image: data.image,
        link: data.link,
      })
    );
  };

  return (
    <div className={styles.likeCard}>
      <div className={styles.likeCard1} onClick={updateLikesContainer}>
        <div className={styles.baseInformation}>
          <div className={styles.imageContainer}>
            <img src={data.image} alt="" />
          </div>
          <div className={styles.text}>
            <h3>{data.title}</h3>
          </div>
        </div>
      </div>
      <div className={styles.likeCard2}></div>
      <div className={styles.likeCard3}></div>
    </div>
  );
};
