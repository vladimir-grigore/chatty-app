import React, {Component} from 'react';

class Message extends Component {
  static get propTypes() { 
    return { 
      username: React.PropTypes.string,
      content: React.PropTypes.string,
      style: React.PropTypes.any
    }; 
  }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className='message'>
        <span className='message-username' style={this.props.style}>{this.props.username}</span>
        <span className='message-content'>{this.props.content}</span>
      </div>
    );
  }
}

export default Message;