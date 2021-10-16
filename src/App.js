import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import { Nav } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes />
    </Router>
  );
};

export default App;
