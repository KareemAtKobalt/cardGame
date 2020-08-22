import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { deckReducer, playReducer, gameReducer } from "./Reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ deckReducer, playReducer, gameReducer });
const tools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const enhancers = [ applyMiddleware(thunk), tools];
export const store = createStore(
  rootReducer,
  compose(...enhancers)
);

export default store;
