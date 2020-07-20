import React from "react";
import Header from "./components/header";
import Left from "./components/left";
import Body from './components/body';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Left />
      <div className='Body'>
          <Body />
      </div>
    </div>    
  );
}

export default App;
