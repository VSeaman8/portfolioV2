import { Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Archive from "./pages/Archive.jsx";
import FunStuff from "./pages/FunStuff.jsx";
import HomePage from "./pages/HomePage";

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
        </Routes>
      </Layout>
    </>
  );
}

export default App;
