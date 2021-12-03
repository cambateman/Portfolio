import React from 'react'
import Logo from './assets/Logo-whiteback-small.png'

import './Navbar.css';


function Navbar() {
    return (
    <nav className="navigation-bar">
        <div className="img-container">
            <img src={Logo} alt="" className="nav-img"/>
        </div>
        <div className="links-container">
            <ul className="nav-links-ul">
                <li className="nav-links">About</li>
                <li className="nav-links">Projects</li>
                <li className="nav-links">Contact</li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar