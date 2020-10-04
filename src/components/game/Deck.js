import React, { Component } from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { newGameDeck, clickOnEndPlay } from "../../action/action";
import { store } from "../../store/store";
import "./Deck.css";

//may need to move these functions in app.js so all components can access it.
const mapStateToProps = state => {
  return {
    deck: state.deckReducer.deck,
    players: state.gameReducer.players
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(newGameDeck()),
    buttonClick: () => dispatch(clickOnEndPlay(store.getState()))
  };
};

class Deck extends Component {
  handleClick = () => {
    this.props.buttonClick();
  };
  render() {
    return (
      <div className="Deck">
        {" "}
        <button hidden onClick={this.handleClick}>
          {" "}
          END GAME{" "}
        </button>
        {this.props.deck.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    );
  }
  componentDidMount() {
    this.props.onLoad();
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deck);
