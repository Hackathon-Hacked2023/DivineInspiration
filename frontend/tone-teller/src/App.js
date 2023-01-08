import React from 'react';
// import the landing page from the components folder
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavHeader from './components/NavHeader';

function App() {
  // routing to landing page
  return (
    <>
    <Router>
      <NavHeader/>
        <Routes>
          <Route path='/' exact />
        </Routes>
    </Router>
  </>
  );
}

export default App;
