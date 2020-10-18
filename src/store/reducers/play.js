import * as actionTypes from "../actions/actionTypes";

const initialState = {
	currentAttemptInAPlay: 1,
	matchingPairsInPlay: 0,
	firstSelection: [],
	secondSelection: [],
	cardsToBeRemovedFromDeck: [],
};

const reducer = (state = initialState, action = {}) => {
	// const allState=action;
	switch (action.type) {
		case actionTypes.CLICK_ON_CARD:
			return Object.assign({}, state, playClickSelection(state, action));
		case actionTypes.END_PLAY:
			return { ...state, cardsToBeRemovedFromDeck: action.payload };
		case actionTypes.SWITCH_PLAYER_TURN:
			return { ...state, currentAttemptInAPlay: 1 };
		default:
			return state;
	}
};

const playClickSelection = (state, action) => {
	let { firstSelection, secondSelection, currentAttemptInAPlay, matchingPairsInPlay, cardsToBeRemovedFromDeck } = state;
	if (firstSelection.length === currentAttemptInAPlay - 1 && currentAttemptInAPlay !== 0) {
		return { firstSelection: insertItem(firstSelection, action) };
	}
	if (firstSelection.length - secondSelection.length === 1) {
		secondSelection = insertItem(secondSelection, action);
		if (firstSelection[0].number === secondSelection[0].number) {
			currentAttemptInAPlay++;
			matchingPairsInPlay++;
			// method to highLight Card
		} else {
			// the end of a players attempts in a play
			currentAttemptInAPlay = 0;
			// remove cards from deck
			cardsToBeRemovedFromDeck = removeCardFromDeck(firstSelection, secondSelection);
			matchingPairsInPlay = 0;
			firstSelection = [];
			secondSelection = [];
		}
		return {
			firstSelection: firstSelection,
			secondSelection: secondSelection,
			currentAttemptInAPlay: currentAttemptInAPlay,
			matchingPairsInPlay: matchingPairsInPlay,
			cardsToBeRemovedFromDeck: cardsToBeRemovedFromDeck,
		};
	}
};

const insertItem = (array, action) => {
	let newPlaySelectionArray = array.slice();
	newPlaySelectionArray.splice(0, 0, action.payload);
	return newPlaySelectionArray;
};

const removeCardFromDeck = (firstCardArry, secondCardArry) => {
	const cardsToBeRemovedFromDeck = [];
	for (let i = firstCardArry.length - 1; i > 0; i--) {
		// remove from firstCardArry [i] secondCardArry[i]

		cardsToBeRemovedFromDeck.push(firstCardArry[i]);
		cardsToBeRemovedFromDeck.push(secondCardArry[i]);
	}
	return cardsToBeRemovedFromDeck;
};

export default reducer;
