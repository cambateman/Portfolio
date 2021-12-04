import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

import '../Footer.css'

const githubIcon = <FontAwesomeIcon icon={faGithub} />
const twitterIcon = <FontAwesomeIcon icon={faTwitter} />
const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />
const instagramIcon = <FontAwesomeIcon icon={faInstagram} />


function Footer() {
    return (
        <footer className="footer-container">

            <h2 className="footer-h2">Cam Bateman {new Date().getFullYear()}&copy;</h2>
            
            <ul className="footer-links">
                <a className="footer-a" href="https://github.com/cambateman"><li className="footer-li-a">{githubIcon}  Github</li></a>
                <a className="footer-a" href="https://www.linkedin.com/in/cam-bateman/"><li className="footer-li-a">{linkedinIcon}  LinkedIn</li></a>
                <li className="footer-li-a">{twitterIcon}  Twitter</li>
                <li className="footer-li-a">{instagramIcon}  Instagram</li>
            </ul>
        </footer>
        )
    }

export default Footer