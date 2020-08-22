import {
  START_GAME,
  START_GAME_DECK,
  CLICK_ON_CARD,
  END_PLAY,
  ADD_PLAYER,
  SUBMIT_PLAYERS,
  END_PLAY_TURN, 
  SWITCH_PLAYER_TURN
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
  const getPlayerId = () => {
    const playerState = playersState.find(player => player.isCurrentTurn);
    console.log ('HI ',playerState.id);
    return playerState.id;
  };

  return dispatch => {
    dispatch({ type: END_PLAY, payload: removeMatchingPair(store) });


    dispatch({
      type: END_PLAY_TURN,
      payload: nextPlayerTurn(getPlayerId(), playersState.length)
    });

    dispatch({
      type: SWITCH_PLAYER_TURN
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
