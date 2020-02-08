import React, { useState } from 'react';
import {
  HashRouter as Portfolio,
  Route,
  Switch,
 } from 'react-router-dom';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import { getRealPathname } from './lib/Helpers';
import Navbar from './components/home/Navbar';

const Router = () => {
  const [current, setCurrent] = useState(getRealPathname() === "" ? "home" : getRealPathname());
  const handleNavbarClick = e => {
    if (e.key !== "none") {
      setCurrent(e.key);
    }
  };

  return (
    <Portfolio>
      <Switch>
        <React.Fragment>
          <Navbar
              current={current}
              handleNavbarClick={handleNavbarClick}
            >
          </Navbar>
          <div>
            <Route path="/" component={ Home }/>
            <Route path="/projects" component={ Projects }/>
          </div>
        </React.Fragment>
      </Switch>
    </Portfolio>
  )
}

export default Router;
