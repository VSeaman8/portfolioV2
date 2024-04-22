import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
      {/*<Footer />*/}
    </>
  );
}

export default App;
