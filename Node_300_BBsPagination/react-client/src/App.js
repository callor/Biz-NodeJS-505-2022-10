import logo from "./logo.svg";
import "./css/App.css";
import { Outlet } from "react-router-dom";
import MainNav from "./layout/Nav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello BBS 2023!!</h2>
        <p>NodeJS 와 React 를 연동한 pagination 게시판 프로젝트</p>
      </header>
      <MainNav />
      <Outlet />
    </div>
  );
}

export default App;
