import React from 'react';
import Message from './Message.jsx';
import SystemMessage from './SystemMessage.jsx';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main className='messages'>
        <Message/>
        <SystemMessage/>
      </main>
    );
  }
}

export default MessageList;
