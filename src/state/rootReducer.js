import { combineReducers } from 'redux-immutable';
import boardReducer from './boardReducer';
import markerReducer from './markerReducer';

const rootReducer = combineReducers({
  board: boardReducer,
  marker: markerReducer
});

export default rootReducer;
