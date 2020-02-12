import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Header } from 'components/Header';
import { createChat } from 'actions/chats';

class HeaderContainer extends PureComponent {
  handleAddChat = () => {
    const { createChat } = this.props;
    const nameChat = prompt('Введите имя чата');

    if (nameChat) {
      createChat({ name: nameChat });
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

  return {
    chatName: chats.getIn([match.params.id, 'name']),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createChat,
  }
}

export const HeaderRedux = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);