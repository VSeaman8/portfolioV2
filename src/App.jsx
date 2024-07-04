import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/*<Route path="aboutMe" element={<AboutMe />} />*/}
        <Route path="projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
