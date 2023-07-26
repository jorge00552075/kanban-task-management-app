import Column from "../column/column";
import styles from "./board.module.scss";

export default function Board() {
  return (
    <div className={styles.board}>
      <div className={styles.container}>
        <Column />
        <Column />
        <Column />
      </div>
    </div>
  );
}
