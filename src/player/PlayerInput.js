import React from "react";

const PlayerInput = () => {
  return (
    <label>
      Player Name
      <input type="text" name="playerName" placeholder="add player name" />
      {console.log("Nani")}
    </label>
  );
};

export default PlayerInput;
