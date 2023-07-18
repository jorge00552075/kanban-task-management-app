import iconLight from "../../assets/icon-light-theme.svg";
import iconDark from "../../assets/icon-dark-theme.svg";
import styles from "./switch.module.scss";

export default function Switch() {
  return (
    <div className={styles.switchWrapper}>
      <img src={iconLight} alt="" />
      <label className={styles.switch}>
        <input type="checkbox" defaultChecked role="switch" />
        <span className={styles.slider} />
      </label>
      <img src={iconDark} alt="" />
    </div>
  );
}
