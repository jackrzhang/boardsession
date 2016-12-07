export const CONNECT_USER = 'CONNECT_USER';

export const connectUser = (room, userId, username, color) => ({
  type: CONNECT_USER,
  room,
  userId,
  username,
  color
});
