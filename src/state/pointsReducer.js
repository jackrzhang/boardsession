import { List, Map } from 'immutable';
import { THICKNESS_2, WHITE } from './markerConstants';

// initialize with first empty point
export const initialPoints = List.of(
  Map({
    size: 0,
    color: WHITE,
    isEndOfLine: true,
    x: 0,
    y: 0
  })
);

import { ADD_POINT } from './../client/app/canvas/canvasActions';

const pointsReducer = (state = initialPoints, action) => {
  switch (action.type) {
    case ADD_POINT:
      return state.push(Map({
        size: action.size,
        color: action.color,
        isEndOfLine: action.isEndOfLine,
        x: action.x,
        y: action.y
      }));
    default:
      return state;
  }
};

export default pointsReducer;
