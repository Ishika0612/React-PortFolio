import React, { useState } from 'react'
import "./NavBar.css"
import { Menu,X } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    let [isOpen,setIsOpen]=useState(false)

    const handleClick = ()=> {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        if(isOpen) 
          setIsOpen(false); 
    }

  return (
    <div className='navbar'>
        <div>
            <h4>My PortFolio</h4>
        </div>

        <div className={`navlinks ${isOpen ? "open" : ""}`}>
           <ul> 
            <li><Link to="/" className='linking' onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" className='linking' onClick={closeMenu}>About</Link></li> 
            <li><Link to="/education" className='linking' onClick={closeMenu}>Education</Link></li> 
            <li><Link to="/skills" className='linking' onClick={closeMenu}>Skills</Link></li> 
            <li><Link to="/projects" className='linking' onClick={closeMenu}>Projects</Link></li> 
            <li><Link to="/contact" className='linking' onClick={closeMenu}>Contact</Link></li> 
          </ul>
        </div>

        <div className='hamburger' onClick={handleClick}>
            {isOpen ? <X size={40}/> : <Menu size={40}/>}
        </div>
    </div>
  )
}

export default NavBar
