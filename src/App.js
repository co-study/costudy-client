import { Routes, Route } from "react-router-dom";
import "./App.css";
import Heading from "./Components/Heading";
import MainPage from "./Components/MainPage";
function App() {
  return (
    <>
      <Heading />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
