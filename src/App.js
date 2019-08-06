import React from "react";
import About from "./objects/About/index.js";
import logo from "./img/collabcode.svg";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <About>Felipe</About>
      </header>
    </div>
  );
};

export default App;
