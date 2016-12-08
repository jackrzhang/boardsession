import { List, Map } from 'immutable';
import { BLACK } from './markerConstants';

import { ADD_POINT } from './../client/app/canvas/canvasActions';
import { CLEAR_POINTS } from './../client/app/toolbar/toolbarActions';
import { CONNECT_USER } from './../client/socket/socketActions';
import { SYNCHRONIZE } from './../server/socket/socketActions';

const initialPoints = Map();
const initialUserPoints = List([
  Map({
    size: 0,
    color: BLACK,
    isEndOfLine: true,
    x: 0,
    y: 0
  })
]);

const pointsToImmutable = (points) => {
  let immutablePoints = initialPoints;
  Object.keys(points).forEach((userId) => {
    immutablePoints = immutablePoints.set(userId, List());

    points[userId].forEach((point) => {
      immutablePoints = immutablePoints.set(userId, immutablePoints.get(userId).push(
        Map({
          size: point.size,
          color: point.color,
          isEndOfLine: point.isEndOfLine,
          x: point.x,
          y: point.y
        })
      ));
    });
  });

  return immutablePoints;
};

const clearPointsByUser = (points) => {
  let clearedPoints = points;
  Object.keys(points).forEach((userId) => {
    clearedPoints = clearedPoints.set(userId, initialUserPoints);
  });

  return clearedPoints;
};

const pointsReducer = (state = initialPoints, action) => {
  switch (action.type) {
    case SYNCHRONIZE:
      return pointsToImmutable(action.points);
    case CONNECT_USER:
      return state.set(action.userId, initialUserPoints);
    case ADD_POINT:
      return state.set(action.userId, state.get(action.userId).push(
        Map({
          size: action.size,
          color: action.color,
          isEndOfLine: action.isEndOfLine,
          x: action.x,
          y: action.y
        })
      ));
    case CLEAR_POINTS:
      return clearPointsByUser(state);
    default:
      return state;
  }
};

export default pointsReducer;
