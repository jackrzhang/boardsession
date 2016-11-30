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

export const handleMouseLeave = (canvas, endLine) => {
  canvas.addEventListener('mouseleave', () => {
    endLine();
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
