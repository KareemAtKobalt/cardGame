import { START_GAME_DECK, CLICK_ON_CARD } from "../constants";

const initialDeckState = {
  deck: []
};

export const deckReducer = (state = initialDeckState, action = {}) => {
  switch (action.type) {
    case START_GAME_DECK:
      return Object.assign({}, state, { deck: action.payload });
    default:
      return state;
  }
};

const initialPlayState = {
  attemptInAPlay: 1,
  matchingPairsInPlay: 0,
  firstSelection: [],
  secondSelection: []
};

const insertItem = (array, action) => {
  let newPlaySelectionArray = array.slice();
  newPlaySelectionArray.splice(0, 0, action.payload);
  return newPlaySelectionArray;
};

const playClickSelection = (state, action) => {
  let {
    firstSelection,
    secondSelection,
    attemptInAPlay,
    matchingPairsInPlay
  } = state;
  if (firstSelection.length === attemptInAPlay - 1 && attemptInAPlay !== 0) {
    return { firstSelection: insertItem(firstSelection, action) };
  }
  if (firstSelection.length - secondSelection.length === 1) {
    const insertIntoSecondSelection = insertItem(secondSelection, action);
    if (firstSelection[0].number === insertIntoSecondSelection[0].number) {
      attemptInAPlay++;
      matchingPairsInPlay++;
    } else {
      attemptInAPlay = 0;
    }
    return {
      secondSelection: insertIntoSecondSelection,
      attemptInAPlay: attemptInAPlay,
      matchingPairsInPlay: matchingPairsInPlay
    };
  }
};

export const playReducer = (state = initialPlayState, action = {}) => {
  switch (action.type) {
    case CLICK_ON_CARD:
      return Object.assign({}, state, playClickSelection(state, action));
    default:
      return state;
  }
};
