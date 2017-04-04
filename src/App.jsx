import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
import Navbar from './Navbar.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <MessageList/>
        <ChatBar/>
      </div>
    );
  }
}
export default App;
