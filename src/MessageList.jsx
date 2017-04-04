import React from 'react';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Anonymous1",
      content: "I won't be impressed with technology until I can download food."
    };
  }
  render() {
    return (
      <main className="messages">
        <div className="message">
          <span className="message-username">{this.state.username}</span>
          <span className="message-content">{this.state.content}</span>
        </div>
      </main>
    );
  }
}

export default MessageList;