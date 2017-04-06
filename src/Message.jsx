import React, {Component} from 'react';

function CustomContent(props) {
  let imageChecker = /([a-z\-_0-9\/\:\.]*\.jpg|jpeg|png|gif)/i;
  // console.log("props.content:", props.content)
  // console.log("CHECKER_exec:", imageChecker.test(props.content));

  if(imageChecker.test(props.content)){
    return(
      <img src={props.content}/>
    )
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
    this.state = {
    };
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