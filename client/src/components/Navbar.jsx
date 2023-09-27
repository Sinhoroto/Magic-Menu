import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom'
import Logo from "../img/logo.png"

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState([]);

  const login = async (inputs) => {
    const res = await axios.get("http://localhost:8800/api/auth/login", inputs);
    setCurrentUser(res.data);
  };

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <img src={Logo} alt=""/>
        </div>
        <div className='name'>
          <span>Magic Menu</span>
        </div>
        <div className='links'>
          <span>{currentUser}</span>
          <span className="restaurants">
            <Link className="link" to="/">
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