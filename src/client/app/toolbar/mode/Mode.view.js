import React, { Component } from 'react';
import styles from './Mode.css';

class Mode extends Component {
  render() {
    return (
      <div className={styles.dropdown}>
        <button className={styles.dropdownButton}>Mode</button>
        <div className={styles.dropdownContent}>
          <span
            className={`${styles.dropdownOption} ${styles.firstOption}`}
          >
            Draw
          </span>
          <span
            className={`${styles.dropdownOption} ${styles.lastOption}`}
          >
            Erase
          </span>
        </div>
      </div>
    );
  }
}

export default Mode;
