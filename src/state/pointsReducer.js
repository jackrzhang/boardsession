import { List, Map } from 'immutable';

export const initialPoints = List();

import { ADD_POINT } from './../client/app/canvas/canvasActions';

const pointsReducer = (state = initialPoints, action) => {
  switch (action.type) {
    case ADD_POINT:
      return state.push(Map({
        size: action.size,
        color: action.color,
        x: action.x,
        y: action.y
      }));
    default:
      return state;
  }
};

export default pointsReducer;
