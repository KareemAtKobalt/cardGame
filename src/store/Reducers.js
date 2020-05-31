import { START_GAME_DECK } from "../constants";

const initialDeckState = {
  deck: []
};

export const deckReducer = (state = initialDeckState, action) => {
  switch (action.type) {
    case START_GAME_DECK:
      return Object.assign({}, state, { deck: action.payload });
    default:
      return state;
  }
};
