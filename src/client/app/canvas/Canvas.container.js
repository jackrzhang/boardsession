import { connect } from 'react-redux';
import {
  startDrawing,
  stopDrawing,
  draw
} from './canvasActions';

import Canvas from './Canvas.view';

/*
NOTE: only actions creators are provided to the Canvas component.
Functionality and state associated with drawing through the HTML5 Canvas API
is implemented using a reference to the Redux store (from app/index.js)
*/

const mapDispatchToProps = dispatch => ({
  startDrawing: () => {
    dispatch(startDrawing());
  },
  stopDrawing: () => {
    dispatch(stopDrawing());
  },
  draw: (marker, location) => {
    dispatch(draw(marker, location));
  }
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(Canvas);
