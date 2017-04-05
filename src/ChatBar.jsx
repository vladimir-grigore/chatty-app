import React, {Component} from 'react';

class ChatBar extends Component {
  static get propTypes() { 
    return { 
      username: React.PropTypes.string, 
      placeholder: React.PropTypes.string,
      addMessage: React.PropTypes.func
    }; 
  }
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.state = {
      username: '',
      value: ''
    };
  }

  // onKeyPress is used to listen for Enter keypress
  handleKeyPress(event){
    if(event.key == 'Enter'){
      this.props.addMessage(this.state.username, this.state.value);
      this.setState({username: '', value: ''});
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
  
  render() {
    return (
      <footer className='chatbar'>
        <input className='chatbar-username' 
        value={this.state.username}
        placeholder={this.state.username || 'Anonymous'} onChange={this.changeUsername}/>
        <input className='chatbar-message' 
        value={this.state.value}
        placeholder={this.props.placeholder} onKeyPress={this.handleKeyPress} onChange={this.handleKeyDown}/>
      </footer>
    );
  }
}

export default ChatBar;