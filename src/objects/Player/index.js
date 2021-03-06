import React from "react";

import playerX from "../../img/player-x.png";
import playerO from "../../img/player-o.png";

import "./styles.css";

const Player = ({ player }) => {
  const players = [];
  players["x"] = playerX;
  players["o"] = playerO;

  return (
    <button className="player-x">
      <img src={players[player]} alt={`Jogador ${player.toUpperCase()}`} />
    </button>
  );
};

export default Player;
