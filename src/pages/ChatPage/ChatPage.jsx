import './ChatPage.scss';

import React, { PureComponent } from 'react';

import { MessengerRedux } from 'containers/MessengerContainer';
import { ChatListRedux } from 'containers/ChatListContainer';
import { HeaderRedux } from 'containers/HeaderContainer';

export class ChatPage extends PureComponent {
  render() {
    const { match } = this.props;

    return (
      <div className="chat-page">
        <HeaderRedux match={match} />
        <div className="chat-page__chat">
          <ChatListRedux />
          <MessengerRedux match={match} />
        </div>
      </div>
    );
  }
}