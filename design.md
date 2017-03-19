# Design

While I do not intend to explain all of the minutia of the code, I hope that this document provides enough context 
to understand my design decisions and further explore other aspects of the project through outside resources.

## Tech Stack

### Web Sockets
At the core of the real-time collaboration of boardsession is event-driven, bidirectional communication between the client(s)
and server. WebSockets, by opening interactive communication sessions, are far more efficient and
lightweight than communicating all session udpates through HTTP or a RESTful API. Through the latter method, 
clients would have to constantly poll the server for updates and report any new changes through POST requests. This would 
both place an unnecessarily heavy load on the server and limit the real-time capabilities of the application to the rate of polling.
See
[socket.io](http://socket.io/).

### React
React deals with only the view layer. It is incredibly performant - it utilizes structural sharing to compute a Virtual DOM and avoid re-rendering parts of the actual DOM that have
not changed. React's key benefit is component-based design. React components describe any composable behavior
corresponding with a defined portion of the DOM, including rendering, lifecycle, and local state.

### Redux
Redux is a 'predictable state container' for JavaScript apps. Using redux applies some pretty strong constraints - application state
must be described as a single object, changes to state must be described as objects (actions), and all logic for handling
changes to state must be described as *pure functions* (reducers). However, in implementing collaborative environments like boardsession, adopting
Redux's separation of concerns is incredibly appropriate. Action objects, as minimal representations of changes to state, can
be simply passed over the network, and significant portions of logic - in particular, the reducers - can be reused by both the
client and server. Synchronization also becomes really simple: clients just receive the state from the server,
and UI will update correspondingly. Plus, Redux enables a really nice developer experience.

### Immutable
By using Redux, the entire application must embrace immutability. Immutable.js allows this to be performant. By utilizing
structural sharing via tries, Immutable.js enables efficient memoization and change-detection through a simple API. It's kind of like
React's Virtual DOM, except for persistent data structures. In boardsession, the action of adding a point while drawing demonstrates Immutable's
performance benefits - with a plain JavaScript array, the reducer would need to produce the new state by deeply copying
hundreds of point objects into a new array, a linear time operation. With Immutable, this becomes a really fast log(n) operation.

### Node.js
Node.js is a JS runtime-environment. That being said, the asynchronous, event-based programming model of JavaScript is 
optimal for socket communication. On top of using socket.io, Express provides a lightweight framework for 
building out the rest of the web application - mainly handling HTTP requests and serving static assets (the landing page).

## Design Patterns
These apply specifically to the client-side code in `src/client/`.
### Directory Structure
Small projects usually utilize a flat directory structure, with folders for `actions`, `components`, etc - files are organized by *nature*. For React + Redux applications, this looks something like this:
```
src/
  actions/
  components/
  constants/
  containers/
  reducers/
  stores/
  index.js
```
However, this does not scale, and eventually makes refactoring a pain. I instead chose to use a [fractal](https://en.wikipedia.org/wiki/Fractal) [project structure](https://github.com/davezuko/react-redux-starter-kit/wiki/Fractal-Project-Structure) - grouping files by *domain* over *nature*. Large applications grow more naturally with this architecture, like large trees 
To distinguish between file natures (e.g. actions, containers, views), I just used [file suffixes](#file-naming).
```
src/
  app/
    counter/
      Counter.view.js
      Counter.css
      Counter.container.js
      counterActions.js
    App.js
    App.css
  state/
    counterReducer.js
    rootReducer.js
```
The exception to this is the redux store; the structure of the application state often doesn't coincide with the organization of your UI. Thus, I kept all reducers and state-related logic in a top-level `state` directory.

### Presentational and Container Components
A useful pattern in separating UI concerns with React & Redux is to distinguish between as *presentational (view) components* and *containers*. There's a [great explanation](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.4kkynm5l1) of this, but here's the general rundowm:

#### Presentational Components:
* Are concerned with *how things look*
* Ideally, render as pure functions of React state/props
* Have no dependencies on the rest of the app - they know **nothing** about Redux actions or state
```jsx
/* Counter.view.js */

import React, { PropTypes } from 'react';
import styles from './Counter.css';

const Counter = props => {
  const { count, add, subtract } = props;
  return (
    <div className={styles.counter}>
      <span className={styles.count}>{props.count}</span>
      <button className={styles.button} onClick={props.add}>Add</button>
      <button className={styles.button} onClick={props.subtract}>Subtract</button>
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  add: PropTypes.func.isRequired,
  subtract: PropTypes.func.isRequired
};

export default Counter;
```

#### Container Components
* Are concerned with *how things work*
* Provide an interface for presentational components to interact with Flux state and actions
* Are usually generated using higher-order components; in this case, with Redux's `connect`
```jsx
/* Counter.container.js */

import { connect } from 'react-redux';
import { add, subtract } from './counterActions';
import Counter from './Counter.view';

const mapStateToProps = state => ({
  count: state.counter
});

const mapDispatchToProps = dispatch => ({
  add: () => {
    dispatch(add());
  },
  subtract: () => {
    dispatch(subtract());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
```

Components don't have to emit DOM.

### File Naming
I used the following suffixes:

File Nature | Description | Example
--- | --- | ---
Presentational | `*.view.js` | `Counter.view.js`
CSS Module | `*.css` | `Counter.css`
Container | `*.container.js` | `Counter.container.js`
Actions | `*Actions.js` | `counterActions.js`
Reducer | `*Reducer.js` | `counterReducer.js`
Spec | `*.spec.js` |`counterActions.spec.js`, `counterReducer.spec.js`, `Counter.view.spec.js`
