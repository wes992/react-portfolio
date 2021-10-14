import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import { Nav } from './components/NavBar';
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
