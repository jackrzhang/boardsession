import { connect } from 'react-redux';
import Size from './Size.view';

import { changeSize } from './../toolbarActions';

const mapStateToProps = state => ({
  size: state.get('marker').get('size')
});

const mapDispatchToProps = dispatch => ({
  changeSize: (size) => {
    dispatch(changeSize(size));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Size);
