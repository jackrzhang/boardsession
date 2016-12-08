import React, { Component, PropTypes } from 'react';
import styles from './Cursor.css';

class Cursor extends Component {
  constructor(props) {
    super(props);
    this.initials = props.username.match(/\b(\w)/g).join('');
  }

  render() {
    const dynamicStyles = {
      backgroundColor: this.props.color,
      top: this.props.y + 60,
      left: this.props.x
    };

    return (
      <div
        className={styles.cursor}
        style={dynamicStyles}
      >
        <div className={styles.cursorText}>{this.initials}</div>
      </div>
    );
  }
}

Cursor.propTypes = {
  username: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

export default Cursor;
