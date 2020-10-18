import * as actionTypes from "../actions/actionTypes";

const initialState = {
	deck: [],
	disabledCards: [],
};

const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case actionTypes.START_GAME_DECK:
			return { ...state, deck: action.payload };
		case actionTypes.UPDATE_DISABLED_CARDS:
			return { ...state, disabledCards: [...state.disabledCards, ...action.payload] };
		default:
			return state;
	}
};

export default reducer;
