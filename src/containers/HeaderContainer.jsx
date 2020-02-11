import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { Header } from 'components/Header';
import { add } from 'actions/chats';

class HeaderContainer extends PureComponent {
  handleAddChat = () => {
    const { AddChat, newChatId, redirect } = this.props;
    const nameChat = prompt('Введите имя чата');

    if (nameChat) {
      AddChat({ name: nameChat, chatId: newChatId });
      redirect(newChatId);
    }
  }

  render() {
    const { chatName } = this.props;

    return (
      <Header addChat={this.handleAddChat} chatName={chatName} />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const chats = state.chats.get('entries');
  const { match } = ownProps;

  const lastId = state.chats.get('entries').size ? state.chats.get('entries').last().get('id') : 0;

  return {
    chatName: chats.getIn([match.params.id, 'name']),
    newChatId: +lastId + 1,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    AddChat: (chat) => dispatch(add(chat)),
    redirect: (id) => dispatch(push(`/chats/${id}`)),
  }
}

export const HeaderRedux = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);