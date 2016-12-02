import { connectUser, disconnectUser } from './socketActions';

const configureSocket = (io, store) => {
  io.sockets.on('connection', (socket) => {
    socket.on('connectUser', (data) => {
      socket.join(data.room);
      store.dispatch(connectUser(data.username));
      console.log('connectUser', data);
    });
  });
};

export default configureSocket;
