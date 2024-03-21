import React from 'react'
import { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import menu from '../assets/Menu.png'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  return (
    
        <div className="nav">
            <p className='logo'>Salome <span className='nameLogo'>Mwati</span></p>
        <div className='deskTopMenu'>
          <ul className="">
            <li><Link to="/" className='navName'>Home</Link></li>
            <li><Link to="/about" className='navName'>About</Link></li>
            <li><Link to="/skills" className='navName'>Skills</Link></li>
            <li><Link to="/portfolio" className='navName'>Portfolio</Link></li>
            <li><Link to="/contact" className='navName'>Contact</Link></li>
          </ul>     
        </div>

        {/* <div className='mobMenu'>               */}
          <img src={menu} alt="" className='imgMenu' onClick={()=>setShowLinks(!showLinks)}/>
        {/* <div className="menuBar"  style={{display: showLinks? 'flex': 'none'}}> */}
          <ul className='menuBar' style={{display: showLinks? 'flex': 'none'}}>
            <li><Link to="/" className='navMenuLinks' onClick={()=>setShowLinks(false)}>Home</Link></li>
            <li><Link to="/about" className='navMenuLinks' onClick={()=>setShowLinks(false)}>About</Link></li>
            <li><Link to="/skills" className='navMenuLinks' onClick={()=>setShowLinks(false)}>Skills</Link></li>
            <li><Link to="/portfolio" className='navMenuLinks' onClick={()=>setShowLinks(false)}>Portfolio</Link></li>
            <li><Link to="/contact" className='navMenuLinks' onClick={()=>setShowLinks(false)}>Contact</Link></li>
          </ul>
        </div>
        // </div>  
        // </div>
  )
}

export default Navbar