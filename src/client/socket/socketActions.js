export const CONNECT_USER = 'CONNECT_USER';

export const connectUser = (room, userId, username) => ({
  type: CONNECT_USER,
  room,
  userId,
  username
});

