import {
  START_GAME,
  START_GAME_DECK,
  CLICK_ON_CARD,
  END_PLAY,
  ADD_PLAYER,
  SUBMIT_PLAYERS,
  END_PLAY_TURN
} from "../constants";
import createDeck from "../helper/createDeck";
import { removeMatchingPair } from "../helper/removeMatchingPair";
import { nextPlayerTurn } from "../helper/nextPlayerTurn";

export const newGameDeck = () => {
  return {
    type: START_GAME_DECK,
    payload: createDeck
  };
};

export const newGame = () => {
  return {
    type: START_GAME,
    payload: true
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
  const playersState = store.gameReducer.players;
  const playerId = () => {
    console.log("hi");
    const playerState = playersState.find(player => player.isCurrentTurn);
    console.log("___________playerState", playerState);
    return playerState.id;
  };

  console.log("___________0.7", 0.7);
  return dispatch => {
    dispatch({ type: END_PLAY, payload: removeMatchingPair(store) });
    console.log("___________1", 1);
    dispatch({
      type: END_PLAY_TURN,
      test: console.log("___________playersState", playersState),
      payload: nextPlayerTurn(playerId(), playersState.length)
    });
  };
};

export const clickAddAPlayer = increase => {
  return {
    type: ADD_PLAYER
    //payload:addToPlayerForm (increase)
  };
};

export const submitPlayerName = playerIdAndName => {
  return {
    type: SUBMIT_PLAYERS,
    payload: playerIdAndName
  };
};

// export const ChangePlayersTurn = (currentPlayerIndex, numberOfPlayers) => {
//   return {
//     type: END_PLAY_TURN,
//     payload: nextPlayerTurn(currentPlayerIndex, numberOfPlayers)
//   };
// };
