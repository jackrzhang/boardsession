import { Map } from 'immutable';

import {
  THICKNESS_2,
  BLACK
} from './markerConstants';

export const initialMarker = Map({
  radius: THICKNESS_2,
  color: BLACK
});

const markerReducer = (state = initialMarker, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default markerReducer;
