import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes';

import Left from "./components/left";
import "./App.css";

const App = () => {

  return (
    <div className="App">
      <Router>
        <Left />
        <Routes />
      </Router>
    </div>    
  );
}

export default App;
