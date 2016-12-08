import React, { Component } from 'react';
import styles from './Toolbar.css';

import Color from './color/Color.container';
import Size from './size/Size.container';
import Mode from './mode/Mode.container';
import Clear from './clear/Clear.container';

class Toolbar extends Component {
  render() {
    return (
      <div className={styles.toolbar}>
        <span className={styles.alignLeft}>
          <Color />
          <Size />
          <Mode />
          <Clear />
        </span>
        <span className={styles.alignRight}>
          TEST
        </span>
      </div>
    );
  }
}

export default Toolbar;
