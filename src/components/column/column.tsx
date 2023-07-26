import Task from "../task/task";
import styles from "./column.module.scss";

export default function Column() {
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
