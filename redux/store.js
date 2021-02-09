import { createStore } from 'redux';
import { combineReducers } from 'redux';
import searchReducer from './reducers/SearchReducer';
import formulaReducer from './reducers/FormulaReducer';

let reducers = combineReducers({
    search: searchReducer,
    formula: formulaReducer,
  })

const store = createStore( reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;