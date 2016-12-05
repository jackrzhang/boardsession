import { connectUser } from './socketActions';
import { SYNCHRONIZE } from './../../server/socket/socketActions';
import { ADD_POINT } from './../app/canvas/canvasActions';

import { redrawCanvas } from './../canvasHelpers';
import generateName from 'sillyname';

const configureSocket = (socket, store) => {
  socket.on('connect', () => {
    const room = 'temp'; // from window
    const userId = socket.id;
    const username = generateName();

    const action = connectUser(userId, username);
    store.dispatch(action);

    const data = { room, userId, username };
    socket.emit('connectUser', data);

    // synchronize all prior users and points
    socket.emit('requestSynchronize', userId);
  });

  // SYNCHRONIZE, CONNECT_USER, DISCONNECT_USER, ADD_POINT from server
  socket.on('action', (action) => {
    store.dispatch(action);

    const context = document.getElementById('canvas').getContext('2d');
    if (action.type === SYNCHRONIZE ||
        action.type === ADD_POINT) {
      redrawCanvas(context);
    }
  });
};

export default configureSocket;
