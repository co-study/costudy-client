import { Routes, Route } from "react-router-dom";
import "./App.css";
import Heading from "./Components/Heading";
import MainPage from "./Components/MainPage";
import Upload from "./Components/Post/Upload";
import Detail from "./Components/Post/Detail";
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
