import React from "react";
import Logo from "./objects/Logo/index.js";
import About from "./objects/About/index.js";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <About />
      </header>
    </div>
  );
};

export default App;
