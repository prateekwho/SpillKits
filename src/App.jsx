import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TopBar from "./components/TopBar";
import About from "./pages/About";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
