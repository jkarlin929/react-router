import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/house">House</Link></li>
            <li><Link to="/house/kitchen">Kitchen</Link></li>
            <li><Link to="/house/porch">Porch</Link></li>
          </ul>
        </nav>
      </header>
    );
  };
}

export default Header;

