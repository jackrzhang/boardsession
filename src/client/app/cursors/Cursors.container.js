import { connect } from 'react-redux';
import Cursors from './Cursors.view';

const mapStateToProps = state => ({
  // all users except for the current client
  displayedUsers: state.get('users').delete(state.get('board').get('user'))
});

export default connect(
  mapStateToProps,
  () => ({})
)(Cursors);
