import React from "react";
import { initStore } from './store'
import Provider from './store/provider';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes';

import Left from "./components/left";
import "./App.css";

const store = initStore();
const App = () => {

  return (
    <div className="App">
      <Provider store = {store}>
      <Router>
        <Left />
        <Routes />
      </Router>
      </Provider>
    </div>    
  );
}

export default App;
