import React from 'react'
import Logo from '../images/Logo.svg'
import './navbar.css';
import { Link } from 'react-router-dom';
import { Home, Box, ShoppingCart, Info, Lock } from 'react-feather';
import { useMoralis } from "react-moralis";

function Navbar() {
    const { authenticate, account } = useMoralis();
    return (
        <>
            {/* Navbar  */}
            <nav>
                <ul className="navbar">
                    <li>
                        <Link to="/" className="icons">
                            <Home color='#1A1A1E' size="24" /> Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" className="icons">
                            <Box color='#1A1A1E' size="24" /> Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="logo">
                            <img src={Logo} className="logo-img" alt="Logo" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="icons">
                            <ShoppingCart color='#1A1A1E' size="24" /> Cart
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="icons">
                            <Info color='#1A1A1E' size="24" /> About
                        </Link>
                    </li>
                    <li className="login" onClick={() => authenticate()}>
                        <Link to="/">
                            {account ? <span>{account.slice(0,5)}</span> : <Lock color='#1A1A1E' size="24" />}
                        </Link>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default Navbar