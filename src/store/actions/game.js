import * as actionTypes from "./actionTypes";

export const submitPlayerName = (playerIdAndName) => {
	return {
		type: actionTypes.SUBMIT_PLAYERS,
		payload: playerIdAndName,
	};
};

// export const ChangePlayersTurn = (currentPlayerIndex, numberOfPlayers) => {
//   return {
//     type: END_PLAY_TURN,
//     payload: nextPlayerTurn(currentPlayerIndex, numberOfPlayers)
//   };
// };
