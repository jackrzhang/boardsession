import { connect } from 'react-redux';
import Mode from './Mode.view';

import { changeMode } from './../toolbarActions';

const mapStateToProps = state => ({
  mode: state.get('marker').get('mode')
});

const mapDispatchToProps = dispatch => ({
  changeMode: (color) => {
    dispatch(changeMode(color));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mode);
