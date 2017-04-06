import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
import Navbar from './Navbar.jsx'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.addMessage = this.addMessage.bind(this);
    this.displayMeessage = this.displayMeessage.bind(this);
    this.state = {
      currentUser: {name: 'Anonymous'},
      messages: []
    };
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://127.0.0.1:3001');
    this.socket.onopen = () => {}
    this.socket.onmessage = (messageEvent) => {
      const message = JSON.parse(messageEvent.data);
      this.displayMeessage(message.id, message.username, message.message);
    }
  }

  addMessage(username, message){
    // Get a new user id
    const uuidV1 = require('uuid/v1');

    // Set user to Anonymous id user field was empty
    if (!username) {
      username = this.state.currentUser.name;
    }

    // Send the message to the server
    this.socket.send(JSON.stringify({
      id: uuidV1(), 
      username: username, 
      message: message
    }));
  }

  displayMeessage(id, username, message){
    let newMessage = {id: id, username: username, content: message}
    let MessageList = this.state.messages;
    MessageList.push(newMessage);
    this.setState({messages: MessageList});
  }

  render() {
    return (
      <div >
        <Navbar/>
        <MessageList messages={this.state.messages}/>
        <ChatBar username={this.state.currentUser.name} 
        placeholder='Type a message and hit ENTER' addMessage={this.addMessage}/>
      </div>
    );
  }
}
export default App;
