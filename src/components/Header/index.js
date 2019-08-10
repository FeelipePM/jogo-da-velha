import React from "react";
import Logo from "../../objects/Logo/index.js";
import About from "../../objects/About/index.js";
import Menu from "../../objects/Menu/index.js";

import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <About />
      <Menu />
    </header>
  );
};

export default Header;
