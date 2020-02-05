import React, { Component } from 'react';
import PropsTypes from 'prop-types';

export class MessageForm extends Component {
  state = {
    author: '',
    text: '',
  }

  static propsTypes = {
    onSend: PropsTypes.func,
  }

  handleMessageSend = () => {
    const { onSend } = this.props;

    if (typeof onSend === 'function') {
      onSend(this.state);
    }
  }

  handleInputChange = (event) => {
    const fieldName = event.target.name;

    this.setState({
      [fieldName]: event.target.value,
    });
  }

  render() {
    const { author, text } = this.state;
    return (
      <div>
        <input name="author" onChange={this.handleInputChange} type="text" value={author} /><br/>
        <textarea name="text" onChange={this.handleInputChange} value={text} ></textarea><br/>
        <button onClick={this.handleMessageSend}>Send</button>
      </div>
    );
  }
}