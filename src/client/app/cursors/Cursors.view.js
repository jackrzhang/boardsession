import React, { Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import Cursor from './Cursor';

class Cursors extends Component {
  render() {
    return (
      <div>
        {this.props.displayedUsers.valueSeq().toArray().map(user => (
          <Cursor
            key={user.get('username')}
            username={user.get('username')}
            color={user.get('color')}
            x={user.get('x')}
            y={user.get('y')}
          />
        ))}
      </div>
    );
  }
}

Cursors.propTypes = {
  displayedUsers: ImmutablePropTypes.orderedMap.isRequired
};

export default Cursors;
