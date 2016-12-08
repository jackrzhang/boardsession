import { Map } from 'immutable';

import {
  SIZE_3,
  BLACK
} from './markerConstants';

export const initialMarker = Map({
  size: SIZE_3,
  color: BLACK
});

import { CHANGE_COLOR, CHANGE_SIZE } from './../../src/client/app/toolbar/toolbarActions';

const markerReducer = (state = initialMarker, action) => {
  switch (action.type) {
    case CHANGE_COLOR:
      return state.set('color', action.color);
    case CHANGE_SIZE:
      return state.set('size', action.size);
    default:
      return state;
  }
};

export default markerReducer;
