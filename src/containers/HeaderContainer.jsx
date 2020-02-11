import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Header } from 'components/Header';

class HeaderContainer extends PureComponent {
  render() {
    const { chatName } = this.props;

    return (
      <Header chatName={chatName} />
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

export const HeaderRedux = connect(mapStateToProps)(HeaderContainer);