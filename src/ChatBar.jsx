import React from 'react';


class ChatBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username_placeholder: 'Your Name (Optional)',
      content_placeholder: 'Type a message and hit ENTER'
    };
  }
  render() {
    return (
      <footer className='chatbar'>
        <input className='chatbar-username' placeholder={this.state.username_placeholder}/>
        <input className='chatbar-message' placeholder={this.state.content_placeholder}/>
      </footer>
    );
  }
}

export default ChatBar;