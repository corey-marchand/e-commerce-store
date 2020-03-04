import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import Logo from '../../assets/logo.png';

import './header.styles.scss';


const Header = ({ currentUser }) => (
  <div className='header'>
    <img className='logo-container' 
      to="/" 
      src={Logo}>
    </img>
    <div className='options'>
      <Link className='options' to='/'>
        HOME
      </Link>
      <Link className='options' to='/shop'>
        SHOP
      </Link>
      <Link className='options' to='/shop'>
        CONTACT
      </Link>
      {/* <Link className='options' to='/signin'>
        SIGN IN
      </Link> */}
      {
        currentUser ? 
        <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
        :
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
   </div>
  </div>
)

export default Header;