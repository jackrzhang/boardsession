import store from './../../index';

// Drawing Functionality

const drawCircle = (canvas, x, y) => {
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
      draw(e.clientX, e.clientY);
      drawCircle(canvas, e.clientX, e.clientY);
    }
  };

  canvas.addEventListener('mousemove', listener, false);
};
