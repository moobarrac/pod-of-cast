import React, { useState } from 'react'
import Logo from '../../assests/images/logo.png';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='navbar-content'>
          <div className='logo'>
            <Link to='/'>
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <ul className='menu-links'>
            <li><Link to={''}>Episodes</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to={''}>Blog</Link></li>
          </ul>
          <div className='btn-container'>
            <button className='btn btn-outline'>Recent Episodes</button>
            <button className='btn btn-dark btn-shadow'>Subscrise</button>
          </div>
          <button className='btn btn-dark btn-menu' onClick={() => setShowNavbar(true)}>
            <span>Menu</span>
          </button>


          {showNavbar && <div className='show-links'>
            <button className='btn-cancel' onClick={() => setShowNavbar(false)}>X</button>
            <ul className='sub-menu-links'>
              <li><Link to=''>Episodes</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to={''}>Blog</Link></li>
            </ul>
            <div className='sub-btn-container'>
              <button className='btn btn-outline'>Recent Episodes</button>
              <button className='btn btn-dark btn-shadow'>Subscribe</button>
            </div>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Navbar