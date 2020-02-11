import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { chatsReducer } from 'reducers/chats';

export const initReducer = history => combineReducers({
  router: connectRouter(history),
  chats: chatsReducer,
});