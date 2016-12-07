import React, { Component } from 'react';

import styles from './App.css';

import Toolbar from './toolbar/Toolbar.container';
import Canvas from './canvas/Canvas.container';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Toolbar />
        <div className={styles.canvasContainer}>
          <Canvas />
        </div>
      </div>
    );
  }
}

export default App;
