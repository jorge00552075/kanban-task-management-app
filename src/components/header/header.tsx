import logo from "../../assets/logo-light.svg";
import ellipsis from "../../assets/icon-vertical-ellipsis.svg";
import { Board } from "../../../types";
import styles from "./header.module.scss";

type HeaderProps = {
  board: Board;
};

export default function Header({ board }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="" />
      </div>

      <div className={styles.headerContent}>
        <h1 className={styles.headerTitle}>{board.name}</h1>

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
