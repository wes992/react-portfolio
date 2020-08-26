import React from "react";
import { initStore } from './store'
import Provider from './store/provider';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes';

import Nav from "./components/nav";
import "./App.scss";

const store = initStore();
const App = () => { 

  return (
      <Provider store = {store}>
        <Router>
          <Nav />
          <Routes />
        </Router>
      </Provider>
  );
}

export default App;
