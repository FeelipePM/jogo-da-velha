import React from "react";
import logo from "./img/collabcode.svg";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a href="#" className="About">
          Sobre
        </a>
      </header>
    </div>
  );
};

export default App;
