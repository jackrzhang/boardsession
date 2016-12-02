import { connect } from 'react-redux';
import {
  startLine,
  endLine,
  drawPoint
} from './canvasActions';

import Canvas from './Canvas.view';

/*
NOTE: only action dispatchers are provided to the Canvas component.
Functionality and state associated with drawing through the HTML5 Canvas API
is implemented using a reference to the Redux store (from app/index.js)
*/

const mapDispatchToProps = dispatch => ({
  startLine: () => {
    dispatch(startLine());
  },
  endLine: () => {
    dispatch(endLine());
  },
  drawPoint: (pointData) => {
    dispatch(drawPoint(pointData));
  }
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(Canvas);
