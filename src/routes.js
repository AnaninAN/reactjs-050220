import { ChatPage } from 'pages/ChatPage';

export const routes = [
  {
    path: '/',
    exact: true,
    component: ChatPage,
  },
  {
    path: '/chats/:id',
    exact: true,
    component: ChatPage,
  }
];