import { connect } from 'react-redux';
import {
  startLine,
  endLine,
  addPoint
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
  addPoint: (pointData) => {
    dispatch(addPoint(pointData));
  }
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(Canvas);
