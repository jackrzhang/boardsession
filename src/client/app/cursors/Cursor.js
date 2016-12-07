import React, { Component, PropTypes } from 'react';
import styles from './Cursor.css';

class Cursor extends Component {
  constructor(props) {
    super(props);
    this.initials = props.username.match(/\b(\w)/g).join('');
  }

  render() {
    return (
      <div
        className={styles.cursor}
      >
        {this.initials}
      </div>
    );
  }
}

Cursor.propTypes = {
  username: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

export default Cursor;
