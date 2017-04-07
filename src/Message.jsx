import React, {Component} from 'react';

CustomContent.propTypes = {
  content: React.PropTypes.string
}

function CustomContent(props) {
  let imageChecker = /([a-z\-_0-9\/\:\.]*\.jpg|jpeg|png|gif)/i;
  // Create an image tag if user enters an image url
  if(imageChecker.test(props.content)){
    return(<img src={props.content}/>);
  } else {
    return(
      <div>{props.content}</div>
    )
  }
}

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
  }
  render() {
    return (
      <div className='message'>
        <span className='message-username' style={this.props.style}>{this.props.username}</span>
        <span className='message-content'><CustomContent content={this.props.content}/></span>
      </div>
    );
  }
}

export default Message;
