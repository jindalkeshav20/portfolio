import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="tj-footer-area style-2" role="contentinfo">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="footer-logo-box">
                            <Link to="/" aria-label="Homepage">
                                <img 
                                    src="images/logo.png" 
                                    alt="Keshav Jindal Logo" 
                                    title="Keshav Jindal Logo" 
                                />
                            </Link>
                        </div>
                        <div className="footer-menu">
                            <nav aria-label="Footer Navigation">
                                <ul>
                                    <li>
                                        <Link to="/about" aria-label="About Us">
                                            About
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link to="/services" aria-label="Our Services">
                                            Services
                                        </Link>
                                    </li> */}
                                    <li>
                                        <Link to="/portfolio" aria-label="Our Portfolio">
                                            Portfolios
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact" aria-label="Contact Us">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="copy-text">
                            <p>
                                © 2025 All rights reserved by{" "}
                                <Link 
                                    to="mailto:jindalkeshav20@gmail.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label="Visit Keshav Jindal website"
                                >
                                    Keshav Jindal
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
