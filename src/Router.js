import React from 'react';
import {
  BrowserRouter as Portfolio,
  Route,
  Switch,
 } from 'react-router-dom';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import { getRealPathname } from './lib/Helpers';

const Router = () => {
  return (
    <Portfolio>
      <Switch>
        <div>
          <Route path={`${getRealPathname()}/`} component={ Home }/>
          <Route path={`${getRealPathname()}/projects`} component={ Projects }/>
        </div>
      </Switch>
    </Portfolio>
  )
}

export default Router;
