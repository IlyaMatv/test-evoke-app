import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.sass'

const Navigation: React.FC = () => {

    const [showBurgerMenu, setShowBurgerMenu] = useState(false)

    return (
        <>
            {showBurgerMenu && <div className="navigation__drop-down-menu">
                <ul>
                    <li>
                        <NavLink onClick={() => setShowBurgerMenu(false)} to="/services">Services</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setShowBurgerMenu(false)} to="/">Expertise</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setShowBurgerMenu(false)} to="/">Team</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setShowBurgerMenu(false)} to="/">Vacansies</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setShowBurgerMenu(false)} to="/">Contacs Us</NavLink>
                    </li>
                </ul>
            </div>}
            <button onClick={() => setShowBurgerMenu(!showBurgerMenu)} className="navigation__burger-menu">
                <div></div>
                <div></div>
                <div></div>
            </button>
            <nav className="header__navigation">
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
                <div>
                    <button className="navigation__lang-btn">EN</button>
                </div>
            </nav>
        </>

    )
}

export default Navigation