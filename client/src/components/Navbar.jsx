import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../img/logo.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <img src={Logo} alt=""/>
        </div>
        <div className='links'>
          <span>Fred</span>
          <span className="restaurants">
            <Link className="link" to="/Restaurant">
              Restaurants
            </Link>
          </span>
          <span>Logout</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar