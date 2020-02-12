import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { ChatList } from 'components/ChatList';
import { delChat } from 'actions/chats';

class ChatListContainer extends PureComponent {
  handleDelChat = (event) => {
    const { delChat } = this.props;

    delChat({ chatId: event.target.id });
  }

  render() {
    const { chats } = this.props;

    return (
      <ChatList chats={chats} delChat={this.handleDelChat} />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const chats = state.chats.get('entries');

  return {
    chats: chats.map((entry) => ({ name: entry.get('name'), link: `/chats/${entry.get('_id')}`, id: entry.get('_id') })).toList().toJS(),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    delChat,
  }
}

export const ChatListRedux = connect(mapStateToProps, mapDispatchToProps)(ChatListContainer);