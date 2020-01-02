import React from 'react';
import './header.styles.css';
import { ReactComponent as Logo } from '../../assets/BlogM.svg';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
  <Logo className='logo' />
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