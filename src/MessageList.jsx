import React from 'react';
import Message from './Message.jsx';
import SystemMessage from './SystemMessage.jsx';

class MessageList extends React.Component {
  static get propTypes() { 
    return { 
      messages: React.PropTypes.array
    }; 
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main className='messages'>
        {this.props.messages.map((item) => <Message key={item.id} user={item.user} text={item.text} />)}
        {/*<Message/>*/}
        <SystemMessage/>
      </main>
    );
  }
}

export default MessageList;
