import {
  START_GAME_DECK,
  CLICK_ON_CARD,
  END_PLAY,
  ADD_PLAYER,
  SUBMIT_PLAYERS,
  START_GAME,
  END_PLAY_TURN
} from "../constants";
import { addToPlayerForm, changePlayerName } from "../helper/playerFunctions";
import { changePlayersCurrentTurn } from "../helper/gameFunctions";

const initialDeckState = {
  deck: []
};

export const deckReducer = (state = initialDeckState, action = {}) => {
  switch (action.type) {
    case START_GAME_DECK:
      return { ...state, deck: action.payload };
    case END_PLAY:
      return { ...state, deck: action.payload };
    default:
      return state;
  }
};

const initialPlayState = {
  currentAttemptInAPlay: 1,
  matchingPairsInPlay: 0,
  firstSelection: [],
  secondSelection: [],
  cardsToBeRemovedFromDeck: []
};

const insertItem = (array, action) => {
  let newPlaySelectionArray = array.slice();
  newPlaySelectionArray.splice(0, 0, action.payload);
  return newPlaySelectionArray;
};

const removeCardFromDeck = (firstCardArry, secondCardArry) => {
  const cardsToBeRemovedFromDeck = [];
  for (let i = firstCardArry.length - 1; i > 0; i--) {
    // remove from firstCardArry [i] secondCardArry[i]

    cardsToBeRemovedFromDeck.push(firstCardArry[i]);
    cardsToBeRemovedFromDeck.push(secondCardArry[i]);
  }
  return cardsToBeRemovedFromDeck;
};

const playClickSelection = (state, action) => {
  let {
    firstSelection,
    secondSelection,
    currentAttemptInAPlay,
    matchingPairsInPlay,
    cardsToBeRemovedFromDeck
  } = state;
  if (
    firstSelection.length === currentAttemptInAPlay - 1 &&
    currentAttemptInAPlay !== 0
  ) {
    return { firstSelection: insertItem(firstSelection, action) };
  }
  if (firstSelection.length - secondSelection.length === 1) {
    secondSelection = insertItem(secondSelection, action);
    if (firstSelection[0].number === secondSelection[0].number) {
      currentAttemptInAPlay++;
      matchingPairsInPlay++;
      // method to highLight Card
    } else {
      // the end of a players attempts in a play
      currentAttemptInAPlay = 0;
      // remove cards from deck
      cardsToBeRemovedFromDeck = removeCardFromDeck(
        firstSelection,
        secondSelection
      );
      matchingPairsInPlay = 0;
      firstSelection = [];
      secondSelection = [];
    }
    return {
      firstSelection: firstSelection,
      secondSelection: secondSelection,
      currentAttemptInAPlay: currentAttemptInAPlay,
      matchingPairsInPlay: matchingPairsInPlay,
      cardsToBeRemovedFromDeck: cardsToBeRemovedFromDeck
    };
  }
};

export const playReducer = (state = initialPlayState, action = {}) => {
  // const allState=action;
  switch (action.type) {
    case CLICK_ON_CARD:
      return Object.assign({}, state, playClickSelection(state, action));
    case END_PLAY:
      return { ...state, cardsToBeRemovedFromDeck: [] };
    default:
      return state;
  }
};

const initialgameState = {
  // array of player object {id, name, score, matchingPairsWon[], isCurrentTurn?}
  players: [
    {
      id: 1,
      name: "Guest",
      score: 0,
      matchingPairsWon: [],
      isCurrentTurn: true
    }
  ],
  playerForm: 1,
  matchInPlay: false
};

const addPlayerObjectToState = playersState => {
  const nextPlayer = playersState.length + 1;
  let playerArray = playersState;
  const player = {
    id: nextPlayer,
    name: "Guest " + nextPlayer,
    score: 0,
    matchingPairsWon: [],
    isCurrentTurn: true
  };
  playerArray.push(player);
  return playerArray;
};
export const gameReducer = (state = initialgameState, action = {}) => {
  switch (action.type) {
    case START_GAME:
      return { ...state, matchInPlay: action.payload };
    case ADD_PLAYER:
      const val = state.playerForm;
      return {
        ...state,
        playerForm: addToPlayerForm(val),
        players: addPlayerObjectToState(state.players)
      };
    case SUBMIT_PLAYERS:
      return {
        ...state,
        players: changePlayerName(action.payload, state.players)
      };
    case END_PLAY_TURN:
      return {
        ...state,
        players: changePlayersCurrentTurn(action.payload, state.players)
      };
    default:
      return state;
  }
};
