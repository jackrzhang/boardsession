import store from './../../index';

const getPointData = (canvas, e) => {
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

// Drawing Functionality
const redrawCanvas = (context) => {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);

  store.getState().get('points').forEach((point, i, points) => {
    context.beginPath();

    // ensure that point is NOT the start of a line
    const isStartOfLine = (i && points.get(i - 1).get('isEndOfLine'));
    if (!isStartOfLine) {
      context.moveTo(points.get(i - 1).get('x'), points.get(i - 1).get('y'));
    } else {
      context.moveTo(point.get('x') - 1, point.get('y'));
    }
    context.lineTo(point.get('x'), point.get('y'));

    context.closePath();

    context.lineWidth = point.get('size');
    context.lineJoin = 'round';
    context.strokeStyle = point.get('color');
    context.stroke();
  });
};

// Event Handlers
export const handleMouseDown = (canvas, startLine, addPoint) => {
  const context = canvas.getContext('2d');

  canvas.addEventListener('mousedown', (e) => {
    startLine();

    const pointData = getPointData(canvas, e);
    addPoint(pointData);

    redrawCanvas(context);
  }, false);
};

export const handleMouseUp = (canvas, endLine, addPoint) => {
  const context = canvas.getContext('2d');

  canvas.addEventListener('mouseup', (e) => {
    endLine();

    const pointData = getPointData(canvas, e);
    addPoint(pointData);

    redrawCanvas(context);
  }, false);
};

export const handleMouseLeave = (canvas, endLine, addPoint) => {
  const context = canvas.getContext('2d');

  canvas.addEventListener('mouseleave', (e) => {
    endLine();

    const pointData = getPointData(canvas, e);
    addPoint(pointData);

    redrawCanvas(context);
  }, false);
};

export const handleMouseMove = (canvas, addPoint) => {
  const context = canvas.getContext('2d');

  const listener = (e) => {
    const isDrawing = store.getState().get('board').get('isDrawing');

    if (isDrawing) {
      const pointData = getPointData(canvas, e);
      addPoint(pointData);

      redrawCanvas(context);
    }
  };

  canvas.addEventListener('mousemove', listener, false);
};
