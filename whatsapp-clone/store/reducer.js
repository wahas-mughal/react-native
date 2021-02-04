import {CALLS, CHATS, STATUSES} from '../data/dummy-data';

const initialState = {
  chats: CHATS,
  statuses: STATUSES,
  calls: CALLS
};

export default (state = initialState, action) => {
  return state;
};
