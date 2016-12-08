export const CHANGE_COLOR = 'CHANGE_COLOR';

export const changeColor = color => ({
  type: CHANGE_COLOR,
  color
});

export const CHANGE_SIZE = 'CHANGE_SIZE';

export const changeSize = size => ({
  type: CHANGE_SIZE,
  size
});

export const CHANGE_MODE = 'CHANGE_MODE';

export const changeMode = mode => ({
  type: CHANGE_MODE,
  mode
});

export const CLEAR_POINTS = 'CLEAR_POINTS';

export const clearPoints = room => ({
  type: CLEAR_POINTS,
  room
});
