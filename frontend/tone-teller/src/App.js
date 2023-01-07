import React from 'react';
// import the landing page from the components folder
import Landing from './components/landing';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // routing to landing page
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
