import * as actionTypes from "../actions/actionTypes";

const initialState = {
	// array of player object {id, name, score, matchingPairsWon[], isCurrentTurn?}
	players: [
		{
			id: 1,
			name: "Guest",
			score: 0,
			matchingPairsWon: [],
			isCurrentTurn: false,
		},
	],
	playerForm: 1,
	matchInPlay: false,
};

const addPlayerObjectToState = (playersState) => {
	const nextPlayer = playersState.length + 1;
	let playerArray = playersState;
	const player = {
		id: nextPlayer,
		name: "Guest " + nextPlayer,
		score: 0,
		matchingPairsWon: [],
		isCurrentTurn: false,
	};
	playerArray.push(player);
	return playerArray;
};

const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case actionTypes.START_GAME:
			return { ...state, matchInPlay: action.payload, players: firstPlayTurn(state.players) };
		case actionTypes.ADD_PLAYER:
			const val = state.playerForm;
			return {
				...state,
				playerForm: val + 1,
				players: addPlayerObjectToState(state.players),
			};
		case actionTypes.SUBMIT_PLAYERS:
			return {
				...state,
				players: changePlayerName(action.payload, state.players),
			};
		case actionTypes.END_PLAY_TURN:
			return {
				...state,
				players: changePlayersCurrentTurn(action.payload, state.players),
			};
		case actionTypes.ADD_PAIRS_TO_TOTAL:
			return {
				...state,
				players: updatingPlayersMatchingPairs(state.players, action.payload),
			};
		case actionTypes.UPDATE_SCORE:
			return {
				...state,
				players: updateScore(state.players, action.payload),
			};

		default:
			return state;
	}
};

const updatingPlayersMatchingPairs = (player, matchingPairs) => {
	for (let i = 0; i < player.length; i++) {
		if (player[i].isCurrentTurn === true) {
			const tempArray = player[i].matchingPairsWon;
			player[i].matchingPairsWon = [...tempArray, matchingPairs];
			return player;
		}
	}
};

const updateScore = (players, matchingPairs) => {
	return players.map((player) => {
		if (player.isCurrentTurn && matchingPairs.length > 0) player.score = player.score + matchingPairs.length / 2;
		return player;
	});
};

const changePlayersCurrentTurn = (playersIds, playersState) => {
	const { currentPlayerId, nextPlayerId } = playersIds;
	playersState.forEach((playerState) => {
		if (playerState.id === currentPlayerId) playerState.isCurrentTurn = false;
		if (playerState.id === nextPlayerId) playerState.isCurrentTurn = true;
	});
	return playersState;
};

const changePlayerName = (player, playersState) => {
	playersState.forEach((playerState) => {
		if (player.id === playerState.id) {
			playerState.name = player.name;
		}
	});
	return playersState;
};

const firstPlayTurn = (players) => {
	players[0].isCurrentTurn = true;
	return players;
};

export default reducer;
