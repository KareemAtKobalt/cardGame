import * as actionTypes from "./actionTypes";

export const submitPlayerName = (playerIdAndName) => {
	return {
		type: actionTypes.SUBMIT_PLAYERS,
		payload: playerIdAndName,
	};
};
