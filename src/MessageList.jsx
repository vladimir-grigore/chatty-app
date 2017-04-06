import React from 'react';
import Message from './Message.jsx';

function NewMessage(props) {
  if (props.username) {
    return(
      <Message style={props.color} key={props.id} username={props.username} content={props.content} />
    )
  } else {
    return(
      <div className="message system">
        {props.content}
      </div>
    )
  }
}

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
        {this.props.messages.map((item) => <NewMessage key={item.id} id={item.id}  username={item.username} content={item.content} color={item.color}/>)}
      </main>
    );
  }
}

export default MessageList;
