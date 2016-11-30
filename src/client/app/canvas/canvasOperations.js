import store from './../../index';

const getMarkerState = () => {
  const markerState = store.getState().get('marker');

  return {
    size: markerState.get('size'),
    color: markerState.get('color')
  };
};

const getDrawLocation = (canvas, e) => {
  const rect = canvas.getBoundingClientRect();

  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
};

// Drawing Functionality
const redrawCanvas = (context, marker, location) => {
  context.strokeStyle = marker.color;
  context.lineJoin = 'round';
  context.lineWidth = marker.size;
};

// Event Handlers
export const handleMouseDown = (canvas, startDrawing, draw) => {
  const context = canvas.getContext('2d');

  canvas.addEventListener('mousedown', (e) => {
    startDrawing();

    const marker = getMarkerState();
    const location = getDrawLocation(canvas, e);

    draw(marker, location);
    redrawCanvas(context, marker, location);
  }, false);
};

export const handleMouseUp = (canvas, stopDrawing) => {
  canvas.addEventListener('mouseup', () => {
    stopDrawing();
  }, false);
};

export const handleMouseLeave = (canvas, stopDrawing) => {
  canvas.addEventListener('mouseleave', () => {
    stopDrawing();
  }, false);
};

export const handleMouseMove = (canvas, draw) => {
  const context = canvas.getContext('2d');

  const listener = (e) => {
    const isDrawing = store.getState().get('board').get('isDrawing');

    if (isDrawing) {
      const marker = getMarkerState();
      const location = getDrawLocation(canvas, e);

      draw(marker, location);
      redrawCanvas(context, marker, location);
    }
  };

  canvas.addEventListener('mousemove', listener, false);
};
