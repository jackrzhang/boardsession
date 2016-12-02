import { combineReducers } from 'redux-immutable';
import boardReducer from './boardReducer';
import markerReducer from './markerReducer';
import pointsReducer from './pointsReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  board: boardReducer,
  marker: markerReducer,
  points: pointsReducer,
  users: usersReducer
});

export default rootReducer;
