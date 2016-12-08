import React, { Component } from 'react';
import styles from './Size.css';

class Size extends Component {
  render() {
    return (
      <div className={styles.dropdown}>
        <button className={styles.dropdownButton}>Size</button>
        <div className={styles.dropdownContent}>
          <span
            className={`${styles.dropdownOption} ${styles.firstOption}`}
          >
            1
          </span>
          <span
            className={styles.dropdownOption}
          >
            2
          </span>
          <span
            className={`${styles.dropdownOption} ${styles.lastOption}`}
          >
            5
          </span>
        </div>
      </div>
    );
  }
}

export default Size;
