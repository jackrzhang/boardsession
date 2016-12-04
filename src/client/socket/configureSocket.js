import {
  CONNECT_USER,
  connectUser
} from './socketActions';

import generateName from 'sillyname';

const configureSocket = (socket, store) => {
  socket.on('connect', () => {
    const room = 'temp'; // from window
    const userId = socket.id;
    const username = generateName();

    const data = { room, userId, username };
    socket.emit(CONNECT_USER, data);

    const action = connectUser(userId, username);
    store.dispatch(action);
  });

  // SYNCHRONIZE, CONNECT_USER, DISCONNECT_USER from server
  socket.on('action', (action) => {
    store.dispatch(action);
  });
};

export default configureSocket;
