import { combineReducers } from 'redux';

const INITIAL_STATE = {
    term: ''
  };

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case 'ADD_TERM':
      return {term : action.payload}

    default:
      return state
  }
};

export default searchReducer
// export default combineReducers({
//   search: searchReducer
// });