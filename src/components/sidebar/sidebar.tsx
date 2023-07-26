import Switch from "../switch/switch";
import hideSidebarIcon from "../../assets/icon-hide-sidebar.svg";
import styles from "./sidebar.module.scss";

const boardIcon = (
  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
    <path
      className={styles.boardIcon}
      d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
      fill="#828FA3"
    />
  </svg>
);

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div>
        <p className={styles.sidebarHeading}>all boards (8)</p>
        <button className={styles.changeActiveBoard} type="button">
          {boardIcon}
          Platform Launch
        </button>
        <button className={styles.changeActiveBoard} type="button">
          {boardIcon}
          Marketing Plan
        </button>
        <button className={styles.changeActiveBoard} type="button">
          {boardIcon}
          Roadmap
        </button>
        <button className={styles.createNewBoard} type="button">
          {boardIcon}
          &rarr; Create New Board
        </button>
      </div>

      <div className={styles.btnWrapper}>
        <Switch />
        <button className={styles.hideSidebar} type="button">
          <img src={hideSidebarIcon} alt="" />
          Hide Sidebar
        </button>
      </div>
    </aside>
  );
}
