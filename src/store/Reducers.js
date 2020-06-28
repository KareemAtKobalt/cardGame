import { START_GAME_DECK, CLICK_ON_CARD, REMOVE_CARD_FROM_DECK } from "../constants";
import { store } from './store.js'


const initialDeckState = {
  deck: []
};

export const deckReducer = (state = initialDeckState, action = {}) => {
  switch (action.type) {
    case START_GAME_DECK:
      return Object.assign({}, state, { deck: action.payload });
      case REMOVE_CARD_FROM_DECK:
        return Object.assign({}, state, { deck: action.payload });
    default:
      return state;
  }
};



const initialPlayState = {
  attemptInAPlay: 1,
  matchingPairsInPlay: 0,
  firstSelection: [],
  secondSelection: [],
  cardsToBeRemoved: []
};

const insertItem = (array, action) => {
  let newPlaySelectionArray = array.slice();
  newPlaySelectionArray.splice(0, 0, action.payload);
  return newPlaySelectionArray;
};

const removeCardFromDeck = (firstCardArry, secondCardArry) => {
  const cardsToBeRemoved = []
  for (let i = firstCardArry.length - 1; i > 0; i--) {
    // remove from firstCardArry [i] secondCardArry[i]

    cardsToBeRemoved.push(firstCardArry[i])
    cardsToBeRemoved.push(secondCardArry[i])


    //console.log("cardsToBeRemoved :", cardsToBeRemoved)


  }
  return cardsToBeRemoved;

}



const playClickSelection = (state, action) => {
  let {
    firstSelection,
    secondSelection,
    attemptInAPlay,
    matchingPairsInPlay,
    cardsToBeRemoved,
  } = state;
  if (firstSelection.length === attemptInAPlay - 1 && attemptInAPlay !== 0) {
    return { firstSelection: insertItem(firstSelection, action) };
  }
  if (firstSelection.length - secondSelection.length === 1) {
    secondSelection = insertItem(secondSelection, action);
    if (firstSelection[0].number === secondSelection[0].number) {
      attemptInAPlay++;
      matchingPairsInPlay++;
      // method to highLight Card 


    } else {
      attemptInAPlay = 0;
      // remove cards from deck 
      cardsToBeRemoved = removeCardFromDeck(firstSelection, secondSelection)
      // console.log("None matching pair ",attemptInAPlay )

    }
    return {
      secondSelection: secondSelection,
      attemptInAPlay: attemptInAPlay,
      matchingPairsInPlay: matchingPairsInPlay,
      cardsToBeRemoved: cardsToBeRemoved
    };
  }
};






export const playReducer = (state = initialPlayState, action = {}) => {
 // const allState=action; 
  switch (action.type) {
    case CLICK_ON_CARD:

      return Object.assign({}, state, playClickSelection(state, action));
    default:
      return state;
  }


};


