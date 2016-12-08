import React, { PropTypes, Component } from 'react';
import styles from './Clear.css';

class Clear extends Component {
  render() {
    return (
      <button
        onClick={this.props.clearPoints}
        className={styles.button}
      >
        CLEAR
      </button>
    );
  }
}

Clear.propTypes = {
  clearPoints: PropTypes.func.isRequired
};

export default Clear;
