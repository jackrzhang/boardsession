import React, { Component, PropTypes } from 'react';

class Cursor extends Component {
  constructor(props) {
    super(props);
    this.initials = props.username.match(/\b(\w)/g).join('');
  }

  render() {
    const styles = {
      position: 'absolute',
      'z-index': '100px',
      height: '25px',
      width: '25px',
      color: 'white',
      backgroundColor: 'red',
      top: this.props.y + 60,
      left: this.props.x
    };

    return (
      <div
        style={styles}
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
