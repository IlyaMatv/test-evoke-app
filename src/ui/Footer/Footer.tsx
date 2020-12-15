import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.sass'

const Footer: React.FC = () => {

    return (
        <footer className="footer">
            <div className="footer__navigation">
                <ul>
                    <li>
                        <NavLink to="/services">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" href="#">Expertise</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" href="#">Team</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" href="#">Vacansies</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" href="#">Contacs Us</NavLink>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer