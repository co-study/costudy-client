import { Routes, Route } from "react-router-dom";
import "./App.css";
import Heading from "./Components/Heading";
import MainPage from "./Components/MainPage";
import Upload from "./Components/Post/Upload";
function App() {
  return (
    <>
      <Heading />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </>
  );
}

export default App;
