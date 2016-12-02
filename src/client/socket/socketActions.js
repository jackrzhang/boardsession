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

export const RECEIVE_POINT = 'RECEIVE_POINT';

export const receivePoint = pointData => ({
  type: RECEIVE_POINT,
  size: pointData.size,
  color: pointData.color,
  isEndOfLine: pointData.isEndOfLine,
  x: pointData.x,
  y: pointData.y
});
