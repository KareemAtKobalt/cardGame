import React, { Component } from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { newGame } from "../../action/action";

//may need to move these functions in app.js so all components can access it.
const mapStateToProps = state => {
  return { deck: state.deckReducer.deck };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(newGame())
  };
};

class Deck extends Component {
  render() {
    return (
      <div>
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
