import Column from "../column/column";
import styles from "./board.module.scss";

export default function Board() {
  const renderEmptyBoard = (
    <div className={styles.centerContent}>
      <div className={styles.emptyBoardContent}>
        <p>This board is empty. Create a new column to get started.</p>
        <button className={styles.emptyBoardButton} type="button">
          + Add New Column
        </button>
      </div>
    </div>
  );

  return (
    <div className={styles.board}>
      {/* {renderEmptyBoard} */}
      <div className={styles.columnsContainer}>
        <Column />
        <Column />
        <Column />
        <button className={styles.addNewColumnButton} type="button">
          + New Column
        </button>
      </div>
    </div>
  );
}
