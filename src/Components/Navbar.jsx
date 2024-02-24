import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    
        <div className="nav">
            <p className='logo'>Salome <span className='nameLogo'>Mwati</span></p>
        <ul>
            <li className="navLink">Home</li>
            <li className="navLink">About</li>
            <li className="navLink">Portfolio</li>
            <li className="navLink">Services</li>
            <li className="navLink">Contact</li>
        </ul>
        </div>
  )
}

export default Navbar