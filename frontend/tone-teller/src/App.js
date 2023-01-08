import React from "react";
import "./App.css";

// import the landing page from the components folder
import NavHeader from "./components/NavHeader";
import Toneteller from "./components/Toneteller";
import Home from "./components/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavHeader />
        {/* <Hero></Hero>
        <LandingContent></LandingContent> */}
        <Routes>
          <Route path="/DivineInspiration/" element={<Home />} />
          <Route path="DivineInspiration/toneteller" element={<Toneteller />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
