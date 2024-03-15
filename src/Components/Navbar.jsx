import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
        <div className="nav">
            <p className='logo'>Salome <span className='nameLogo'>Mwati</span></p>
        <div>
          <ul className="">
            <li><Link to="/" className='navName'>Home</Link></li>
            <li><Link to="/about" className='navName'>About</Link></li>
            <li><Link to="/skills" className='navName'>Skills</Link></li>
            <li><Link to="/portfolio" className='navName'>Portfolio</Link></li>
            <li><Link to="/contact" className='navName'>Contact</Link></li>
          </ul>
            
             
        </div>
         
        </div>
  )
}

export default Navbar