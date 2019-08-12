import React from "react";

import Circle from "../Circle/index.js";
import X from "../X/index.js";

import "./styles.css";

const Whiteboard = () => {
  return (
    <div className="white-board">
      <Circle />
      <X />
    </div>
  );
};

export default Whiteboard;
