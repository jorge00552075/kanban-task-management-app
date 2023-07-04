import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Board from "./components/board/board";
import "./App.scss";

export default function App() {
  return (
    <>
      <Header />
      <div className="appLayout">
        <Sidebar />
        <Board />
      </div>
    </>
  );
}
