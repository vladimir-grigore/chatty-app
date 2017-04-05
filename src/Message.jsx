import React from 'react';

class Message extends React.Component {
  static get propTypes() { 
    return { 
      username: React.PropTypes.string,
      content: React.PropTypes.string
    }; 
  }
  constructor(props) {
    super(props);
    // Anonymous1 should reference a username 
    this.state = {
    };
  }

  render() {
    return (
      <div className='message'>
          {/*{content}*/}
          <span className='message-username'>{this.props.username}</span>
          <span className='message-content'>{this.props.content}</span>
        </div>
    );
  }
}

export default Message;