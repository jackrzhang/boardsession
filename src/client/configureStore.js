import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './../state/rootReducer.client';

import { persistState } from 'redux-devtools';
import DevTools from './DevTools';

import createSocketMiddleware from './socket/createSocketMiddleware';
import socket from './socket/socket';
const socketMiddleware = createSocketMiddleware(socket);

const getDebugSessionKey = () => {
  const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
};

let enhancer;
if (process.env.NODE_ENV === 'development') {
  enhancer = compose(
    applyMiddleware(socketMiddleware),
    DevTools.instrument({
      maxAge: 50,
      shouldCatchErrors: true
    }),
    persistState(getDebugSessionKey())
  );
} else {
  enhancer = applyMiddleware(socketMiddleware);
}

const configureStore = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  );

  if (module.hot) {
    module.hot.accept('./../state/rootReducer.client', () => {
      const nextRootReducer = require('./../state/rootReducer.client').default; // eslint-disable-line
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
