import { OrderedMap } from 'immutable';

import {
  CONNECT_USER,
  DISCONNECT_USER
} from './../client/socket/socketActions';

// Utilize OrderedMap for constant time insertion/deletion with
// the guarantee that the iteration of entries will be the order in which
// they were set()
export const initialUsers = OrderedMap();

const usersReducer = (state = initialUsers, action) => {
  switch (action.type) {
    case CONNECT_USER:
      return state.set(action.username, true);
    case DISCONNECT_USER:
      return state.delete(action.username);
    default:
      return state;
  }
};

export default usersReducer;
