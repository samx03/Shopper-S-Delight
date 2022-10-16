import React from 'react'
import './footer.css';
import LogoWhite from '../images/logo-white.svg';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            {/* Footer */}
            <footer className="footer">
                <div className="foot-container">
                    <div className="foot-links">
                        <p className="title">Quick Link</p>
                        <ul className="links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/">Cart</Link></li>
                            <li><Link to="/">About</Link></li>
                        </ul>
                    </div>
                    <div className="foot-links">
                        <p className="title">Services</p>
                        <ul className="links">
                            <li><Link to="/">Clothing</Link></li>
                            <li><Link to="/">Men Products</Link></li>
                            <li><Link to="/">Women Products</Link></li>
                            <li><Link to="/">Grains</Link></li>
                        </ul>
                    </div>
                    <div className="foot-links">
                        <p className="title">Social Media</p>
                        <ul className="links">
                            <li><Link to="/">Instagram</Link></li>
                            <li><Link to="/">Facebook</Link></li>
                            <li><Link to="/">Twitter</Link></li>
                            <li><Link to="/">Youtube</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-logo">
                    <img src={LogoWhite} alt="Logo" />
                </div>
                <div className="copyright">	&#64;Copyright2022</div>
            </footer>
        </>
    )
}

export default Footer