import './ChatList.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export class ChatList extends Component {
  render() {
    const { chats, delChat } = this.props;

    return (
     <div className="chat-list">
      <List>
        {chats.map((chat, idx) => (
          <ListItem key={chat.id}>
            <Link to={chat.link}>
              <ListItemText primary={chat.name}></ListItemText>
            </Link>
            <button id={chat.id} className="chat-list__del" onClick={delChat}>x</button>
          </ListItem>
        ))}
      </List>
     </div>
    );
  }
}