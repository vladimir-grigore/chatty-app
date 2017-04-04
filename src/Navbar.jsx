import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Chatty'
    };
  }
  render() {
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">{this.state.name}</a>
      </nav>
    );
  }
}

export default Navbar;
