import React, { Component } from 'react';

import 'normalize.css';
import styles from './App.css';

import Canvas from './canvas/Canvas.container';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Canvas />
      </div>
    );
  }
}

export default App;
