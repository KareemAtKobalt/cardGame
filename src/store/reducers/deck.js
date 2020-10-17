import * as actionTypes from "../actions/actionTypes";

const initialState = {
	deck: [],
};

const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case actionTypes.START_GAME_DECK:
			return { ...state, deck: action.payload };
		case actionTypes.END_PLAY:
			return { ...state, deck: action.payload };
		default:
			return state;
	}
};

export default reducer;
