import { connect } from 'react-redux';
import Users from './Users.view';

const mapStateToProps = state => ({
  users: state.get('users')
});

export default connect(
  mapStateToProps,
  () => ({})
)(Users);
