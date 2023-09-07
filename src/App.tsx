import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Board from "./components/board/board";
import data from "./data.json";
import "./App.scss";

export default function App() {
  const board = data.boards[0];

  return (
    <>
      <Header board={board} />
      <div className="appLayout">
        <Sidebar />
        <Board />
      </div>
    </>
  );
}
