import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./Card.css";
import { clickOnCard } from "../../action/action";

const cardStyle = [classes.Card];

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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clickOnCard: (e, card) => {
      return dispatch(clickOnCard(card));
    }
  };
};

class Card extends Component {
  state = {
    cardHidden: false
  };

  cardClassNames = [classes.Card];

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.card.id === this.props.card.id && !nextState.cardHidden;
  }

  onclickHandler = (event, card) => {
    this.setState({ cardClicked: true });
    this.cardClassNames.push(classes.CardFlipped);
    this.props.clickOnCard(event, card);
  };

  render() {
    return (
      <div
        className={this.cardClassNames.join(" ")}
        onClick={e => this.onclickHandler(e.target, this.props.card)}
      >
        {renderSwitch(this.props.card)}
        <br />
        {this.props.card.suite}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
