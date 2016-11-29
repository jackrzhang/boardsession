import { Map, List } from 'immutable';

import {
  START_DRAWING,
  STOP_DRAWING
} from './../client/app/canvas/canvasActions';

export const initialBoard = Map({
  isDrawing: false
});

const boardReducer = (state = initialBoard, action) => {
  switch (action.type) {
    case START_DRAWING:
      return state.set('isDrawing', true);
    case STOP_DRAWING:
      return state.set('isDrawing', false);
    default:
      return state;
  }
};

export default boardReducer;
