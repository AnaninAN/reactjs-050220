import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { ChatList } from 'components/ChatList';

class ChatListContainer extends PureComponent {
  render() {
    const { chats } = this.props;

    return (
      <ChatList chats={chats} />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const chats = state.chats.get('entries');

  return {
    chats: chats.map((entry) => ({ name: entry.get('name'), link: `/chats/${entry.get('id')}` })).toList().toJS(),
  }
}

export const ChatListRedux = connect(mapStateToProps)(ChatListContainer);