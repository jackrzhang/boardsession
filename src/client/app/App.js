import React, { Component } from 'react';

import styles from './App.css';

import Toolbar from './toolbar/Toolbar.container';
import Canvas from './canvas/Canvas.container';
import Cursors from './cursors/Cursor.container';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Toolbar />
        <Cursors />
        <Canvas />
      </div>
    );
  }
}

export default App;
