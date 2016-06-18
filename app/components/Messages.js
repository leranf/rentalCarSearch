import React from 'react';

const Messages = ({messages}) => {
  return messages.success ? (
    <div role="alert" className="text-success">
      {messages.success.map((message, index) => <div key={index}>{message.msg}</div>)}
    </div>
  ) : messages.error ? (
    <div role="alert" className="text-danger">
      {messages.error.map((message, index) => <div key={index}>{message.msg}</div>)}
    </div>
  ) : messages.info ? (
    <div role="alert" className="text-info">
      {messages.info.map((message, index) => <div key={index}>{message.msg}</div>)}
    </div>
  ) : null;
}

export default Messages;
