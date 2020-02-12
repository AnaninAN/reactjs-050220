import { handleActions } from 'redux-actions';
import { Map, fromJS, remove } from 'immutable';

import { load, send, add, del } from 'actions/chats';

const initialState = new Map({
  loading: false,
  entries: new Map(),
});

export const chatsReducer = handleActions({
  [load]: (state, action) => {
    const entries = action.payload.reduce((acc, item) => {
      acc[item._id] = item;

      return acc;
    }, {});

    return state.set('entries', fromJS(entries));
  },
  [send]: (state, action) => {
    const { chatId, ...message } = action.payload;

    return state.mergeIn(['entries', chatId, 'messages'], message);
  },
  [add]: (state, action) => {
    const { _id } = action.payload;

    return state.setIn(['entries', _id], fromJS(action.payload));
  },
  [del]: (state, action) => {
    const { chatId } = action.payload;

    return state.deleteIn(['entries', chatId]);
  },
}, initialState);