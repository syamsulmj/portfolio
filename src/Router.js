import React, { useState } from 'react';
import {
  HashRouter as Portfolio,
  Route,
  Switch,
 } from 'react-router-dom';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Experiences from './components/experiences/Experiences';
import { getRealPathname } from './lib/Helpers';
import Navbar from './components/home/Navbar';

const Router = () => {
  const [current, setCurrent] = useState(getRealPathname() === "" ? "home" : getRealPathname());
  const handleNavbarClick = e => {
    if (e.key !== "none") {
      setCurrent(e.key);
    }
  };
  const changeNavbarActive = (component) => {
    setCurrent(component);
  }

  return (
    <Portfolio>
      <React.Fragment>
        <Navbar
            current={current}
            handleNavbarClick={handleNavbarClick}
          >
        </Navbar>
        <div>
          <Switch>
            <Route exact path="/" component={() => <Home changeNavbarActive={changeNavbarActive} /> }/>
            <Route path="/experiences" component={ Experiences }/>
            <Route path="/projects" component={ Projects }/>
          </Switch>
        </div>
      </React.Fragment>
    </Portfolio>
  )
}

export default Router;
