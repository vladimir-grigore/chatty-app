import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
import Navbar from './Navbar.jsx'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.addMessage = this.addMessage.bind(this);
    this.displayUserMessage = this.displayUserMessage.bind(this);
    this.displaySystemMeessage = this.displaySystemMeessage.bind(this);
    this.setUser = this.setUser.bind(this);
    this.state = {
      currentUser: 'Anonymous',
      messages: [],
      connections: 0
    };
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://127.0.0.1:3001');
    this.socket.onopen = () => {}
    this.socket.onmessage = (messageEvent) => {
      const message = JSON.parse(messageEvent.data);
      switch(message.type){
        case 'numberOfConnections':
          this.setState({connections: message.connections});
          break;
        case 'incomingMessage':
        this.displayUserMessage(message.id, message.username, 
        message.content, message.color);
          break;
        case 'incomingNotification':
          this.displaySystemMeessage(message.id, message.content);
          break;
        default:
          // show an error in the console if the message type is unknown
          throw new Error('Unknown event type', message.type);
      }
    }
  }

  addMessage(message){
    // Send the message to the server
    this.socket.send(JSON.stringify({
      type: 'postMessage',
      username: this.state.currentUser, 
      content: message
    }));
  }

  setUser(username){
    this.socket.send(JSON.stringify({
      type: 'postNotification',
      content: `${this.state.currentUser} has changed their name to ${username}`
    }));
    this.setState({currentUser: username});
  }

  displaySystemMeessage(id, message){
    let newMessage = {id: id, username: null, content: message}
    let MessageList = this.state.messages;
    MessageList.push(newMessage);
    this.setState({messages: MessageList});
  }

  displayUserMessage(id, username, message, color){
    let newMessage = {id: id, username: username, content: message, color: color}
    let MessageList = this.state.messages;
    MessageList.push(newMessage);
    this.setState({messages: MessageList});
  }

  render() {
    return (
      <div >
        <Navbar connections={this.state.connections}/>
        <MessageList messages={this.state.messages}/>
        <ChatBar username={this.state.currentUser} 
        placeholder='Type a message and hit ENTER' addMessage={this.addMessage} setUser={this.setUser}/>
      </div>
    );
  }
}
export default App;
