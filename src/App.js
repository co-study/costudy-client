import { Routes, Route } from "react-router-dom";
import "./App.css";
import Heading from "./Component/Heading";
import MainPage from "./Component/MainPage";
import Upload from "./Component/Post/Upload";
import Detail from "./Component/Post/Detail";
import Board from "./Component/Room/Board";
import Login from "./Component/User/Login";
function App() {
  return (
    <>
      <Heading />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/detail/:postNum" element={<Detail />} />
        <Route path="/study" element={<Board />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
