import { createStore, combineReducers } from "redux";
import { deckReducer, playReducer, gameReducer } from "./Reducers";

const rootReducer = combineReducers({ deckReducer, playReducer, gameReducer });
const tools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const store = createStore(rootReducer, tools);

export default store;
