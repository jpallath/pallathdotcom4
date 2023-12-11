import { useDispatch } from "react-redux";
import { updateLike } from "../../features/likes";
import styles from "./likeCards.module.scss";
export const Card = ({ data }) => {
  const dispatch = useDispatch();
  // const openLink = () => {
  //   window.open(data.link, "_blank", "noopener noreferrer");
  //   window.focus();
  // };
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
  const overlay = () => {
    return styles.overlay;
  };
  return (
    <div className={styles.likeCard} onClick={updateLikesContainer}>
      <div className={styles.baseInformation}>
        <img src={data.image} alt="" />
        <div className={styles.text}>
          <h3>{data.title}</h3>
          {/* <p>{data.description}</p> */}
        </div>
      </div>
      <div className={overlay()} onClick={updateLikesContainer}>
        <div className={styles.overlayData}>
          <div className={styles.noData}></div>
          <div className={styles.data}>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
          </div>
          <div className="likeButtons">{/* <button>Discuss</button> */}</div>
        </div>
      </div>
    </div>
  );
};
