import React from 'react';
import ReactDOM from 'react-dom';

const messages = ['Elina', 'Kristina'];

const Message = props => <div>{props.text}</div>;

const MessageList = props => {
  return props.messages.map((message, idx) => <Message text={message} key={idx} />)
};

ReactDOM.render(
  <MessageList messages={messages} />,
  document.getElementById('root')
);