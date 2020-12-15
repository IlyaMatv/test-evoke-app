import React from 'react'
import './Header.sass'
import logo from '../../assets/logo.png'
import Navigation from './Navigation/Navigation'
import { NavLink } from 'react-router-dom'

const Header: React.FC = () => {

    return (
        <header className="header">
            <NavLink to="/">
                <img className="logo" src={logo} alt="logo" />
            </NavLink>
            <Navigation />
        </header >
    )
}

export default Header

