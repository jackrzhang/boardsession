export const START_LINE = 'START_LINE';

export const startLine = () => ({
  type: START_LINE
});

export const END_LINE = 'END_LINE';

export const endLine = () => ({
  type: END_LINE
});

export const DRAW_POINT = 'DRAW_POINT';

export const drawPoint = pointData => ({
  type: DRAW_POINT,
  size: pointData.size,
  color: pointData.color,
  isEndOfLine: pointData.isEndOfLine,
  x: pointData.x,
  y: pointData.y
});
