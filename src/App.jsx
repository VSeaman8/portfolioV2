import { Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Archive from "./pages/Archive.jsx";
import Dictionary from "./pages/projects/Dictionary.jsx";
import DungeonsCharGenerator from "./pages/projects/DungeonsCharGenerator.jsx";
import FunStuff from "./pages/FunStuff.jsx";
import HomePage from "./pages/HomePage";
import miniProjects from "./pages/projects/miniProjects.jsx";
import TravelWebsiteDF from "./pages/projects/TravelWebsiteDF.jsx";
import WeatherApp from "./pages/projects/WeatherApp.jsx";

import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/funstuff" element={<FunStuff />} />
          <Route path="/project1" element={<DungeonsCharGenerator />} />
          <Route path="/project2" element={<TravelWebsiteDF />} />
          <Route path="/project3" element={<Dictionary />} />
          <Route path="/project4" element={<WeatherApp />} />
          <Route path="/project5" element={<miniProjects />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
