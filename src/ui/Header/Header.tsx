import React from 'react'
import './Header.sass'
import logo from '../../assets/logo.png'
import Navigation from './Navigation/Navigation'

const Header: React.FC = () => {

    return (
        <header className="header">
            <img className="logo" src={logo} alt="logo" />
            <Navigation />
        </header >
    )
}

export default Header

