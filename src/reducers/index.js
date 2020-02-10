import { combineReducers } from 'redux';

import { chatsReducer } from 'reducers/chats';

export const rootReducer = combineReducers({
  chats: chatsReducer,
});