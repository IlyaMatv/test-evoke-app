import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.sass'

const Navigation: React.FC = () => {

    return (
        <nav className="header__navigation">
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
            <div>
                <button className="navigation__lang-btn">EN</button>
            </div>
        </nav>
    )
}

export default Navigation