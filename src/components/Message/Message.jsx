import './Message.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const messageType = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export class Message extends Component {
  static propTypes = messageType;

  render() {
    const { author, text } = this.props;

    const classes = classNames('message', {
      'message-owner': author !== 'Bot',
      'message-companion': author === 'Bot',
    });

    return (
      <div className={classes}>
        <div>{text}</div>
        <div className="message-sender">{author}</div>
      </div>
    );
  }
}