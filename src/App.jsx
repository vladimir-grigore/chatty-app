import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
import Navbar from './Navbar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    let user = 'Vlad';
    this.state = {
      username: user || 'Anonymous',
      content: 'I won\'t be impressed with technology until I can download food.'
    };
  }
  render() {
    return (
      <div>
        <Navbar/>
        <MessageList/>
        <ChatBar name={this.state.username}/>
      </div>
    );
  }
}
export default App;
