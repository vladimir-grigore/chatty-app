import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
import Navbar from './Navbar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.addMessage = this.addMessage.bind(this);
    let user = 'Vlad';
    this.state = {
      username: user || 'Anonymous',
      content: 'I won\'t be impressed with technology until I can download food.',
      messages: [{id: '1', user: 'Bob', text: 'Bob says "Jump off a cliff"'}, 
                 {id: '2', user: 'Jim', text: 'Back in my time we didn\'t have phones'}]
    };
  }

  addMessage(message){
    let MessageList= this.state.messages;
    MessageList.push(message);
    this.setState({messages: MessageList});
  }

  render() {
    return (
      <div >
        <Navbar/>
        <MessageList messages={this.state.messages}/>
        <ChatBar username={this.state.username} 
        placeholder='Type a message and hit ENTER' />
      </div>
    );
  }
}
export default App;
