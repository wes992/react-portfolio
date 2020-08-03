import React from "react";
import { Switch, Route } from "react-router-dom";

import Body from './components/body';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Skills from './pages/skills';

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