import './ChatList.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export class ChatList extends Component {
  render() {
    const { chats } = this.props;

    return (
     <div className="chat-list">
      <List>
        {chats.map((chat, idx) => (
          <ListItem key={idx}>
            <Link to={chat.link}>
              <ListItemText primary={chat.name}></ListItemText>
            </Link>
          </ListItem>
        ))}
      </List>
     </div>
    );
  }
}