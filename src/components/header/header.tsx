import logo from "../../assets/logo-light.svg";
import ellipsis from "../../assets/icon-vertical-ellipsis.svg";

import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="" />
      </div>

      <div className={styles.headerContent}>
        <h1 className={styles.headerTitle}>Platform Launch</h1>

        <div className={styles.buttonWrapper}>
          <button className={styles.addBtn} type="button">
            + Add New Task
          </button>
          <button className={styles.menuBtn} type="button">
            <img src={ellipsis} alt="" />
          </button>
        </div>
      </div>
    </header>
  );
}
