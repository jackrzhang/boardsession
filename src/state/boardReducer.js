import { Map } from 'immutable';

import {
  START_LINE,
  END_LINE
} from './../client/app/canvas/canvasActions';

export const initialBoard = Map({
  isDrawing: false
});

const boardReducer = (state = initialBoard, action) => {
  switch (action.type) {
    case START_LINE:
      return state.set('isDrawing', true);
    case END_LINE:
      return state.set('isDrawing', false);
    default:
      return state;
  }
};

export default boardReducer;
