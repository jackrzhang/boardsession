import { Map } from 'immutable';

import {
  BLACK,
  SIZE_3,
  DRAW
} from './markerConstants';

export const initialMarker = Map({
  color: BLACK,
  size: SIZE_3,
  mode: DRAW
});

import {
  CHANGE_COLOR,
  CHANGE_SIZE,
  CHANGE_MODE
} from './../../src/client/app/toolbar/toolbarActions';

const markerReducer = (state = initialMarker, action) => {
  switch (action.type) {
    case CHANGE_COLOR:
      return state.set('color', action.color);
    case CHANGE_SIZE:
      return state.set('size', action.size);
    case CHANGE_MODE:
      return state.set('size', action.size);
    default:
      return state;
  }
};

export default markerReducer;
