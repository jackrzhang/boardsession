import { List, Map } from 'immutable';
import { WHITE } from './markerConstants';

export const initialPoints = Map();

import { ADD_POINT } from './../client/app/canvas/canvasActions';
import { CONNECT_USER } from './../client/socket/socketActions';

const pointsReducer = (state = initialPoints, action) => {
  switch (action.type) {
    case CONNECT_USER:
      return state.set(action.userId, List([
        Map({
          size: 0,
          color: WHITE,
          isEndOfLine: true,
          x: 0,
          y: 0
        })
      ]));
    case ADD_POINT:
      return state.set(action.userId, state.get(action.userId).push(
        Map({
          size: action.size,
          color: action.color,
          isEndOfLine: action.isEndOfLine,
          x: action.x,
          y: action.y
        })
      ));
    default:
      return state;
  }
};

export default pointsReducer;
