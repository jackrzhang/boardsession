import React, { PropTypes, Component } from 'react';
import styles from './Mode.css';

import { DRAW, ERASE } from './../../../../state/markerConstants';

class Mode extends Component {
  constructor(props) {
    super(props);
    this.changeModeToDraw = props.changeMode.bind(null, DRAW);
    this.changeModeToErase = props.changeMode.bind(null, ERASE);
  }

  render() {
    return (
      <div className={styles.dropdown}>
        <button className={styles.dropdownButton}>{this.props.mode}</button>
        <div className={styles.dropdownContent}>
          <span
            onClick={this.changeModeToDraw}
            className={`${styles.dropdownOption} ${styles.firstOption}`}
          >
            {DRAW}
          </span>
          <span
            onClick={this.changeModeToErase}
            className={`${styles.dropdownOption} ${styles.lastOption}`}
          >
            {ERASE}
          </span>
        </div>
      </div>
    );
  }
}

Mode.propTypes = {
  mode: PropTypes.string.isRequired,
  changeMode: PropTypes.func.isRequired
};

export default Mode;
