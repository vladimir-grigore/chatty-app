import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);
    // Anonymous1 should reference a username 
    const content = 'Anonymous1 changed their name to nomnom.';
    this.state = {content};
  }
  render() {
    return (
      <div className='message system'>{this.state.content}</div>
    );
  }
}

export default Message;