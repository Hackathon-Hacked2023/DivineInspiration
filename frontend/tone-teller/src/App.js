import React from "react";
import Hero from "./components/Hero";
import LandingContent from "./components/LandingContent";
import "./App.css";

// import the landing page from the components folder
import NavHeader from "./components/NavHeader";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from './components/pages/About';
import ChromeExtension from './components/pages/ChromeExtension';
import FAQ from './components/pages/FAQ';
import ToneTeller from './components/pages/ToneTeller';

function App() {
  return (
    <>
      <Router>
        <NavHeader />
        {/* <Hero></Hero>
        <LandingContent></LandingContent> */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<LandingContent/>} />
          <Route path="/chrome" element={<ChromeExtension />} />
          <Route path="/faq" element={<FAQ />}> </Route>
          <Route path="/toneteller" element={<ToneTeller />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
