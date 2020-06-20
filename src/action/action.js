import { START_GAME_DECK, CLICK_ON_CARD } from "../constants";
import createDeck from "../helper/createDeck";

export const newGame = () => {
  return {
    type: START_GAME_DECK,
    payload: createDeck
  };
};

// payload need to be more meaningful
export const clickOnCard = card => {
  return {
    type: CLICK_ON_CARD,
    payload: {
      suite: card.suite,
      number: card.number
    }
  };
};
