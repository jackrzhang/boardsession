// Server-side Redux Store
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './../state/rootReducer.server';

// Simple logger middleware, logs all actions after are dispatched.
const logger = () => next => (action) => {
  console.info('Dispatching:', action);
  const result = next(action);
  return result;
};

let enhancer;
if (process.env.NODE_ENV === 'development') {
  enhancer = applyMiddleware(logger);
} else {
  enhancer = applyMiddleware();
}

const configureStore = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  );

  return store;
};

export default configureStore;
