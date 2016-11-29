import { combineReducers } from 'redux-immutable';
import boardReudcer from './boardReducer';

const rootReducer = combineReducers({
  board: boardReducer
});

export default rootReducer;
