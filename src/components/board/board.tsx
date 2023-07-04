import styles from "./board.module.scss";

function Task() {
  return (
    <button className={styles.task}>
      <p className={styles.title}>Build UI for onboarding flow</p>
      <p className={styles.subtasks}>1 of 3 subtasks</p>
    </button>
  );
}

function Column() {
  return (
    <article className={styles.column}>
      <h2 className={styles.status}>todo (4)</h2>
      <div className={styles.container}>
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </article>
  );
}

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
