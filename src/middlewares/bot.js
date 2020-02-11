import { send } from 'actions/chats';

export const bot = store => next => action => {
  if (action.type === send.toString()) {
    const { chatId, author } = action.payload;

    if (author !== 'Bot') {
      setTimeout(() => {
        store.dispatch(send({ chatId, author: 'Bot', text: `Привет, ${author}! Я бот!` }));
      }, 1000);
    }
  }

  return next(action);
}