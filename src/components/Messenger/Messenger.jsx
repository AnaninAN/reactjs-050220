import './Messenger.scss';

import React, { PureComponent } from 'react';

import { MessageList } from 'components/MessageList';
import { MessageForm } from 'components/MessageForm';

export class Messenger extends PureComponent {
  render() {
    const { messages, sendMessage } = this.props;

    return (
      <div className="messenger">
        {messages ? <MessageList messages={messages} /> : 'Не выбран чат'}
        {messages && <MessageForm onSend={sendMessage} />}
      </div>
    );
  }
}