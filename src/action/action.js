import { START_GAME_DECK, CLICK_ON_CARD, REMOVE_CARD_FROM_DECK } from "../constants";
import createDeck from "../helper/createDeck";
import {removeMatchingPair} from "../helper/removeMatchingPair";

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
      number: card.number,
      id: card.id
    }
  };

};

export const clickOnEndPlay = store => {
  return {
    type: REMOVE_CARD_FROM_DECK,
    payload: removeMatchingPair (store)
  }
}

