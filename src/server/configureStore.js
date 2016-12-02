// Server-side Redux Store

import { createStore } from 'redux';
import rootReducer from './../state/rootReducer.server';

const configureStore = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState
  );

  return store;
};

export default configureStore;
