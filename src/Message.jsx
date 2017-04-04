import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);
    // Anonymous1 should reference a username 
    const greeting = 'Anonymous1 changed their name to nomnom.';
    this.state = {greeting};
  }
  render() {
    return (
      <div className='message system'>{this.state.greeting}</div>
    );
  }
}

export default Message;