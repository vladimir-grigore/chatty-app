import React from 'react';


class ChatBar extends React.Component {
  static get propTypes() { 
    return { 
      name: React.PropTypes.string 
    }; 
  }
  constructor(props) {
    super(props);
    this.state = {
      username: 'usr_undefined',
      // username_placeholder: 'Your Name (Optional)',
      content_placeholder: 'Type a message and hit ENTER'
    };
  }
  

  render() {
    return (
      <footer className='chatbar'>
        <input className='chatbar-username' placeholder={this.props.name}/>
        <input className='chatbar-message' placeholder={this.state.content_placeholder}/>
      </footer>
    );
  }
}

export default ChatBar;