import React from "react";

import Left from "./components/left";
// import Body from './components/body';
import Text from './components/Text';
import About from './pages/about';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Contact from './pages/contact';
import "./App.css";

const App = () => {

    const renderPages = () => {
      const { pathname } = window.location;

      switch(pathname) {
        case '/about':
          return <About />;
        case '/projects':
          return <Projects />;
        case '/skills':
          return <Skills />;
        case '/contact':
           return <Contact />;
        default:
          return <Text>Hi, I'm Wes, a web developer.</Text>
      }
    }

  return (
    <div className="App">
      { renderPages() }
      <Left />
    </div>    
  );
}

export default App;
