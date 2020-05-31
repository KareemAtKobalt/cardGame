import { START_GAME_DECK } from "../constants";
import createDeck from "../helper/createDeck";

export const newGame = () => {
  return {
    type: START_GAME_DECK,
    payload: createDeck
  };
  //   dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data });
};
