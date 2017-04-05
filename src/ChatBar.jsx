import React from 'react';


class ChatBar extends React.Component {
  static get propTypes() { 
    return { 
      username: React.PropTypes.string, 
      placeholder: React.PropTypes.string
    }; 
  }
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {
      value: '',
      // username: 'usr_undefined'
    };
  }

  handleKeyPress(event){
    this.setState({value: event.target.value});
    if(event.key == 'Enter'){
      console.log('enter press here! ')
    }
  }

  handleKeyDown(event){
    this.setState({value: event.target.value});
  }
  
  render() {
    return (
      <footer className='chatbar'>
        <input className='chatbar-username' placeholder={this.props.username}/>
        <input className='chatbar-message' 
        value={this.state.value}
        placeholder={this.props.placeholder} onKeyPress={this.handleKeyPress} onChange={this.handleKeyDown}/>
      </footer>
    );
  }
}

export default ChatBar;