import React, { useState } from 'react';
import Router from './Router';
import './assets/App.css';
import Navbar from './components/home/Navbar'

const App = () => {
  const pathname = window.location.pathname; // .replace(/\//g, "");
  const realPathname = pathname.includes("portfolio") ? pathname.replace("/portfolio/", "") : pathname.replace(/\//g, "");
  const [current, setCurrent] = useState(realPathname === "" ? "home" : realPathname);
  const handleNavbarClick = e => {
    console.log('click ', e);
    if (e.key !== "none") {
      setCurrent(e.key);
    }
  };

  console.log(realPathname);

  return (
    <div className="App">
      <Navbar
        current={current}
        handleNavbarClick={handleNavbarClick}
      >
    </Navbar>
      <Router></Router>
    </div>
  );
}

export default App;
