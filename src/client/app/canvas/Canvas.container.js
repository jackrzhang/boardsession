import { connect } from 'react-redux';
import { drawCircle } from './canvasActions';

import Canvas from './Canvas.view';

const mapDispatchToProps = dispatch => ({
  drawCircle: (x, y) => {
    dispatch(drawCircle(x, y));
  }
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(Canvas);
