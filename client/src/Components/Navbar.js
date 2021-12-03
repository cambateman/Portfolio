import React from 'react'
import Logo from '../assets/Logo-whiteback-small.png'

import '../Navbar.css';


function Navbar() {
    return (
    <nav className="navigation-bar">
        <div className="img-container">
            <img src={Logo} alt="" className="nav-img"/>
        </div>
        <div className="links-container">
            <ul className="nav-links-ul">
                <li className="nav-links"><a className="nav-li-a">About</a></li>
                <li className="nav-links"><a className="nav-li-a">Projects</a></li>
                <li className="nav-links"><a className="nav-li-a">Contact</a></li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar