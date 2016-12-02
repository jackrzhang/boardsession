import { connectUser, disconnectUser } from './socketActions';
import generateName from 'sillyname';

const configureSocket = (socket, store) => {
  socket.on('connect', () => {
    const room = 'temp';
    const username = generateName();

    const data = { room, username };
    socket.emit('connectUser', data);

    store.dispatch(connectUser(username));
  });
};

export default configureSocket;
