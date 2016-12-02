import { combineReducers } from 'redux-immutable';
import pointsReducer from './pointsReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  points: pointsReducer,
  users: usersReducer
});

export default rootReducer;
