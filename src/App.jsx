import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../components/Home/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import About from "../components/About/About";
import Project from "../components/Project/Project";
import Resume from "../components/Resume/Resume";
import "./App.css";
import Footer from "../components/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
