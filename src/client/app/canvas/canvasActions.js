export const START_LINE = 'START_LINE';

export const startLine = () => ({
  type: START_LINE
});

export const END_LINE = 'END_LINE';

export const endLine = () => ({
  type: END_LINE
});

export const ADD_POINT = 'ADD_POINT';

export const addPoint = pointData => ({
  type: ADD_POINT,
  room: pointData.room,
  userId: pointData.userId,
  size: pointData.size,
  color: pointData.color,
  isEndOfLine: pointData.isEndOfLine,
  x: pointData.x,
  y: pointData.y
});

export const UPDATE_USER_LOCATION = 'UPDATE_USER_LOCATION';

export const updateUserLocation = (pointData) => ({
  type: UPDATE_USER_LOCATION,
  room: pointData.room,
  userId: pointData.userId,
  x: pointData.x,
  y: pointData.y
});
