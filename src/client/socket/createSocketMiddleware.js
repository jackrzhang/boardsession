const createSocketMiddleware = (socket) => {
  const socketMiddleware = (store) => next => (action) => {
    if (action.socket && store.getState().get('board').get('userId') === action.userId) {
      socket.emit('action', action);
    }

    return next(action);
  };

  return socketMiddleware;
};

export default createSocketMiddleware;
