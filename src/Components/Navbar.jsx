import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
        <div className="nav">
            <p className='logo'>Salome <span className='nameLogo'>Mwati</span></p>
        <ul>
            <li className="navLink" >Home
            {/* <Link to="/">Home</Link> */}
            </li>
            <li className="navLink" >About
            {/* <Link to="/about">About</Link> */}
            </li>
            <li className="navLink" >Skills
            {/* <Link to="/skills">Skills</Link> */}
            </li>
            <li className="navLink" >Portfolio
            {/* <Link to="/portfolio">Portfolio</Link> */}
            </li>
            <li className="navLink" >Contact
            {/* <Link to="/contact">Contact</Link> */}
            </li>     
        </ul>
         
        </div>
  )
}

export default Navbar