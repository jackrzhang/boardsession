import { connect } from 'react-redux';
import Cursors from './Cursors.view';

const mapStateToProps = state => ({
  user: state.get('board').get('user'),
  cursors: state.get('users')
});

export default connect(
  mapStateToProps,
  () => ({})
)(Cursors);
