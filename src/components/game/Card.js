import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./Card.css";
import { clickOnCard } from "../../store/actions/index";

const renderSwitch = (card) => {
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

const mapStateToProps = (state) => {
	return { firstSelection: state.playReducer.firstSelection };
};

const mapDispatchToProps = (dispatch) => {
	return {
		clickOnCard: (card) => {
			return dispatch(clickOnCard(card));
		},
	};
};

class Card extends Component {
	state = {
		cardActive: false,
	};

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.card.id === this.props.card.id && this.state.cardActive !== nextState.cardActive;
	}

	onclickHandler = (card) => {
		const isCardActive = !this.state.cardActive;
		this.setState({ cardActive: isCardActive });
		if (isCardActive) {
			this.cardClassNames.push(classes.CardFlipped);
		} else {
			this.cardClassNames.pop(classes.CardFlipped);
		}
		this.props.clickOnCard(card);
	};

	cardClassNames = [classes.Card];

	render() {
		return (
			<div className={this.cardClassNames.join(" ")} onClick={(e) => this.onclickHandler(this.props.card)}>
				{renderSwitch(this.props.card)}
				<br />
				{this.props.card.suite}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
