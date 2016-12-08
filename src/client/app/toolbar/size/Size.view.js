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
            Size 1
          </span>
          <span
            className={styles.dropdownOption}
          >
            Size 2
          </span>
          <span
            className={`${styles.dropdownOption} ${styles.lastOption}`}
          >
            Size 3
          </span>
        </div>
      </div>
    );
  }
}

export default Size;
