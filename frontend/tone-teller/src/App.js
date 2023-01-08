import React from "react";
import "./App.css";

// import the landing page from the components folder
import NavHeader from "./components/NavHeader";
import Toneteller from "./components/Toneteller";
import Home from "./components/Home";

import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <React.StrictMode>
      <HashRouter>
        <NavHeader />
        {/* <Hero></Hero>
        <LandingContent></LandingContent> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/toneteller" element={<Toneteller />} />
        </Routes>
        {/* <Footer /> */}
      </HashRouter>
    </React.StrictMode>
  );
}

export default App;
