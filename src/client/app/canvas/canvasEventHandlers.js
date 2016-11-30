import store from './../../index';

export const handleMouseDown = (startDrawing, draw) => {
  const canvas = document.getElementById('canvas');

  canvas.addEventListener('mousedown', (e) => {
    startDrawing();
    draw(e.clientX, e.clientY);
  }, false);
};

export const handleMouseUp = (stopDrawing) => {
  const canvas = document.getElementById('canvas');

  canvas.addEventListener('mouseup', () => {
    stopDrawing();
  }, false);
};

export const handleMouseLeave = (stopDrawing) => {
  const canvas = document.getElementById('canvas');

  canvas.addEventListener('mouseleave', () => {
    stopDrawing();
  }, false);
};

export const handleMouseMove = (draw) => {
  const canvas = document.getElementById('canvas');
  const listener = (e) => {
    if (store.getState().get('board').get('isDrawing')) {
      draw(e.clientX, e.clientY);
    }
  };

  canvas.addEventListener('mousemove', listener, false);
};
