import { combineReducers } from 'redux-immutable';
import boardReducer from './boardReducer';

const rootReducer = combineReducers({
  board: boardReducer
});

export default rootReducer;
