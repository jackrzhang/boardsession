import { store } from './index';

export const getPointData = (canvas, e) => {
  const markerState = store.getState().get('marker');
  const rect = canvas.getBoundingClientRect();

  return {
    size: markerState.get('size'),
    color: markerState.get('color'),
    isEndOfLine: !store.getState().get('board').get('isDrawing'),
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
};

export const redrawCanvas = (context) => {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);

  store.getState().get('points').forEach((point, i, points) => {
    context.beginPath();

    // ensure that point is NOT the start of a line
    const isStartOfLine = (i && points.get(i - 1).get('isEndOfLine'));
    if (!isStartOfLine) {
      context.moveTo(points.get(i - 1).get('x'), points.get(i - 1).get('y'));
    } else {
      context.moveTo(point.get('x') - 0.1, point.get('y') - 0.1);
    }
    context.lineTo(point.get('x'), point.get('y'));

    context.closePath();

    context.lineWidth = point.get('size');
    context.lineJoin = 'round';
    context.strokeStyle = point.get('color');
    context.stroke();
  });
};
