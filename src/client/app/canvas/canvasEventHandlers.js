// utilize a locally scoped isDrawing boolean for adjusting
// the isDrawing event handler
let isDrawing = false;

export const handleMouseDown = (startDrawing, draw) => {
  const canvas = document.getElementById('canvas');

  canvas.addEventListener('mousedown', (e) => {
    startDrawing();
    isDrawing = true;
    draw(e.clientX, e.clientY);
  }, false);
};

export const handleMouseUp = (stopDrawing) => {
  const canvas = document.getElementById('canvas');

  canvas.addEventListener('mouseup', () => {
    stopDrawing();
    isDrawing = false;
  }, false);
};

export const handleMouseLeave = (stopDrawing) => {
  const canvas = document.getElementById('canvas');

  canvas.addEventListener('mouseleave', () => {
    stopDrawing();
    isDrawing = false;
  }, false);
};


export const handleMouseMove = (draw) => {
  const canvas = document.getElementById('canvas');

  canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
      draw(e.clientX, e.clientY);
    }
  }, false);
};
