import React from 'react';
import NavHeader from './components/NavHeader';
import Footer from './components/Footer';
import './App.css';
// import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Services from './components/pages/Services';
// import Products from './components/pages/Products';
// import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <NavHeader/>
        <Routes>
          {/* <Route path='/' exact component={About} />
          <Route path='/chrome' component={ChromeExtension} />
          <Route path='/FAQ' component={FAQ} />
          <Route path='/sign-up' component={SignUp} /> */}
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;