import Column from "../column/column";
import styles from "./board.module.scss";

export default function Board() {
  const renderEmptyBoard = (
    <div className={styles.center}>
      <div className={styles.content}>
        <p className={styles.text}>
          This board is empty. Create a new column to get started.
        </p>
        <button className={styles.button} type="button">
          + Add New Column
        </button>
      </div>
    </div>
  );

  return (
    <div className={styles.board}>
      {renderEmptyBoard}
      {/* <div className={styles.columnContainer}>
        <Column />
        <Column />
        <Column />
      </div> */}
    </div>
  );
}
