import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Messenger } from 'components/Messenger';
import { load, send } from 'actions/chats';

class MessengerContainer extends PureComponent {
  componentDidMount() {
    const { loadChats } = this.props;

    loadChats();
  }

  handleMessageSend = (message) => {
    const { sendMessage, chatId } = this.props;

    sendMessage({
      ...message,
      chatId
    });
  }

  render() {
    const { messages } = this.props;

    return (
      <Messenger sendMessage={this.handleMessageSend} messages={messages} />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const chats = state.chats.get('entries');
  const { match } = ownProps;

  let messages = null;

  if (match && chats.has(match.params.id)) {
    messages = chats.getIn([match.params.id, 'messages']).toJS();
  }

  return {
    messages,
    chatId: match ? match.params.id : null,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadChats: () => dispatch(load()),
    sendMessage: (message) => dispatch(send(message)),
  }
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);