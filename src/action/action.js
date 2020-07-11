import {
  START_GAME_DECK,
  CLICK_ON_CARD,
  REMOVE_CARD_FROM_DECK,
  ADD_PLAYER, 
  SUBMIT_PLAYERS
} from "../constants";
import createDeck from "../helper/createDeck";
import { removeMatchingPair } from "../helper/removeMatchingPair";
//import { addToPlayerForm } from "../helper/playerFunctions";

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
    payload: removeMatchingPair(store)
  };
};

export const clickAddAPlayer = (increase) => {
  console.log("__________click",increase );
  return {
    type: ADD_PLAYER
    //payload:addToPlayerForm (increase)
  };
};

export const clickSubmitPlayers = (players) => {
  return {
    type:SUBMIT_PLAYERS,
    payload: players 
  }
}