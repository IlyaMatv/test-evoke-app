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
                        <NavLink to="/">Expertise</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Team</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Vacansies</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Contacs Us</NavLink>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer