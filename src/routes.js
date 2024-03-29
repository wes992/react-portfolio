import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Body,
  About,
  Contact,
  Skills,
  Projects,
} from './pages';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Body />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/skills">
        <Skills />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default Routes;
