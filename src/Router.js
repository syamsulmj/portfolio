import React from 'react';
import {
  BrowserRouter as Portfolio,
  Route,
  Switch,
 } from 'react-router-dom';
import Home from './components/home/Home';

const Router = () => {
  return (
    <Portfolio>
      <Switch>
        <div>
          <Route path="/" component={ Home }/>
        </div>
      </Switch>
    </Portfolio>
  )
}

export default Router;
