import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);
    // Anonymous1 should reference a username 
    this.state = {
      username: 'Anonymous1',
      content: 'I won\'t be impressed with technology until I can download food.'
    };
  }
  render() {
    return (
      <div className='message'>
          <span className='message-username'>{this.state.username}</span>
          <span className='message-content'>{this.state.content}</span>
        </div>
    );
  }
}

export default Message;