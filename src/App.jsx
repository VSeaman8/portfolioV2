import { Routes, Route } from "react-router-dom";

import About from "./pages/About";
import HomePage from "./pages/HomePage";

import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/*<Route path="aboutMe" element={<AboutMe />} />*/}
          <Route path="about" element={<About />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
