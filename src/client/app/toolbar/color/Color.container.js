import { connect } from 'react-redux';
import Color from './Color.view';

import { changeColor } from './../toolbarActions';

const mapStateToProps = state => ({
  color: state.get('marker').get('color')
});

const mapDispatchToProps = dispatch => ({
  changeColor: (color) => {
    dispatch(changeColor(color));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Color);
