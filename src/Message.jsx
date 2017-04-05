import React from 'react';

class Message extends React.Component {
  static get propTypes() { 
    return { 
      user: React.PropTypes.string,
      text: React.PropTypes.string
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
          <span className='message-username'>{this.props.user}</span>
          <span className='message-content'>{this.props.text}</span>
        </div>
    );
  }
}

export default Message;