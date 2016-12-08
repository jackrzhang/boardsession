import { connect } from 'react-redux';
import Clear from './Clear.view';

import { clearPoints } from './../toolbarActions';
import { socket } from './../../../index';

const mapDispatchToProps = dispatch => ({
  clearPoints: () => {
    const action = clearPoints();
    socket.emit('action', action);
    dispatch(action);
  }
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(Clear);
