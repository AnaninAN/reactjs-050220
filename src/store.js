import { createStore, applyMiddleware } from 'redux';

import { logger } from 'middlewares/logger';
import { bot } from 'middlewares/bot';

import { rootReducer } from 'reducers';

export const store = createStore(rootReducer, applyMiddleware(logger, bot));