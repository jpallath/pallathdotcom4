import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/history">
        <div>History</div>
      </Link>
      {/* <Link to="/blog">
        <div>Blog</div>
      </Link>
      <Link to="/likes">
        <div>Likes</div>
      </Link> */}
    </div>
  );
};
