export const START_DRAWING = 'START_DRAWING';

export const startDrawing = () => ({
  type: START_DRAWING
});

export const STOP_DRAWING = 'STOP_DRAWING';

export const stopDrawing = () => ({
  type: STOP_DRAWING
});

export const DRAW = 'DRAW';

export const draw = (marker, location) => ({
  type: DRAW,
  size: marker.size,
  color: marker.color,
  x: location.x,
  y: location.y
});
