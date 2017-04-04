import React from 'react';


class ChatBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username_placeholder: "Anonymous1",
      content_placeholder: "I won't be impressed with technology until I can download food."
    };
  }
  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder = {this.state.username_placeholder}/>
        <input className="chatbar-content" placeholder = {this.state.content_placeholder}/>
      </footer>
    );
  }
}

export default ChatBar;