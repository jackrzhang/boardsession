import React, { Component } from 'react';
import styles from './Color.css';

class Color extends Component {
  render() {
    return (
      <div className={styles.dropdown}>
        <button className={styles.dropdownButton}>Color</button>
        <div className={styles.dropdownContent}>
          <span
            className={`${styles.dropdownOption} ${styles.firstOption}`}
          >
            Color 1
          </span>
          <span
            className={styles.dropdownOption}
          >
            Color 2
          </span>
          <span
            className={`${styles.dropdownOption} ${styles.lastOption}`}
          >
            Color 3
          </span>
        </div>
      </div>
    );
  }
}

export default Color;
