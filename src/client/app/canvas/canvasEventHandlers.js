import { store, socket } from './../../index';
import { getPointData, redrawCanvas } from './../../canvasHelpers';
import { addPoint as addPointActionCreator } from './canvasActions';

// Event Handlers
export const handleMouseDown = (canvas, startLine, addPoint) => {
  const context = canvas.getContext('2d');

  canvas.addEventListener('mousedown', (e) => {
    startLine();

    const pointData = getPointData(canvas, e);
    addPoint(pointData);
    redrawCanvas(context);

    const action = addPointActionCreator(pointData);
    socket.emit('action', action);
  }, false);
};

export const handleMouseUp = (canvas, endLine, addPoint) => {
  const context = canvas.getContext('2d');

  canvas.addEventListener('mouseup', (e) => {
    endLine();

    const pointData = getPointData(canvas, e);
    addPoint(pointData);
    redrawCanvas(context);

    const action = addPointActionCreator(pointData);
    socket.emit('action', action);
  }, false);
};

export const handleMouseLeave = (canvas, endLine, addPoint) => {
  const context = canvas.getContext('2d');

  canvas.addEventListener('mouseleave', (e) => {
    const isDrawing = store.getState().get('board').get('isDrawing');
    if (isDrawing) {
      endLine();

      const pointData = getPointData(canvas, e);
      addPoint(pointData);
      redrawCanvas(context);

      const action = addPointActionCreator(pointData);
      socket.emit('action', action);
    }
  }, false);
};

export const handleMouseMove = (canvas, addPoint) => {
  const context = canvas.getContext('2d');

  const listener = (e) => {
    const isDrawing = store.getState().get('board').get('isDrawing');
    if (isDrawing) {
      const pointData = getPointData(canvas, e);

      addPoint(getPointData(canvas, e));
      redrawCanvas(context);

      const action = addPointActionCreator(pointData);
      socket.emit('action', action);
    }
  };

  canvas.addEventListener('mousemove', listener, false);
};
