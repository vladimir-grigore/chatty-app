import React, {Component} from 'react';
import Message from './Message.jsx';
import SystemMessage from './SystemMessage.jsx';

class MessageList extends Component {
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
        {this.props.messages.map((item) => <Message key={item.id} username={item.username} content={item.content} />)}
        <SystemMessage/>
      </main>
    );
  }
}

export default MessageList;
