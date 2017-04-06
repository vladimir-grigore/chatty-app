import React from 'react';

class Navbar extends React.Component {
  static get propTypes() { 
    return { 
      connections: React.PropTypes.number
    }; 
  }
  constructor(props) {
    super(props);
    this.state = {
      name: 'Chatty'
    };
  }
  render() {
    return (
      <nav className='navbar'>
        <a href='/' className='navbar-brand'>{this.state.name}</a>
        <div className='connections' >{this.props.connections} users online</div>
      </nav>
    );
  }
}

export default Navbar;
