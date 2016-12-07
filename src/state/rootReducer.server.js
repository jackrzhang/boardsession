import { Map } from 'immutable';

import { CREATE_ROOM } from './../server/http/httpActions';
import { CONNECT_USER } from './../client/socket/socketActions';
import { SYNCHRONIZE, DISCONNECT_USER } from './../server/socket/socketActions';
import { ADD_POINT, UPDATE_USER_LOCATION } from './../client/app/canvas/canvasActions';

import { combineReducers } from 'redux-immutable';
import pointsReducer from './pointsReducer';
import usersReducer from './usersReducer';

const roomReducer = combineReducers({
  points: pointsReducer,
  users: usersReducer
});

// Server state is a Map of the states for all individual rooms
const initialState = Map();

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ROOM:
      return state.set(action.room, roomReducer(undefined, action));
    case CONNECT_USER:
      return state.set(action.room, roomReducer(state.get(action.room), action));
    case DISCONNECT_USER:
      return state.set(action.room, roomReducer(state.get(action.room), action));
    case SYNCHRONIZE:
      return state.set(action.room, roomReducer(state.get(action.room), action));
    case ADD_POINT:
      return state.set(action.room, roomReducer(state.get(action.room), action));
    case UPDATE_USER_LOCATION:
      return state.set(action.room, roomReducer(state.get(action.room), action));
    default:
      return state;
  }
};

export default rootReducer;
