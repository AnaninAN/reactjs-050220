import React, { Component } from 'react';

import { MessageList } from './MessageList';
import { MessageForm } from './MessageForm';

const messages = ['Привет!', 'Как дела?', 'Что молчишь?', 'Ну тогда пока('];

export class Messenger extends Component {
  state = {
    messages: [
      {text: 'Привет всем!', author: 'Andrew'},
    ],
  }

  interval = null;

  componentDidMount() {
    this.interval = setInterval(() => {
      const randIndex = Math.floor(Math.random() * messages.length);

      this.setState({
        messages: this.state.messages.concat([{text: messages[randIndex], author: 'Andrew'}]),
      });
    }, 5000);
  }

  componentDidUpdate() {
    if (this.state.messages[this.state.messages.length - 1].author !== 'Bot') {
      setTimeout(() => {
        this.setState({
          messages: this.state.messages.concat([{text: 'Привет, я БОТ!', author: 'Bot'}]),
        });
      }, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleSendMessage = (message) => {
    console.log(message);
  }

  render() {
    const { messages } = this.state;

    return (
      <div>
        <ul>
          {messages.map((message, idx) => <li key={idx}>{message.author}: {message.text}</li>)}
        </ul>
        <MessageForm onSend={this.handleSendMessage} />
      </div>
    );
  }
}