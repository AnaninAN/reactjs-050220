import './MessageList.scss';

import React, { Component } from 'react';
import PropsTypes from 'prop-types';

import { messageType, Message } from 'components/Message';

export class MessageList extends Component {
  static propTypes = {
    messages: PropsTypes.arrayOf(
      PropsTypes.shape(messageType),
    ),
  };

  render() {
    const { messages } = this.props;

    return (
      <div className="message-list">
        {messages.map((message, idx) => <Message key={idx} {...message} />)}
      </div>
    );

  }
}