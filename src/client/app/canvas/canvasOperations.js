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

const drawOnCanvas = (canvas, marker, location) => {
  // const context = canvas.get2
};


// Event Handlers

export const handleMouseDown = (canvas, startDrawing, draw) => {
  canvas.addEventListener('mousedown', (e) => {
    startDrawing();
    draw(e.clientX, e.clientY);
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
  const listener = (e) => {
    const isDrawing = store.getState().get('board').get('isDrawing');

    if (isDrawing) {
      const marker = getMarkerState();
      const location = getDrawLocation(canvas, e);

      draw(marker, location);
      drawOnCanvas(canvas, marker, location);
    }
  };

  canvas.addEventListener('mousemove', listener, false);
};
