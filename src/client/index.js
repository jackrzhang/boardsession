/* eslint-disable react/no-multi-comp */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import DevTools from './DevTools';

import { Provider } from 'react-redux';
import configureStore from './configureStore';
export const store = configureStore();

import configureSocket from './socket/configureSocket';
import socket from './socket/socket';

class DevRoot extends Component {
  componentDidMount() {
    configureSocket(socket, store);
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <App />
          <DevTools />
        </div>
      </Provider>
    );
  }
}

class ProdRoot extends Component {
  componentDidMount() {
    configureSocket(socket, store);
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

if (process.env.NODE_ENV === 'development') {
  ReactDOM.render(
    <DevRoot />,
    document.getElementById('root')
  );
} else {
  ReactDOM.render(
    <ProdRoot />,
    document.getElementById('root')
  );
}
