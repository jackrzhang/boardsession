import { Map } from 'immutable';

import {
  SIZE_3,
  BLACK
} from './markerConstants';

export const initialMarker = Map({
  size: SIZE_3,
  color: BLACK
});

const markerReducer = (state = initialMarker, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default markerReducer;
