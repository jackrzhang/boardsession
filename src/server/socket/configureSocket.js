import {
  CONNECT_USER,
  connectUser,
  disconnectUser
} from './socketActions';

const configureSocket = (io, store) => {
  io.sockets.on('connection', (socket) => {
    socket.on(CONNECT_USER, (data) => {
      const { room, userId, username } = data;
      socket.join(room);

      const action = connectUser(userId, username);
      store.dispatch(action);

      socket.broadcast.emit('action', action);
    });

    socket.on('disconnect', () => {
      const userId = socket.id;

      const action = disconnectUser(userId);
      store.dispatch(action);

      socket.broadcast.emit('action', action);
    });
  });
};

export default configureSocket;
