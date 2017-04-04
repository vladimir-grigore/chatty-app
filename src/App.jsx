import React, {Component} from 'react';
import Message from './Message.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Chatty</h1>
        <Message/>
        <ChatBar/>
      </div>
    );
  }
}
export default App;
