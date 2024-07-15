import React from 'react'
import './Header.css'
import { SocialIcon } from 'react-social-icons'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
      <div className="navbar-left">
      <img src={logo} alt="" />
      <h2>Image factory</h2>
      </div>
         <ul className='menu'>
          <Link to='/'><li>Home</li></Link>
          <Link to='/about'><li>About</li></Link>
          <Link to='/shop'><li>Shop</li></Link>
         <Link to='/contact'> <li>Contact</li></Link>
         </ul>
         <div className='navbar-right'>
         <SocialIcon  url="www.whatsapp.com" />
         <SocialIcon url="www.instagram.com" />
         <SocialIcon url="www.facebook.com" />
         <SocialIcon url="www.email.com" />
         <SocialIcon url="www.youtube.com" />
         </div>
    </div>
  )
}

export default Header