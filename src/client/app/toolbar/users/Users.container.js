import { connect } from 'react-redux';
import Users from './Users.view';

const mapStateToProps = state => ({
  // all users except for the current client
  otherUsers: state.get('users').delete(state.get('board').get('userId'))
});

export default connect(
  mapStateToProps,
  () => ({})
)(Users);
