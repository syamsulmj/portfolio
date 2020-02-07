import React from 'react';
import {
  BrowserRouter as Portfolio,
  Route,
  Switch,
 } from 'react-router-dom';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';

const Router = () => {
  return (
    <Portfolio>
      <Switch>
        <div>
          <Route path="/" component={ Home }/>
          <Route path="/projects" component={ Projects }/>
        </div>
      </Switch>
    </Portfolio>
  )
}

export default Router;
