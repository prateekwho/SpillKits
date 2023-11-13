import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TopBar from "./components/TopBar";
import About from "./pages/About";
import TestimonialPage from "./pages/TestimonialPage";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="about" element={<About />} />
        <Route index path="testimonial" element={<TestimonialPage />} />
        <Route index path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
