import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Nav } from './components/NavBar';
import Routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
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
