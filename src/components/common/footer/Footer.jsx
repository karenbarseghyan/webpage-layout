import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {

  return(
    <nav>
      <ul>
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Footer; 