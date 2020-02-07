import React, { useState } from 'react';
import Router from './Router';
import './assets/App.css';
import Navbar from './components/home/Navbar';
import { getRealPathname } from './lib/Helpers';

const App = () => {
  const [current, setCurrent] = useState(getRealPathname() === "" ? "home" : getRealPathname());
  const handleNavbarClick = e => {
    console.log('click ', e);
    if (e.key !== "none") {
      setCurrent(e.key);
    }
  };

  console.log(getRealPathname());

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
