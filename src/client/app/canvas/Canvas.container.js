import { connect } from 'react-redux';
import { draw } from './canvasActions';

import Canvas from './Canvas.view';

const mapStateToProps = state => ({
  isDrawing: state
});

const mapDispatchToProps = dispatch => ({
  draw: (x, y) => {
    dispatch(draw(x, y));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas);
