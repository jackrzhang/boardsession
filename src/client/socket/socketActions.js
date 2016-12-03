export const CONNECT_USER = 'CONNECT_USER';

export const connectUser = (userId, username) => ({
  type: CONNECT_USER,
  userId,
  username
});

export const DISCONNECT_USER = 'DISCONNECT_USER';

export const disconnectUser = userId => ({
  type: DISCONNECT_USER,
  userId
});
