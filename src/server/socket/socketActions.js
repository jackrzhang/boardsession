export const CONNECT_USER = 'CONNECT_USER';

export const connectUser = (room, userId, username, color) => ({
  type: CONNECT_USER,
  room,
  userId,
  username,
  color
});

export const DISCONNECT_USER = 'DISCONNECT_USER';

export const disconnectUser = (room, userId) => ({
  type: DISCONNECT_USER,
  room,
  userId
});

export const SYNCHRONIZE = 'SYNCHRONIZE';

export const synchronize = (users, points) => ({
  type: SYNCHRONIZE,
  users,
  points
});
