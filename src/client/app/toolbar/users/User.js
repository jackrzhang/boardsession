import React, { Component, PropTypes } from 'react';
import styles from './User.css';

class User extends Component {
  constructor(props) {
    super(props);
    this.initials = props.username.match(/\b(\w)/g).join('');
  }

  render() {
    return (
      <div
        style={{ backgroundColor: this.props.color }}
        className={styles.user}
      >
        {this.initials}
      </div>
    );
  }
}

User.propTypes = {
  username: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default User;
