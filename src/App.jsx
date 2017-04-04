import React, {Component} from 'react';
import Message from './Message.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  render() {
    return (
      <main class="messages">
        <Message/>
        <ChatBar/>
      </main>
    );
  }
}
export default App;
