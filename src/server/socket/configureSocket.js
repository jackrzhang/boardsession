import {
  connectUser,
  disconnectUser,
  synchronize,
} from './socketActions';

const configureSocket = (io, store) => {
  io.sockets.on('connection', (socket) => {
    socket.on('connectUser', (data) => {
      const { room, userId, username } = data;
      socket.join(room);

      const action = connectUser(room, userId, username);
      store.dispatch(action);

      socket.broadcast.emit('action', action);
    });

    socket.on('requestSynchronize', () => {
      const action = synchronize(
        store.getState().get('users'),
        store.getState().get('points')
      );
      socket.emit('action', action);
    });

    socket.on('disconnect', () => {
      const userId = socket.id;

      const action = disconnectUser(userId);
      store.dispatch(action);

      socket.broadcast.emit('action', action);
    });

    // ADD_POINT from client
    socket.on('action', (action) => {
      store.dispatch(action);
      socket.broadcast.emit('action', action);
    });
  });
};

export default configureSocket;
