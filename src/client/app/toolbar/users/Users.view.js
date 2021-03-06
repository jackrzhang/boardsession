import React, { Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import User from './User';

class Users extends Component {
  render() {
    return (
      <div>
        {this.props.otherUsers.valueSeq().toArray().map(user => (
          <User
            key={user.get('username')}
            username={user.get('username')}
            color={user.get('color')}
          />
        ))}
      </div>
    );
  }
}

Users.propTypes = {
  otherUsers: ImmutablePropTypes.orderedMap.isRequired
};

export default Users;
