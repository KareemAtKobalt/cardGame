import {createStore,combineReducers} from 'redux'
import deckReducer from './Reducers'

const rootReducer = combineReducers ({deck: deckReducer}) 
const store = createStore (rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 

export default store;