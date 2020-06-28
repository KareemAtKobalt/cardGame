import { createStore, combineReducers } from "redux";
import { deckReducer, playReducer } from "./Reducers";

const rootReducer = combineReducers({ deckReducer, playReducer });
const tools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const store = createStore(
  rootReducer, tools
 
);

export default store;
