import React, { Component } from 'react';
import styles from './Toolbar.css';

import Color from './color/Color.container';

class Toolbar extends Component {
  render() {
    return (
      <div className={styles.toolbar}>
        <span className={styles.alignLeft}>
          <Color />

          {/* Size */}
          <div className={styles.dropdown}>
            <button className={styles.dropdownButton}>Size</button>
            <div className={styles.dropdownContent}>
              <span
                className={styles.dropdownOption}
              >
                Color 1
              </span>
              <span
                className={styles.dropdownOption}
              >
                Color
              </span>
              <span
                className={styles.dropdownOption}
              >
                Color 3
              </span>
            </div>
          </div>

        </span>
        <span className={styles.alignRight}>
          TEST
        </span>
      </div>
    );
  }
}

export default Toolbar;
