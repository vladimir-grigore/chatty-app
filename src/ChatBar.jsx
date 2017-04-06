import React, {Component} from 'react';

class ChatBar extends Component {
  static get propTypes() { 
    return { 
      username: React.PropTypes.string,
      placeholder: React.PropTypes.string,
      addMessage: React.PropTypes.func,
      setUser: React.PropTypes.func
    }; 
  }
  constructor(props) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.state = {
      username: '',
      value: ''
    };
  }

  // onKeyPress is used to listen for Enter keypress
  sendMessage(event){
    if(event.key == 'Enter'){
      this.props.addMessage(this.state.value);
      this.setState({value: ''});
    }
  }

  // Text from the input field is stored in this.state.value
  handleKeyDown(event){
    this.setState({value: event.target.value});
  }

  // Update the username in this.username
  changeUsername(event){
    this.setState({username: event.target.value});
  }

  // Set the user in this.props.currentUser
  setUsername(event){
    if(event.key == 'Enter'){
      this.props.setUser(this.state.username);
    }
  }
  
  render() {
    return (
      <footer className='chatbar'>
        <input className='chatbar-username' 
        value={this.state.username}
        placeholder={this.props.username} onKeyPress={this.setUsername} onChange={this.changeUsername}/>
        <input className='chatbar-message' 
        value={this.state.value}
        placeholder={this.props.placeholder} onKeyPress={this.sendMessage} onChange={this.handleKeyDown}/>
      </footer>
    );
  }
}

export default ChatBar;