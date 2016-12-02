export const CONNECT_USER = 'CONNECT_USER';

export const connectUser = username => ({
  type: CONNECT_USER,
  username
});

export const DISCONNECT_USER = 'DISCONNECT_USER';

export const disconnectUser = username => ({
  type: DISCONNECT_USER,
  username
});
