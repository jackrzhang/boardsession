import { store } from './../../index';
import { getPointData, redrawCanvas } from './../../canvasHelpers';

// Event Handlers
export const handleMouseDown = (canvas, startLine, addPoint) => {
  const context = canvas.getContext('2d');

  canvas.addEventListener('mousedown', (e) => {
    startLine();
    addPoint(getPointData(canvas, e));

    redrawCanvas(context);
  }, false);
};

export const handleMouseUp = (canvas, endLine, addPoint) => {
  const context = canvas.getContext('2d');

  canvas.addEventListener('mouseup', (e) => {
    endLine();
    addPoint(getPointData(canvas, e));

    redrawCanvas(context);
  }, false);
};

export const handleMouseLeave = (canvas, endLine, addPoint) => {
  const context = canvas.getContext('2d');

  canvas.addEventListener('mouseleave', (e) => {
    endLine();
    addPoint(getPointData(canvas, e));

    redrawCanvas(context);
  }, false);
};

export const handleMouseMove = (canvas, addPoint) => {
  const context = canvas.getContext('2d');

  const listener = (e) => {
    const isDrawing = store.getState().get('board').get('isDrawing');

    if (isDrawing) {
      addPoint(getPointData(canvas, e));
      redrawCanvas(context);
    }
  };

  canvas.addEventListener('mousemove', listener, false);
};
