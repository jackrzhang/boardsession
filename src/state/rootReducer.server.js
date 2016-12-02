import { combineReducers } from 'redux-immutable';
import pointsReducer from './pointsReducer';

const rootReducer = combineReducers({
  points: pointsReducer
});

export default rootReducer;
