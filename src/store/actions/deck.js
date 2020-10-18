import { START_GAME, START_GAME_DECK, ADD_PLAYER } from "./actionTypes";
import createDeck from "../../helper/createDeck";

export const newGameDeck = () => {
	return {
		type: START_GAME_DECK,
		payload: createDeck,
	};
};

export const newGame = () => {
	return {
		type: START_GAME,
		payload: true,
	};
};

export const clickAddAPlayer = (increase) => {
	return {
		type: ADD_PLAYER,
		//payload:addToPlayerForm (increase)
	};
};
