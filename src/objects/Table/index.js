import React from "react";

import Circle from "../../objects/Circle/index.js";
import X from "../../objects/X/index.js";

import "./styles.css";

const Table = () => {
  return (
    <table className="table">
      <tr>
        <td className="line-1">
          <X />
        </td>
        <td className="line-2">
          <Circle />
        </td>
        <td className="line-3">
          <X />
        </td>
      </tr>

      <tr>
        <td className="line-4">
          <Circle />
        </td>
        <td className="line-5">
          <X />
        </td>
        <td className="line-6">
          <Circle />
        </td>
      </tr>

      <tr>
        <td className="line-7">
          <Circle />
        </td>
        <td className="line-8">
          <X />
        </td>
        <td className="line-9">
          <Circle />
        </td>
      </tr>
    </table>
  );
};

export default Table;
