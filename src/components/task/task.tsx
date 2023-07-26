import styles from "./task.module.scss";

export default function Task() {
  return (
    <button className={styles.task}>
      <p className={styles.title}>Build UI for onboarding flow</p>
      <p className={styles.subtasks}>1 of 3 subtasks</p>
    </button>
  );
}
