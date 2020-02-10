import './MessageForm.scss';

import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from'@material-ui/icons/Send'

export class MessageForm extends Component {
  state = {
    author: '',
    text: '',
  };

  static propsTypes = {
    onSend: PropsTypes.func,
  };

  handleMessageSend = () => {
    const { onSend } = this.props;
    const { author, text } = this.state;

    if (typeof onSend === 'function' && author && text) {
      onSend(this.state);
      this.setState({
        text: '',
      });
    }
  }

  handleInputChange = (event) => {
    const fieldName = event.target.name;

    this.setState({
      [fieldName]: event.target.value,
    });
  }

  handleEnterDown = (event) => {
    if (event.ctrlKey && event.keyCode === 13) {
      this.handleMessageSend();
    }
  }

  render() {
    const { author, text } = this.state;

    return (
      <div className="message-form">
        <TextField label="Author" name="author" onChange={this.handleInputChange} type="text" value={author} />
        <TextField multiline label="Text" onKeyDown={this.handleEnterDown} name="text" onChange={this.handleInputChange} value={text} ></TextField>
        <Fab onClick={this.handleMessageSend} variant="round" color="primary"><SendIcon /></Fab>
      </div>
    );
  }
}