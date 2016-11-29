import { connect } from 'react-redux';
import {
  startDrawing,
  stopDrawing,
  draw
} from './canvasActions';

import Canvas from './Canvas.view';

const mapStateToProps = state => ({
  isDrawing: state.get('isDrawing')
});

const mapDispatchToProps = dispatch => ({
  startDrawing: () => {
    dispatch(startDrawing());
  },
  stopDrawing: () => {
    dispatch(stopDrawing());
  },
  draw: (x, y) => {
    dispatch(draw(x, y));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas);
