import React, { Component } from 'react';

import 'normalize.css';
import styles from './App.css';

import Toolbar from './toolbar/Toolbar.container';
import Canvas from './canvas/Canvas.container';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Toolbar />
        <Canvas />
      </div>
    );
  }
}

export default App;
