import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
 let newVar = "something"
  return (<header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/house">House</Link></li>
        <li><Link to="/house/kitchen">Kitchen</Link></li>
        <li><Link to="/house/porch">Porch</Link></li>
      </ul>
    </nav>
  </header>
  )
}


export default Header;
