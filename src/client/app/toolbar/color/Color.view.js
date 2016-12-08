import React, { Component } from 'react';
import styles from './Color.css';

import {
  BLACK,
  PINK,
  RED,
  ORANGE,
  YELLOW,
  GREEN,
  BLUE,
  PURPLE,
  BROWN
} from './../../../../state/markerConstants';

class Color extends Component {
  render() {
    return (
      <div className={styles.dropdown}>
        <button className={styles.dropdownButton}>Color</button>
        <div className={styles.dropdownContent}>
          <span
            style={{ backgroundColor: BLACK }}
            className={`${styles.dropdownOption} ${styles.firstOption}`}
          >
            Black
          </span>
          <span
            style={{ backgroundColor: PINK }}
            className={styles.dropdownOption}
          >
            Pink
          </span>
          <span
            style={{ backgroundColor: RED }}
            className={styles.dropdownOption}
          >
            Red
          </span>
          <span
            style={{ backgroundColor: ORANGE }}
            className={styles.dropdownOption}
          >
            Orange
          </span>
          <span
            style={{ backgroundColor: YELLOW }}
            className={styles.dropdownOption}
          >
            Yellow
          </span>
          <span
            style={{ backgroundColor: GREEN }}
            className={styles.dropdownOption}
          >
            Green
          </span>
          <span
            style={{ backgroundColor: BLUE }}
            className={styles.dropdownOption}
          >
            Blue
          </span>
          <span
            style={{ backgroundColor: PURPLE }}
            className={styles.dropdownOption}
          >
            Purple
          </span>
          <span
            style={{ backgroundColor: BROWN }}
            className={`${styles.dropdownOption} ${styles.lastOption}`}
          >
            Brown
          </span>
        </div>
      </div>
    );
  }
}

export default Color;
