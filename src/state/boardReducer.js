import { Map } from 'immutable';

import { START_LINE, END_LINE } from './../client/app/canvas/canvasActions';
import { CONNECT_USER } from './../client/socket/socketActions';

export const initialBoard = Map({
  room: window.location.pathname.split('/')[2],
  userId: null,
  isDrawing: false
});

const boardReducer = (state = initialBoard, action) => {
  switch (action.type) {
    case START_LINE:
      return state.set('isDrawing', true);
    case END_LINE:
      return state.set('isDrawing', false);
    case CONNECT_USER:
      return state.get('userId') === null ?
        state.set('userId', action.userId) :
        state;
    default:
      return state;
  }
};

export default boardReducer;
