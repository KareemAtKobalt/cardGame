import React from "react";
import { connect } from "react-redux";
import "./Card.css";
import { clickOnCard } from "../../action/action";

const renderSwitch = card => {
  if (card.number) {
    switch (card.number) {
      case 1:
        return "Ace";
      case 11:
        return "Jack";
      case 12:
        return "Queen";
      case 13:
        return "King";
      default:
        return card.number;
    }
  }
  if (card.joker) {
    return "Joker";
  }
};

const mapStateToProps = state => {
  return { firstSelection: state.playReducer.firstSelection };
};

const mapDispatchToProps = dispatch => {
  return {
    clickOnCard: (e, card) => {
      return dispatch(clickOnCard(card));
    }
  };
};

const Card = props => {
  const card = props.card;
  console.log("Card ", card);

  return (
    <div className="Card" onClick={e => props.clickOnCard(e.target, card)}>
      {renderSwitch(card)}
      <br />
      {card.suite}
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
