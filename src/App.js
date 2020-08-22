import React from "react";
import { connect } from "react-redux";
import "./App.css";
import Deck from "./components/game/Deck";
import PlayerForm from "./player/PlayerForm";
import store from "./store/store";

function App() {
  return (
    <div className="App">
      {store.getState().gameReducer.matchInPlay ? <Deck /> : <PlayerForm />}
    </div>
  );
}

function mapStateToProps(state) {
  return { matchInPlay: state.gameReducer.matchInPlay };
}

export default connect(mapStateToProps)(App);
