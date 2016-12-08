import { connectUser } from './socketActions';
import { SYNCHRONIZE } from './../../server/socket/socketActions';
import { ADD_POINT } from './../app/canvas/canvasActions';

import { redrawCanvas } from './../canvasHelpers';
import generateName from 'sillyname';
import randomcolor from 'randomcolor';

const configureSocket = (socket, store) => {
  socket.on('connect', () => {
    const room = store.getState().get('board').get('room');
    const userId = socket.id;
    const username = generateName();
    const color = randomcolor({ luminosity: 'dark', format: 'rgb' });

    const action = connectUser(room, userId, username, color);
    store.dispatch(action);

    // emit connection status, synchronize all prior users and points
    const data = { room, userId, username, color };
    socket.emit('connectUser', data);
    socket.emit('requestSynchronize', data);
  });

  // SYNCHRONIZE, CONNECT_USER, DISCONNECT_USER, ADD_POINT, CLEAR_POINTS,
  // UPDATE_USER_LOCATION from server
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
