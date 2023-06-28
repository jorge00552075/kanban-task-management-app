import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import "./App.scss";

export default function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>board</main>
    </div>
  );
}
