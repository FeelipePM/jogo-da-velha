import React from "react";

import Player from "../Player";

import "./styles.css";

const Table = () => {
  return (
    <table className="table">
      <tr>
        <td className="line-1" />
        <Player player="x" />
        <td className="line-2" />
        <td className="line-3" />
      </tr>

      <tr>
        <td className="line-4" />
        <td className="line-5" />
        <td className="line-6" />
      </tr>

      <tr>
        <td className="line-7" />
        <td className="line-8" />
        <td className="line-9" />
      </tr>
    </table>
  );
};

export default Table;
