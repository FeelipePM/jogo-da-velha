import React from "react";
import Logo from "../../objects/Logo/index.js";
import About from "../../objects/About/index.js";
import Menu from "../../objects/Menu/index.js";

const Header = () => {
  return (
    <header>
      <Logo />
      <About />
      <Menu />
    </header>
  );
};

export default Header;
