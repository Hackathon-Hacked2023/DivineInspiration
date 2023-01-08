import React from "react";
import Hero from "./components/Hero";
import LandingContent from "./components/LandingContent";
import "./App.css";

// import the landing page from the components folder
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavHeader from "./components/NavHeader";

function App() {
  // routing to landing page
  return (
    <>
      <Router>
        <NavHeader />
        <Hero></Hero>
        <LandingContent></LandingContent>
        <Routes>
          <Route path="/" exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
