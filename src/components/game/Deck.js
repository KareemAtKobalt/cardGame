import React, { Component } from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { newGame, clickOnEndPlay } from "../../action/action";

//may need to move these functions in app.js so all components can access it.
const mapStateToProps = state => {
  return { deck: state.deckReducer.deck };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(newGame()),
    buttonClick: () => {return dispatch(clickOnEndPlay())}
  };
};

class Deck extends Component {
  render() {
    return (
      <div>
        <button onClick={this.buttonClick}>  END GAME  </button>
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
