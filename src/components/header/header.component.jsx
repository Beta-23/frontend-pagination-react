import React from 'react';
import './header.styles.css';


const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <a className='logo-container' href='/'>
      
    </a>
    <div className='options'>
      <a className='option' href='/blog'>
        BLOG
      </a>
      <a className='option' href='/blog'>
        CONTACT
      </a> 
    </div>
   </div> 
);

export default Header;