/* eslint-disable no-param-reassign */

import { store } from './index';
import { WHITE, ERASE } from './../state/markerConstants';

export const getPointData = (canvas, e) => {
  const boardState = store.getState().get('board');
  const markerState = store.getState().get('marker');
  const rect = canvas.getBoundingClientRect();

  // override color to be white if marker mode is ERASE
  const pointColor = markerState.get('mode') === ERASE ?
    WHITE :
    markerState.get('color');

  return {
    room: boardState.get('room'),
    userId: boardState.get('userId'),
    isEndOfLine: !boardState.get('isDrawing'),
    size: markerState.get('size'),
    color: pointColor,
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
};

export const redrawCanvas = (context) => {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);

  // Iterate through each user, then draw points for individual users
  store.getState().get('points').valueSeq().toArray()
  .forEach((userPoints) => {
    userPoints.forEach((point, i) => {
      context.beginPath();

      // ensure that point is NOT the start of a line
      const isStartOfLine = (i && userPoints.get(i - 1).get('isEndOfLine'));
      if (!isStartOfLine) {
        context.moveTo(userPoints.get(i - 1).get('x'), userPoints.get(i - 1).get('y'));
      } else {
        context.moveTo(point.get('x') - 0.1, point.get('y') - 0.1);
      }

      if (i) {
        context.lineTo(point.get('x'), point.get('y'));
      }

      context.closePath();

      context.lineWidth = point.get('size');
      context.lineJoin = 'round';
      context.strokeStyle = point.get('color');
      context.stroke();
    });
  });
};

export const sizeCanvas = (canvas) => {
  canvas.height = window.innerHeight - 60;
  canvas.width = window.innerWidth;

  const context = canvas.getContext('2d');
  redrawCanvas(context);
};
