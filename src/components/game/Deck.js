import React, { Component } from "react";
import Card from "./Card";
import { connect } from "react-redux";
// import createDeck from "../../helper/createDeck";

import { newGame } from "../../action/action";

const mapStateToProps = state => {
  return { deck: state.deckReducer.deck };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(newGame())
  };
};
//const {deck}=this.props


class Deck extends Component {


  render() {
    return (
      <div>
      
     { this.props.deck.map(card => <Card card={card}/>)}
        
      </div>
    );
  }
  componentDidMount() {
    console.log("props", this.props);
    console.log("state", this.state);
    this.props.onLoad();
    console.log("hi");
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deck);
