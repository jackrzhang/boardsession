const configureSocket = (socket) => {
  socket.on('connect', () => {
    // emit new user action for this particular room
    const room = 'temp'; // based on generated window location
    socket.emit('room', room);
  });

  socket.on('message', (data) => {
    console.log('Incoming message:', data);
  });
};

export default configureSocket;
