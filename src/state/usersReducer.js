import { OrderedMap, Map } from 'immutable';

import { CONNECT_USER } from './../client/socket/socketActions';
import { DISCONNECT_USER, SYNCHRONIZE } from './../server/socket/socketActions';

// Utilize OrderedMap for constant time insertion/deletion with
// the guarantee that the iteration of entries will be the order in which
// they were set()
export const initialUsers = OrderedMap();

const usersToImmutable = (users, state) => {
  let immutableUsers = OrderedMap();

  // Utilize OrderedMap to maintain order of iteration
  state.keySeq().toArray().forEach((userId) => {
    immutableUsers = immutableUsers.set(userId, Map({
      username: users[userId].username,
      x: users[userId].x,
      y: users[userId].y
    }));
  });

  return immutableUsers;
};

const usersReducer = (state = initialUsers, action) => {
  switch (action.type) {
    case SYNCHRONIZE:
      return usersToImmutable(action.users, state);
    case CONNECT_USER:
      return state.set(action.userId, Map({
        username: action.username,
        x: 50,
        y: 50
      }));
    case DISCONNECT_USER:
      return state.delete(action.userId);
    default:
      return state;
  }
};

export default usersReducer;
