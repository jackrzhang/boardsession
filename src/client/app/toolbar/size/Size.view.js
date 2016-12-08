import React, { Component, PropTypes } from 'react';
import styles from './Size.css';

import {
  SIZE_1,
  SIZE_2,
  SIZE_3,
  SIZE_4,
  SIZE_5
} from './../../../../state/markerConstants';

class Size extends Component {
  constructor(props) {
    super(props);
    this.changeSizeTo1 = props.changeSize.bind(null, SIZE_1);
    this.changeSizeTo2 = props.changeSize.bind(null, SIZE_2);
    this.changeSizeTo3 = props.changeSize.bind(null, SIZE_3);
    this.changeSizeTo4 = props.changeSize.bind(null, SIZE_4);
    this.changeSizeTo5 = props.changeSize.bind(null, SIZE_5);
  }

  render() {
    return (
      <div className={styles.dropdown}>
        <button className={styles.dropdownButton}>
          Size: <span className={styles.sizeOffset}>{this.props.size}</span>
        </button>
        <div className={styles.dropdownContent}>
          <span
            onClick={this.changeSizeTo1}
            className={`${styles.dropdownOption} ${styles.firstOption}`}
          >
            {SIZE_1}
          </span>
          <span
            onClick={this.changeSizeTo2}
            className={styles.dropdownOption}
          >
            {SIZE_2}
          </span>
          <span
            onClick={this.changeSizeTo3}
            className={styles.dropdownOption}
          >
            {SIZE_3}
          </span>
          <span
            onClick={this.changeSizeTo4}
            className={styles.dropdownOption}
          >
            {SIZE_4}
          </span>
          <span
            onClick={this.changeSizeTo5}
            className={`${styles.dropdownOption} ${styles.lastOption}`}
          >
            {SIZE_5}
          </span>
        </div>
      </div>
    );
  }
}

Size.propTypes = {
  size: PropTypes.number.isRequired,
  changeSize: PropTypes.func.isRequired
};

export default Size;
