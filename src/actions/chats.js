import { createAction } from 'redux-actions';
import io from 'socket.io-client';
//import { push } from 'connected-react-router';

const socket = io('http://localhost:3000');

export const load = createAction('[Chats] Load');
export const send = createAction('[Chats] Send');
export const add = createAction('[Chats] Add');
export const del = createAction('[Chats] Del');

export const listen = () => dispatch => {
  fetch('http://localhost:3000/chats')
    .then((responce) => responce.json())
    .then((chats) => {
      dispatch(load(chats));
    });

    socket.on('new chat', (chat) => {
    dispatch(add(chat));
    // Переадресация на созданный чат
    //dispatch(push(`/chats/${chat._id}`));
  });

  socket.on('chat message', (message) => {
    dispatch(send(message));
  });

  socket.on('del chat', (id) => {
    dispatch(del({ chatId: id }));
  });
}

export const createChat = chat => {
  socket.emit('new chat', chat);
}

export const delChat = id => {
  socket.emit('del chat', id);
}

export const sendMessage = message => {
  socket.emit('chat message', message);
}