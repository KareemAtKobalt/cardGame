import * as actionTypes from "./actionTypes";

// payload need to be more meaningful
export const clickOnCard = (card) => {
	return {
		type: actionTypes.CLICK_ON_CARD,
		payload: {
			suite: card.suite,
			number: card.number,
			id: card.id,
		},
	};
};

export const clickOnEndPlay = (store) => {
	const playersState = store.gameReducer.players;
	const getPlayerId = () => {
		const playerState = playersState.find((player) => player.isCurrentTurn);
		console.log("HI ", playerState.id);
		return playerState.id;
	};

	return (dispatch) => {
		dispatch({ type: actionTypes.ADD_PAIRS_TO_TOTAL, payload: store.playReducer.cardsToBeRemovedFromDeck });
		dispatch({ type: actionTypes.UPDATE_SCORE, payload: store.playReducer.cardsToBeRemovedFromDeck });
		dispatch({ type: actionTypes.END_PLAY, payload: removeMatchingPair(store) });

		dispatch({
			type: actionTypes.END_PLAY_TURN,
			payload: nextPlayerTurn(getPlayerId(), playersState.length),
		});

		dispatch({ type: actionTypes.SWITCH_PLAYER_TURN });
	};
};

const nextPlayerTurn = (currentPlayerId, numberOfPlayers) => {
	return currentPlayerId === numberOfPlayers ? { currentPlayerId, nextPlayerId: 1 } : { currentPlayerId, nextPlayerId: currentPlayerId + 1 };
};

const removeMatchingPair = (state) => {
	let currentDeck = state.deckReducer.deck;
	const toBeRemoved = state.playReducer.cardsToBeRemovedFromDeck;

	const newDeck = toBeRemoved.reduce((prevDeck, cardBeingRemoved) => {
		return (prevDeck = toBeRemoved.length > 0 ? (currentDeck = currentDeck.filter((card) => cardBeingRemoved.id !== card.id)) : currentDeck);
	}, []);

	return newDeck;
};
