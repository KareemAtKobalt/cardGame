import { createStore, combineReducers } from "redux";
import { deckReducer, playReducer } from "./Reducers";

const rootReducer = combineReducers({ deckReducer, playReducer });
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
