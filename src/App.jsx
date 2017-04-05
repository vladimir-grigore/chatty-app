import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
import Navbar from './Navbar.jsx'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.addMessage = this.addMessage.bind(this);
    this.state = {
      currentUser: {name: 'Anonymous'},
      messages: []
    };
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://127.0.0.1:3001');
    this.socket.onopen = () => {
      console.log('got a connection');
    }
  }

  addMessage(username, message){
    // Get a new user id
    let idsArray = this.state.messages.map((message) => {
      let arr = [];
      arr.push(message.id);
      return arr;
    });
    let maxID = Math.max.apply(null, idsArray);
    let newMessage = {id: maxID + 1, username: username, content: message}
    let MessageList= this.state.messages;
    MessageList.push(newMessage);
    this.setState({messages: MessageList});
    this.socket.send(`User: ${username}, message: ${message}`);
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
