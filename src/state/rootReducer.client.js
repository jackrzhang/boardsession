import { combineReducers } from 'redux-immutable';
import boardReducer from './boardReducer';
import markerReducer from './markerReducer';
import pointsReducer from './pointsReducer';

const rootReducer = combineReducers({
  board: boardReducer,
  marker: markerReducer,
  points: pointsReducer
});

export default rootReducer;
