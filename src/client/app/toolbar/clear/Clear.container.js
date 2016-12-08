import { connect } from 'react-redux';
import Clear from './Clear.view';

import { clearPoints } from './../toolbarActions';
import { store, socket } from './../../../index';
import { redrawCanvas } from './../../../canvasHelpers';

const mapDispatchToProps = dispatch => ({
  clearPoints: () => {
    const action = clearPoints(store.getState().get('board').get('room'));
    dispatch(action);
    socket.emit('action', action);
    redrawCanvas(document.getElementById('canvas').getContext('2d'));
  }
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(Clear);
