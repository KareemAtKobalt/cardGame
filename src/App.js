import React from "react";
import "./App.css";
import Deck from "./components/game/Deck";
import PlayerForm from "./player/PlayerForm";

function App() {
  return (
    <div className="App">
      <PlayerForm />
      <Deck />
    </div>
  );
}

export default App;
