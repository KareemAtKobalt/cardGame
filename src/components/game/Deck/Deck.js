import React, { Component } from "react";
import Card from "../Card/Card";
import { connect } from "react-redux";
import { clickOnEndPlay, newGameDeck } from "../../../store/actions/index";
import { store } from "../../../store/store";
import classes from "./Deck.css";

//may need to move these functions in app.js so all components can access it.
const mapStateToProps = (state) => {
	return {
		deck: state.deckReducer.deck,
		players: state.gameReducer.players,
		disabledCards: state.deckReducer.disabledCards,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLoad: () => dispatch(newGameDeck()),
		buttonClick: () => dispatch(clickOnEndPlay(store.getState())),
	};
};

class Deck extends Component {
	componentDidMount() {
		this.props.onLoad();
	}

	isCardDisabled = (id) => this.props.disabledCards.some((card) => card.id === id);

	render() {
		return (
			<div className={classes.Deck}>
				<button onClick={this.props.buttonClick}>END GAME</button>
				{this.props.deck.map((card, index) => (
					<Card key={index} card={card} disabled={this.isCardDisabled(card.id)} />
				))}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
