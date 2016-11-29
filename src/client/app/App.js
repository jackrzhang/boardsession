import React, { Component } from 'react';

import 'normalize.css';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <h1 className={styles.title}>BoardSession</h1>
        <h2 className={styles.subtitle}>
          Some catchy punchline with <b>nice</b>, <b>eloquent</b>
          , and <b>descriptive</b> adjectives.
        </h2>
      </div>
    );
  }
}

export default App;
