import { Routes, Route } from "react-router-dom";
import "./App.css";
import Heading from "./Component/Heading";
import MainPage from "./Component/MainPage";
import Upload from "./Component/Post/Upload";
import Detail from "./Component/Post/Detail";
function App() {
  return (
    <>
      <Heading />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
