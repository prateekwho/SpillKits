import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
